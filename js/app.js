// ─── STATE ────────────────────────────────────────────────────────
const state = {
  activeDay: 0,
  activeExercise: null,
  activePoseFrame: 0,
  poseInterval: null,
  breathPhase: 'inhale',
  breathInterval: null,
  breathCountdown: 0,
  breathTimer: null,
  restTimer: null,
  restRemaining: 0,
  restTotal: 0,
  completedSets: {},  // key: "dayIdx-phaseIdx-exIdx", value: number of sets done
  sessionStartTime: null
};

// ─── INIT ────────────────────────────────────────────────────────
function init() {
  renderDayNav();
  renderDay(0);
  state.sessionStartTime = Date.now();
}

// ─── DAY NAV ──────────────────────────────────────────────────────
function renderDayNav() {
  const nav = document.getElementById('day-nav');
  nav.innerHTML = PROGRAM.days.map((day, i) => `
    <button class="day-btn ${i === 0 ? 'active' : ''}" 
            onclick="selectDay(${i})"
            style="--day-color: ${day.color}">
      <span class="day-label">${day.label}</span>
      <span class="day-icon">${day.icon}</span>
      <span class="day-short">${day.name.split(' ')[0]}</span>
    </button>
  `).join('');
}

function selectDay(idx) {
  state.activeDay = idx;
  document.querySelectorAll('.day-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  renderDay(idx);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── DAY VIEW ────────────────────────────────────────────────────
function renderDay(dayIdx) {
  const day = PROGRAM.days[dayIdx];
  const panel = document.getElementById('day-panel');

  if (day.restDay) {
    panel.innerHTML = renderRestDay(day);
    return;
  }

  const completionPct = getDayCompletion(dayIdx);

  panel.innerHTML = `
    <div class="day-header" style="--day-color: ${day.color}">
      <div class="day-header-inner">
        <div class="day-meta">
          <span class="day-tag">${day.label} — ${day.totalTime} MIN</span>
          <h2 class="day-title">${day.name}</h2>
          <p class="day-focus">${day.focus}</p>
        </div>
        <div class="day-ring-wrap">
          <svg class="day-ring" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="5"/>
            <circle cx="40" cy="40" r="32" fill="none" stroke="${day.color}" stroke-width="5"
              stroke-linecap="round"
              stroke-dasharray="201"
              stroke-dashoffset="${201 - (201 * completionPct / 100)}"
              transform="rotate(-90 40 40)"
              style="transition: stroke-dashoffset 0.5s ease"/>
          </svg>
          <div class="day-ring-text">${completionPct}%</div>
        </div>
      </div>
    </div>

    <div class="phases-container">
      ${day.phases.map((phase, pi) => renderPhase(day, dayIdx, phase, pi)).join('')}
    </div>
  `;

  // Animate in
  requestAnimationFrame(() => {
    panel.querySelectorAll('.exercise-card').forEach((card, i) => {
      card.style.animationDelay = `${i * 60}ms`;
      card.classList.add('card-enter');
    });
  });
}

function renderRestDay(day) {
  return `
    <div class="rest-day-panel" style="--day-color: ${day.color}">
      <div class="rest-icon">${day.icon}</div>
      <h2 class="rest-title">${day.name}</h2>
      <p class="rest-message">${day.restMessage}</p>
      <div class="rest-tip">
        <span class="tip-label">Recovery = Growth</span>
        <p>Your muscles rebuild during rest. Trust the process.</p>
      </div>
    </div>
  `;
}

function renderPhase(day, dayIdx, phase, phaseIdx) {
  return `
    <div class="phase-block">
      <div class="phase-header-row">
        <div class="phase-name">${phase.name}</div>
        <div class="phase-dur">${phase.duration}</div>
      </div>
      <div class="exercises-list">
        ${phase.exercises.map((ex, ei) => renderExerciseCard(day, dayIdx, phaseIdx, ex, ei)).join('')}
      </div>
    </div>
  `;
}

function renderExerciseCard(day, dayIdx, phaseIdx, ex, exIdx) {
  const key = `${dayIdx}-${phaseIdx}-${exIdx}`;
  const doneSets = state.completedSets[key] || 0;
  const totalSets = ex.sets;
  const allDone = doneSets >= totalSets;

  return `
    <div class="exercise-card ${allDone ? 'ex-done' : ''}" 
         id="excard-${dayIdx}-${phaseIdx}-${exIdx}"
         onclick="openExercise(${dayIdx}, ${phaseIdx}, ${exIdx})">
      <div class="ex-card-left">
        <div class="ex-card-name">${ex.name}</div>
        <div class="ex-card-target">${ex.target}</div>
        <div class="ex-card-stats">
          <span class="stat-chip sets">${ex.sets} sets</span>
          <span class="stat-chip reps">${ex.reps}</span>
          <span class="stat-chip load">${ex.load}</span>
          ${ex.rest > 0 ? `<span class="stat-chip rest">${ex.rest}s rest</span>` : ''}
        </div>
      </div>
      <div class="ex-card-right">
        <div class="sets-tracker">
          ${Array.from({length: totalSets}, (_, i) => `
            <div class="set-dot ${i < doneSets ? 'set-done' : ''}" 
                 style="--day-color: ${day.color}"
                 onclick="event.stopPropagation(); logSet('${key}', ${totalSets}, '${dayIdx}')">
            </div>
          `).join('')}
        </div>
        <div class="ex-arrow">›</div>
      </div>
    </div>
  `;
}

// ─── SET TRACKING ─────────────────────────────────────────────────
function logSet(key, totalSets, dayIdx) {
  const current = state.completedSets[key] || 0;
  if (current < totalSets) {
    state.completedSets[key] = current + 1;
  } else {
    state.completedSets[key] = 0; // reset on re-tap
  }
  renderDay(parseInt(dayIdx));
}

function getDayCompletion(dayIdx) {
  const day = PROGRAM.days[dayIdx];
  if (day.restDay) return 100;
  let total = 0, done = 0;
  day.phases.forEach((phase, pi) => {
    phase.exercises.forEach((ex, ei) => {
      total += ex.sets;
      done += Math.min(state.completedSets[`${dayIdx}-${pi}-${ei}`] || 0, ex.sets);
    });
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

// ─── EXERCISE MODAL ───────────────────────────────────────────────
function openExercise(dayIdx, phaseIdx, exIdx) {
  const day = PROGRAM.days[dayIdx];
  const ex = day.phases[phaseIdx].exercises[exIdx];
  state.activeExercise = { dayIdx, phaseIdx, exIdx, ex };
  state.activePoseFrame = 0;

  const modal = document.getElementById('ex-modal');
  modal.classList.add('open');
  renderExModal(day, ex);
  startPoseAnimation(ex);
  startBreathingGuide(ex.breathing);
  document.body.style.overflow = 'hidden';
}

function closeExercise() {
  const modal = document.getElementById('ex-modal');
  modal.classList.remove('open');
  stopPoseAnimation();
  stopBreathingGuide();
  stopRestTimer();
  document.body.style.overflow = '';
  // Re-render to update progress
  if (state.activeExercise) {
    renderDay(state.activeExercise.dayIdx);
  }
}

function renderExModal(day, ex) {
  document.getElementById('ex-modal-title').textContent = ex.name;
  document.getElementById('ex-modal-target').textContent = ex.target;
  document.getElementById('ex-modal-sets').textContent = `${ex.sets} sets × ${ex.reps}`;
  document.getElementById('ex-modal-load').textContent = ex.load;

  // Render pose frames
  renderPoseFrames(ex, day.color);

  // Cues
  const cuesList = document.getElementById('ex-cues');
  cuesList.innerHTML = ex.pose.cues.map((c, i) => `
    <li class="cue-item" style="animation-delay: ${i * 80}ms">
      <span class="cue-num">${i + 1}</span>
      <span class="cue-text">${c}</span>
    </li>
  `).join('');

  // Breathing info
  document.getElementById('breath-instruction').textContent = ex.breathing.instruction;
}

function renderPoseFrames(ex, color) {
  const container = document.getElementById('pose-display');
  const frames = ex.pose.frames;

  container.innerHTML = frames.map((frame, i) => {
    const pose = POSES[frame.figure] || POSES['standing_arms_out'];
    return `
      <div class="pose-frame ${i === 0 ? 'pose-active' : ''}" 
           id="pose-frame-${i}"
           style="--pose-color: ${color}">
        <div class="pose-svg">${pose.svg}</div>
        <div class="pose-frame-label">${frame.label}</div>
      </div>
    `;
  }).join('');

  // Frame indicators
  const indicators = document.getElementById('pose-indicators');
  indicators.innerHTML = frames.length > 1 
    ? frames.map((_, i) => `<div class="pose-dot ${i === 0 ? 'active' : ''}" id="posedot-${i}"></div>`).join('')
    : '';
}

// ─── POSE ANIMATION ───────────────────────────────────────────────
function startPoseAnimation(ex) {
  stopPoseAnimation();
  const frames = ex.pose.frames;
  if (frames.length <= 1) return;

  const breathTime = (ex.breathing.inhale + ex.breathing.exhale) * 1000 || 3000;
  const interval = Math.max(breathTime, 2000);

  state.poseInterval = setInterval(() => {
    state.activePoseFrame = (state.activePoseFrame + 1) % frames.length;
    updatePoseFrames(state.activePoseFrame, frames.length);
  }, interval);
}

function updatePoseFrames(activeIdx, total) {
  for (let i = 0; i < total; i++) {
    const frame = document.getElementById(`pose-frame-${i}`);
    const dot = document.getElementById(`posedot-${i}`);
    if (frame) frame.classList.toggle('pose-active', i === activeIdx);
    if (dot) dot.classList.toggle('active', i === activeIdx);
  }
}

function stopPoseAnimation() {
  if (state.poseInterval) {
    clearInterval(state.poseInterval);
    state.poseInterval = null;
  }
}

// ─── BREATHING GUIDE ─────────────────────────────────────────────
function startBreathingGuide(breathing) {
  stopBreathingGuide();
  const ring = document.getElementById('breath-ring');
  const label = document.getElementById('breath-label');
  const countdown = document.getElementById('breath-countdown');

  if (breathing.pattern === 'free') {
    ring.style.setProperty('--breath-scale', '1');
    label.textContent = 'Breathe freely';
    countdown.textContent = '';
    return;
  }

  let phase = 'inhale';
  let count = breathing.inhale;
  let totalDuration = breathing.inhale;

  const tick = () => {
    if (phase === 'inhale') {
      ring.style.setProperty('--breath-phase', '1');
      ring.classList.remove('exhale');
      ring.classList.add('inhale');
      label.textContent = 'INHALE';
      totalDuration = breathing.inhale;
    } else {
      ring.style.setProperty('--breath-phase', '0');
      ring.classList.remove('inhale');
      ring.classList.add('exhale');
      label.textContent = 'EXHALE';
      totalDuration = breathing.exhale;
    }

    ring.style.setProperty('--breath-duration', `${totalDuration}s`);
    count = totalDuration;
    countdown.textContent = count;

    const countInterval = setInterval(() => {
      count--;
      countdown.textContent = count;
      if (count <= 0) clearInterval(countInterval);
    }, 1000);

    state.breathTimer = setTimeout(() => {
      clearInterval(countInterval);
      phase = phase === 'inhale' ? 'exhale' : 'inhale';
      tick();
    }, totalDuration * 1000);
  };

  tick();
}

function stopBreathingGuide() {
  if (state.breathTimer) {
    clearTimeout(state.breathTimer);
    state.breathTimer = null;
  }
}

// ─── REST TIMER ───────────────────────────────────────────────────
function startRestTimer(seconds) {
  stopRestTimer();
  state.restTotal = seconds;
  state.restRemaining = seconds;

  const bar = document.getElementById('rest-bar-fill');
  const label = document.getElementById('rest-timer-label');
  const btn = document.getElementById('rest-btn');

  btn.textContent = 'Cancel Rest';
  btn.onclick = stopRestTimer;
  bar.style.width = '100%';
  bar.style.transition = `width ${seconds}s linear`;

  label.textContent = `Rest: ${seconds}s`;

  requestAnimationFrame(() => {
    bar.style.width = '0%';
  });

  state.restTimer = setInterval(() => {
    state.restRemaining--;
    label.textContent = state.restRemaining > 0
      ? `Rest: ${state.restRemaining}s`
      : '🟢 Go!';

    if (state.restRemaining <= 0) {
      stopRestTimer();
      btn.textContent = 'Start Rest Timer';
      btn.onclick = () => startRestTimer(state.activeExercise?.ex.rest || 60);
      // Flash
      document.getElementById('rest-btn').classList.add('flash');
      setTimeout(() => document.getElementById('rest-btn').classList.remove('flash'), 1000);
    }
  }, 1000);
}

function stopRestTimer() {
  if (state.restTimer) {
    clearInterval(state.restTimer);
    state.restTimer = null;
  }
  const bar = document.getElementById('rest-bar-fill');
  const label = document.getElementById('rest-timer-label');
  if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
  if (label) label.textContent = 'Tap to start rest';
}

// ─── LOG SET FROM MODAL ────────────────────────────────────────────
function logSetFromModal() {
  if (!state.activeExercise) return;
  const { dayIdx, phaseIdx, exIdx, ex } = state.activeExercise;
  const key = `${dayIdx}-${phaseIdx}-${exIdx}`;
  const current = state.completedSets[key] || 0;
  if (current < ex.sets) {
    state.completedSets[key] = current + 1;
    updateModalSetProgress(ex.sets, state.completedSets[key]);
    if (ex.rest > 0) startRestTimer(ex.rest);
  }
}

function updateModalSetProgress(total, done) {
  const track = document.getElementById('modal-set-track');
  if (track) {
    track.innerHTML = Array.from({length: total}, (_, i) => `
      <div class="modal-set-dot ${i < done ? 'done' : ''}"></div>
    `).join('');
  }
  const label = document.getElementById('modal-set-label');
  if (label) label.textContent = `${done}/${total} sets`;
}
