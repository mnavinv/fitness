// Stick figure SVG poses for each exercise figure type
const POSES = {
  // ─── STANDING / GENERAL ─────────────────────────────────────────
  standing_arms_out: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="80" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="45" x2="15" y2="65" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="45" x2="85" y2="65" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="80" x2="30" y2="120" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="80" x2="70" y2="120" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="30" y1="120" x2="25" y2="150" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="70" y1="120" x2="75" y2="150" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    color: "#e8ff47"
  },
  circle_motion: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="80" stroke="currentColor" stroke-width="3"/>
      <path d="M50 45 Q80 30 85 55" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 45 Q20 30 15 55" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M85 55 Q90 70 75 75" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="80" x2="30" y2="120" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="80" x2="70" y2="120" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="120" x2="25" y2="150" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="120" x2="75" y2="150" stroke="currentColor" stroke-width="3"/>
      <text x="82" y="60" font-size="14" fill="currentColor">↻</text>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── PUSH-UPS ────────────────────────────────────────────────────
  pushup_top: {
    svg: `<svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="29" x2="30" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="40" x2="10" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="40" x2="50" y2="58" stroke="currentColor" stroke-width="3"/>
      <circle cx="10" cy="62" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="50" cy="62" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="30" y1="55" x2="50" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="58" x2="70" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="60" x2="90" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="90" y1="58" x2="100" y2="65" stroke="currentColor" stroke-width="3"/>
      <circle cx="103" cy="68" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="100" y1="65" x2="110" y2="62" stroke="currentColor" stroke-width="3"/>
      <circle cx="113" cy="62" r="4" fill="currentColor" opacity="0.5"/>
    </svg>`,
    color: "#e8ff47"
  },
  pushup_bottom: {
    svg: `<svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="35" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="25" y1="44" x2="35" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="52" x2="15" y2="68" stroke="currentColor" stroke-width="3"/>
      <circle cx="12" cy="71" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="30" y1="52" x2="48" y2="68" stroke="currentColor" stroke-width="3"/>
      <circle cx="50" cy="71" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="35" y1="62" x2="55" y2="63" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="63" x2="75" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="62" x2="95" y2="63" stroke="currentColor" stroke-width="3"/>
      <line x1="95" y1="63" x2="105" y2="70" stroke="currentColor" stroke-width="3"/>
      <circle cx="107" cy="73" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="105" y1="70" x2="115" y2="67" stroke="currentColor" stroke-width="3"/>
      <circle cx="118" cy="67" r="4" fill="currentColor" opacity="0.5"/>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── HANG ────────────────────────────────────────────────────────
  hang_passive: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="8" x2="40" y2="28" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="8" x2="80" y2="28" stroke="currentColor" stroke-width="3"/>
      <circle cx="60" cy="45" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="57" x2="60" y2="105" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="70" x2="40" y2="30" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="70" x2="80" y2="30" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="105" x2="45" y2="150" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="105" x2="75" y2="150" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="150" x2="42" y2="175" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="150" x2="78" y2="175" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  hang_active: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="8" x2="42" y2="26" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="8" x2="78" y2="26" stroke="currentColor" stroke-width="3"/>
      <circle cx="60" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="52" x2="60" y2="100" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="62" x2="42" y2="28" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="62" x2="78" y2="28" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="52" x2="65" y2="52" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <line x1="60" y1="100" x2="45" y2="145" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="100" x2="75" y2="145" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="145" x2="42" y2="170" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="145" x2="78" y2="170" stroke="currentColor" stroke-width="3"/>
      <text x="72" y="65" font-size="11" fill="currentColor" opacity="0.8">↑↓</text>
    </svg>`,
    color: "#47c8ff"
  },

  // ─── PULL-UPS ───────────────────────────────────────────────────
  pullup_hang: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4"/>
      <line x1="48" y1="8" x2="40" y2="28" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="8" x2="80" y2="28" stroke="currentColor" stroke-width="3"/>
      <circle cx="60" cy="44" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="56" x2="60" y2="104" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="70" x2="40" y2="30" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="70" x2="80" y2="30" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="104" x2="45" y2="148" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="104" x2="75" y2="148" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="148" x2="42" y2="172" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="148" x2="78" y2="172" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  pullup_mid: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4"/>
      <line x1="48" y1="8" x2="44" y2="22" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="8" x2="76" y2="22" stroke="currentColor" stroke-width="3"/>
      <circle cx="60" cy="35" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="47" x2="60" y2="92" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="60" x2="44" y2="24" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="60" x2="76" y2="24" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="92" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="92" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="40" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="80" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  pullup_top: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4"/>
      <line x1="48" y1="8" x2="46" y2="16" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="8" x2="74" y2="16" stroke="currentColor" stroke-width="3"/>
      <circle cx="60" cy="25" r="11" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="36" x2="60" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="46" y2="18" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="74" y2="18" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="80" x2="45" y2="118" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="80" x2="75" y2="118" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="118" x2="42" y2="143" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="118" x2="78" y2="143" stroke="currentColor" stroke-width="3"/>
      <line x1="20" y1="8" x2="18" y2="14" stroke="currentColor" stroke-width="2" opacity="0.4"/>
      <line x1="18" y1="14" x2="22" y2="16" stroke="currentColor" stroke-width="2" opacity="0.4"/>
    </svg>`,
    color: "#47c8ff"
  },
  chinup_hang: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4"/>
      <line x1="48" y1="8" x2="40" y2="28" stroke="currentColor" stroke-width="3" stroke-dasharray="4 2"/>
      <line x1="72" y1="8" x2="80" y2="28" stroke="currentColor" stroke-width="3" stroke-dasharray="4 2"/>
      <circle cx="60" cy="44" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="56" x2="60" y2="104" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="70" x2="40" y2="30" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="70" x2="80" y2="30" stroke="currentColor" stroke-width="3"/>
      <text x="32" y="36" font-size="9" fill="currentColor" opacity="0.7">↙palms</text>
      <line x1="60" y1="104" x2="45" y2="148" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="104" x2="75" y2="148" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="148" x2="42" y2="172" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="148" x2="78" y2="172" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  chinup_top: {
    svg: `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="110" y2="8" stroke="currentColor" stroke-width="4"/>
      <circle cx="60" cy="24" r="11" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="8" x2="46" y2="15" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="8" x2="74" y2="15" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="35" x2="60" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="46" y2="17" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="74" y2="17" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="80" x2="44" y2="118" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="80" x2="76" y2="118" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="118" x2="40" y2="143" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="118" x2="80" y2="143" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },

  // ─── FLOOR PRESS ─────────────────────────────────────────────────
  floor_press_top: {
    svg: `<svg viewBox="0 0 180 80" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="72" x2="170" y2="72" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="40" x2="100" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="48" x2="45" y2="20" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="20" x2="20" y2="20" stroke="currentColor" stroke-width="3"/>
      <circle cx="17" cy="20" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="70" y1="48" x2="95" y2="20" stroke="currentColor" stroke-width="3"/>
      <line x1="95" y1="20" x2="120" y2="20" stroke="currentColor" stroke-width="3"/>
      <circle cx="123" cy="20" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="100" y1="60" x2="130" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="100" y1="60" x2="75" y2="68" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },
  floor_press_bottom: {
    svg: `<svg viewBox="0 0 180 80" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="72" x2="170" y2="72" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <circle cx="50" cy="28" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="38" x2="100" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="48" x2="35" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="62" x2="10" y2="60" stroke="currentColor" stroke-width="3"/>
      <circle cx="7" cy="60" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="70" y1="48" x2="105" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="105" y1="62" x2="130" y2="60" stroke="currentColor" stroke-width="3"/>
      <circle cx="133" cy="60" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="100" y1="60" x2="130" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="100" y1="60" x2="75" y2="68" stroke="currentColor" stroke-width="3"/>
      <text x="55" y="18" font-size="9" fill="currentColor" opacity="0.7">elbows floor</text>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── ARNOLD PRESS ────────────────────────────────────────────────
  arnold_start: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="31" x2="60" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="30" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="65" x2="38" y2="42" stroke="currentColor" stroke-width="3"/>
      <circle cx="38" cy="38" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="50" x2="90" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="90" y1="65" x2="82" y2="42" stroke="currentColor" stroke-width="3"/>
      <circle cx="82" cy="38" r="5" fill="currentColor" opacity="0.6"/>
      <text x="18" y="75" font-size="9" fill="currentColor" opacity="0.8">palms→you</text>
      <line x1="60" y1="90" x2="45" y2="135" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="90" x2="75" y2="135" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="135" x2="42" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="135" x2="78" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },
  arnold_mid: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="31" x2="60" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="25" y2="50" stroke="currentColor" stroke-width="3"/>
      <line x1="25" y1="50" x2="20" y2="28" stroke="currentColor" stroke-width="3"/>
      <circle cx="19" cy="24" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="50" x2="95" y2="50" stroke="currentColor" stroke-width="3"/>
      <line x1="95" y1="50" x2="100" y2="28" stroke="currentColor" stroke-width="3"/>
      <circle cx="101" cy="24" r="5" fill="currentColor" opacity="0.6"/>
      <text x="25" y="62" font-size="9" fill="currentColor" opacity="0.8">rotating...</text>
      <line x1="60" y1="90" x2="45" y2="135" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="90" x2="75" y2="135" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="135" x2="42" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="135" x2="78" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },
  arnold_top: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="31" x2="60" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="50" x2="35" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="40" x2="30" y2="10" stroke="currentColor" stroke-width="3"/>
      <circle cx="29" cy="6" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="50" x2="85" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="40" x2="90" y2="10" stroke="currentColor" stroke-width="3"/>
      <circle cx="91" cy="6" r="5" fill="currentColor" opacity="0.6"/>
      <text x="32" y="55" font-size="9" fill="currentColor" opacity="0.8">palms→fwd</text>
      <line x1="60" y1="90" x2="45" y2="135" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="90" x2="75" y2="135" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="135" x2="42" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="135" x2="78" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── LATERAL RAISE ───────────────────────────────────────────────
  lateral_start: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="45" x2="40" y2="82" stroke="currentColor" stroke-width="3"/>
      <circle cx="38" cy="85" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="45" x2="80" y2="82" stroke="currentColor" stroke-width="3"/>
      <circle cx="82" cy="85" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },
  lateral_top: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="28" x2="80" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="45" x2="20" y2="48" stroke="currentColor" stroke-width="3"/>
      <circle cx="15" cy="48" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="80" y1="45" x2="140" y2="48" stroke="currentColor" stroke-width="3"/>
      <circle cx="145" cy="48" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="80" y1="80" x2="65" y2="110" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="80" x2="95" y2="110" stroke="currentColor" stroke-width="3"/>
      <text x="10" y="40" font-size="9" fill="currentColor" opacity="0.7">T-shape</text>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── DIAMOND PUSH-UPS ────────────────────────────────────────────
  diamond_top: {
    svg: `<svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="72" x2="150" y2="72" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <circle cx="30" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="29" x2="30" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="40" x2="52" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="55" x2="60" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="58" x2="68" y2="55" stroke="currentColor" stroke-width="3"/>
      <polygon points="52,55 60,50 68,55 60,62" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6"/>
      <text x="55" y="47" font-size="8" fill="currentColor" opacity="0.8">◆</text>
      <line x1="30" y1="40" x2="10" y2="58" stroke="currentColor" stroke-width="3"/>
      <circle cx="7" cy="61" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="30" y1="55" x2="50" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="55" x2="100" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="100" y1="58" x2="120" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="123" cy="55" r="4" fill="currentColor" opacity="0.5"/>
    </svg>`,
    color: "#e8ff47"
  },
  diamond_bottom: {
    svg: `<svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="72" x2="150" y2="72" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <circle cx="28" cy="35" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="28" y1="44" x2="35" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="32" y1="52" x2="52" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="60" x2="60" y2="63" stroke="currentColor" stroke-width="3"/>
      <polygon points="52,60 60,55 68,60 60,67" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6"/>
      <line x1="32" y1="52" x2="14" y2="68" stroke="currentColor" stroke-width="3"/>
      <circle cx="11" cy="71" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="68" y1="60" x2="100" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="100" y1="62" x2="120" y2="60" stroke="currentColor" stroke-width="3"/>
      <circle cx="123" cy="60" r="4" fill="currentColor" opacity="0.5"/>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── KICKBACK ────────────────────────────────────────────────────
  kickback_start: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="45" x2="85" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="53" x2="35" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="40" x2="18" y2="60" stroke="currentColor" stroke-width="3"/>
      <circle cx="15" cy="63" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="55" y1="53" x2="75" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="40" x2="75" y2="65" stroke="currentColor" stroke-width="3"/>
      <circle cx="75" cy="68" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="85" y1="65" x2="110" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="65" x2="70" y2="100" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="100" x2="65" y2="115" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },
  kickback_end: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="45" x2="85" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="53" x2="35" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="40" x2="18" y2="60" stroke="currentColor" stroke-width="3"/>
      <circle cx="15" cy="63" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="55" y1="53" x2="75" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="40" x2="130" y2="42" stroke="currentColor" stroke-width="3"/>
      <circle cx="133" cy="42" r="5" fill="currentColor" opacity="0.6"/>
      <text x="95" y="35" font-size="9" fill="currentColor" opacity="0.8">squeeze!</text>
      <line x1="85" y1="65" x2="110" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="65" x2="70" y2="100" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="100" x2="65" y2="115" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── WRIST CURLS ─────────────────────────────────────────────────
  wrist_curl_start: {
    svg: `<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="80" x2="130" y2="80" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="40" x2="60" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="55" x2="30" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="52" x2="20" y2="68" stroke="currentColor" stroke-width="3"/>
      <line x1="20" y1="68" x2="18" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="18" y1="80" x2="8" y2="82" stroke="currentColor" stroke-width="3"/>
      <circle cx="5" cy="82" r="4" fill="currentColor" opacity="0.6"/>
      <line x1="55" y1="55" x2="80" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="52" x2="100" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="100" y1="70" x2="105" y2="80" stroke="currentColor" stroke-width="3"/>
      <circle cx="108" cy="83" r="4" fill="currentColor" opacity="0.6"/>
      <text x="70" y="88" font-size="9" fill="currentColor" opacity="0.8">wrist drops</text>
    </svg>`,
    color: "#ff6b35"
  },
  wrist_curl_end: {
    svg: `<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="80" x2="130" y2="80" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="40" x2="60" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="55" x2="30" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="52" x2="20" y2="68" stroke="currentColor" stroke-width="3"/>
      <line x1="20" y1="68" x2="16" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="16" y1="78" x2="5" y2="70" stroke="currentColor" stroke-width="3"/>
      <circle cx="3" cy="67" r="4" fill="currentColor" opacity="0.6"/>
      <line x1="55" y1="55" x2="80" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="52" x2="100" y2="68" stroke="currentColor" stroke-width="3"/>
      <line x1="100" y1="68" x2="106" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="106" y1="78" x2="117" y2="70" stroke="currentColor" stroke-width="3"/>
      <circle cx="119" cy="67" r="4" fill="currentColor" opacity="0.6"/>
      <text x="68" y="88" font-size="9" fill="currentColor" opacity="0.8">squeeze!</text>
    </svg>`,
    color: "#ff6b35"
  },
  reverse_curl_start: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="35" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="80" x2="32" y2="105" stroke="currentColor" stroke-width="3"/>
      <circle cx="31" cy="108" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="48" x2="85" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="80" x2="88" y2="105" stroke="currentColor" stroke-width="3"/>
      <circle cx="89" cy="108" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
      <text x="26" y="120" font-size="9" fill="currentColor" opacity="0.7">knuckles↓</text>
    </svg>`,
    color: "#ff6b35"
  },
  reverse_curl_end: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="35" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="75" x2="38" y2="48" stroke="currentColor" stroke-width="3"/>
      <circle cx="39" cy="45" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="48" x2="85" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="75" x2="82" y2="48" stroke="currentColor" stroke-width="3"/>
      <circle cx="81" cy="45" r="5" fill="currentColor" opacity="0.6"/>
      <text x="30" y="42" font-size="9" fill="currentColor" opacity="0.8">knuckles↑</text>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#ff6b35"
  },
  grip_open: {
    svg: `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="10" x2="40" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="20" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="25" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="30" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="38" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="55" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="20" y1="60" x2="16" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="25" y1="70" x2="21" y2="84" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="80" x2="27" y2="94" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="85" x2="36" y2="99" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="82" x2="57" y2="96" stroke="currentColor" stroke-width="3"/>
      <text x="15" y="112" font-size="10" fill="currentColor" opacity="0.7">open hand</text>
    </svg>`,
    color: "#ff6b35"
  },
  grip_closed: {
    svg: `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="10" x2="40" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="20" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="22" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="25" y2="73" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="32" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="55" x2="50" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="20" y1="58" x2="22" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="22" y1="65" x2="25" y2="76" stroke="currentColor" stroke-width="3"/>
      <line x1="25" y1="73" x2="28" y2="83" stroke="currentColor" stroke-width="3"/>
      <line x1="32" y1="78" x2="33" y2="88" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="75" x2="50" y2="85" stroke="currentColor" stroke-width="3"/>
      <path d="M20 70 Q30 85 50 85" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5"/>
      <text x="18" y="110" font-size="10" fill="currentColor" opacity="0.7">full crush!</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── ROW ─────────────────────────────────────────────────────────
  row_start: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="40" x2="80" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="48" x2="32" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="32" y1="38" x2="15" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="12" cy="58" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="52" y1="48" x2="72" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="38" x2="100" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="103" cy="58" r="5" fill="currentColor" opacity="0.6"/>
      <text x="88" y="75" font-size="9" fill="currentColor" opacity="0.7">full stretch</text>
      <line x1="80" y1="60" x2="110" y2="68" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="60" x2="65" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="65" y1="95" x2="60" y2="115" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  row_end: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="40" x2="80" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="48" x2="32" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="32" y1="38" x2="15" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="12" cy="58" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="52" y1="48" x2="72" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="38" x2="70" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="70" cy="58" r="5" fill="currentColor" opacity="0.6"/>
      <text x="55" y="72" font-size="9" fill="currentColor" opacity="0.8">elbow→hip</text>
      <line x1="80" y1="60" x2="110" y2="68" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="60" x2="65" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="65" y1="95" x2="60" y2="115" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },

  // ─── HAMMER CURL ─────────────────────────────────────────────────
  hammer_start: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="38" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="80" x2="35" y2="110" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="110" x2="32" y2="118" stroke="currentColor" stroke-width="3"/>
      <circle cx="32" cy="121" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="48" x2="82" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="82" y1="80" x2="85" y2="110" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="110" x2="88" y2="118" stroke="currentColor" stroke-width="3"/>
      <circle cx="88" cy="121" r="5" fill="currentColor" opacity="0.6"/>
      <text x="22" y="130" font-size="9" fill="currentColor" opacity="0.7">neutral grip</text>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  hammer_top: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="35" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="70" x2="33" y2="45" stroke="currentColor" stroke-width="3"/>
      <circle cx="33" cy="42" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="48" x2="85" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="70" x2="87" y2="45" stroke="currentColor" stroke-width="3"/>
      <circle cx="87" cy="42" r="5" fill="currentColor" opacity="0.6"/>
      <text x="28" y="38" font-size="9" fill="currentColor" opacity="0.8">squeeze!</text>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  reverse_start: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="38" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="80" x2="35" y2="108" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="108" x2="25" y2="115" stroke="currentColor" stroke-width="3"/>
      <circle cx="22" cy="118" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="48" x2="82" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="82" y1="80" x2="85" y2="108" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="108" x2="95" y2="115" stroke="currentColor" stroke-width="3"/>
      <circle cx="98" cy="118" r="5" fill="currentColor" opacity="0.6"/>
      <text x="20" y="130" font-size="8" fill="currentColor" opacity="0.7">overhand/knuckles↑</text>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  reverse_top: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="28" x2="60" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="35" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="72" x2="30" y2="48" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="48" x2="22" y2="42" stroke="currentColor" stroke-width="3"/>
      <circle cx="19" cy="40" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="48" x2="85" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="72" x2="90" y2="48" stroke="currentColor" stroke-width="3"/>
      <line x1="90" y1="48" x2="98" y2="42" stroke="currentColor" stroke-width="3"/>
      <circle cx="101" cy="40" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="60" y1="85" x2="44" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="85" x2="76" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="130" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="130" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },

  // ─── FLY ─────────────────────────────────────────────────────────
  fly_start: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="42" x2="78" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="50" x2="30" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="40" x2="15" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="12" cy="58" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="52" y1="50" x2="74" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="74" y1="40" x2="102" y2="55" stroke="currentColor" stroke-width="3"/>
      <circle cx="105" cy="58" r="5" fill="currentColor" opacity="0.6"/>
      <text x="80" y="72" font-size="9" fill="currentColor" opacity="0.7">arms hang</text>
      <line x1="78" y1="62" x2="105" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="78" y1="62" x2="62" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="62" y1="95" x2="57" y2="112" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  fly_end: {
    svg: `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="42" x2="90" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="63" y1="50" x2="20" y2="38" stroke="currentColor" stroke-width="3"/>
      <circle cx="15" cy="36" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="63" y1="50" x2="140" y2="38" stroke="currentColor" stroke-width="3"/>
      <circle cx="145" cy="36" r="5" fill="currentColor" opacity="0.6"/>
      <text x="75" y="32" font-size="9" fill="currentColor" opacity="0.8">T-shape!</text>
      <line x1="90" y1="60" x2="120" y2="70" stroke="currentColor" stroke-width="3"/>
      <line x1="90" y1="60" x2="74" y2="93" stroke="currentColor" stroke-width="3"/>
      <line x1="74" y1="93" x2="69" y2="112" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },

  // ─── SQUAT ────────────────────────────────────────────────────────
  squat_stand: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="28" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="72" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="33" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="67" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="33" y1="125" x2="28" y2="152" stroke="currentColor" stroke-width="3"/>
      <line x1="67" y1="125" x2="72" y2="152" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#ff6b35"
  },
  squat_bottom: {
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="55" cy="20" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="30" x2="55" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="42" x2="30" y2="50" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="42" x2="80" y2="50" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="62" x2="28" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="62" x2="82" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="28" y1="90" x2="18" y2="110" stroke="currentColor" stroke-width="3"/>
      <line x1="82" y1="90" x2="92" y2="110" stroke="currentColor" stroke-width="3"/>
      <text x="38" y="108" font-size="9" fill="currentColor" opacity="0.8">full depth</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── GOBLET SQUAT ─────────────────────────────────────────────────
  goblet_hold: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="35" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="55" x2="40" y2="45" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="65" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="65" y1="55" x2="60" y2="45" stroke="currentColor" stroke-width="3"/>
      <rect x="42" y="40" width="16" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <text x="30" y="75" font-size="8" fill="currentColor" opacity="0.7">DB vertical</text>
      <line x1="50" y1="82" x2="33" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="67" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="33" y1="125" x2="28" y2="152" stroke="currentColor" stroke-width="3"/>
      <line x1="67" y1="125" x2="72" y2="152" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#ff6b35"
  },
  goblet_bottom: {
    svg: `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
      <circle cx="55" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="32" x2="55" y2="65" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="44" x2="38" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="52" x2="42" y2="40" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="44" x2="72" y2="52" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="52" x2="68" y2="40" stroke="currentColor" stroke-width="3"/>
      <rect x="46" y="34" width="18" height="14" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <line x1="55" y1="65" x2="25" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="65" x2="85" y2="90" stroke="currentColor" stroke-width="3"/>
      <line x1="25" y1="90" x2="15" y2="115" stroke="currentColor" stroke-width="3"/>
      <line x1="85" y1="90" x2="95" y2="115" stroke="currentColor" stroke-width="3"/>
      <text x="18" y="126" font-size="8" fill="currentColor" opacity="0.8">elbows inside knees</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── ROMANIAN DEADLIFT ────────────────────────────────────────────
  rdl_top: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="28" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="28" y1="58" x2="30" y2="78" stroke="currentColor" stroke-width="3"/>
      <circle cx="30" cy="82" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="45" x2="72" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="58" x2="70" y2="78" stroke="currentColor" stroke-width="3"/>
      <circle cx="70" cy="82" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="82" x2="35" y2="126" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="65" y2="126" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="126" x2="30" y2="152" stroke="currentColor" stroke-width="3"/>
      <line x1="65" y1="126" x2="70" y2="152" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#ff6b35"
  },
  rdl_bottom: {
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="40" x2="70" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="52" x2="22" y2="42" stroke="currentColor" stroke-width="3"/>
      <line x1="22" y1="42" x2="10" y2="62" stroke="currentColor" stroke-width="3"/>
      <circle cx="8" cy="65" r="4" fill="currentColor" opacity="0.5"/>
      <line x1="45" y1="52" x2="68" y2="42" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="42" x2="90" y2="62" stroke="currentColor" stroke-width="3"/>
      <circle cx="93" cy="65" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="70" y1="72" x2="100" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="72" x2="55" y2="105" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="105" x2="50" y2="115" stroke="currentColor" stroke-width="3"/>
      <text x="62" y="88" font-size="9" fill="currentColor" opacity="0.8">hips BACK</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── LUNGE ───────────────────────────────────────────────────────
  lunge_stand: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="30" y2="80" stroke="currentColor" stroke-width="3"/>
      <circle cx="28" cy="83" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="45" x2="70" y2="80" stroke="currentColor" stroke-width="3"/>
      <circle cx="72" cy="83" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="82" x2="35" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="65" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="125" x2="30" y2="152" stroke="currentColor" stroke-width="3"/>
      <line x1="65" y1="125" x2="70" y2="152" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#ff6b35"
  },
  lunge_down: {
    svg: `<svg viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="32" x2="50" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="48" x2="28" y2="72" stroke="currentColor" stroke-width="3"/>
      <circle cx="25" cy="75" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="48" x2="72" y2="72" stroke="currentColor" stroke-width="3"/>
      <circle cx="75" cy="75" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="50" y1="72" x2="32" y2="100" stroke="currentColor" stroke-width="3"/>
      <line x1="32" y1="100" x2="22" y2="120" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="72" x2="82" y2="88" stroke="currentColor" stroke-width="3"/>
      <line x1="82" y1="88" x2="98" y2="110" stroke="currentColor" stroke-width="3"/>
      <circle cx="100" cy="113" r="4" fill="currentColor" opacity="0.4"/>
      <text x="25" y="118" font-size="8" fill="currentColor" opacity="0.8">knee hovers</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── BULGARIAN SPLIT SQUAT ───────────────────────────────────────
  bss_setup: {
    svg: `<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="75" width="55" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4" rx="2"/>
      <circle cx="48" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="32" x2="48" y2="75" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="48" x2="26" y2="72" stroke="currentColor" stroke-width="3"/>
      <circle cx="23" cy="75" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="48" y1="48" x2="70" y2="72" stroke="currentColor" stroke-width="3"/>
      <circle cx="73" cy="75" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="48" y1="75" x2="30" y2="108" stroke="currentColor" stroke-width="3"/>
      <line x1="30" y1="108" x2="22" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="75" x2="80" y2="88" stroke="currentColor" stroke-width="3"/>
      <line x1="80" y1="88" x2="100" y2="85" stroke="currentColor" stroke-width="3"/>
      <text x="55" y="102" font-size="8" fill="currentColor" opacity="0.8">rear foot elevated</text>
    </svg>`,
    color: "#ff6b35"
  },
  bss_bottom: {
    svg: `<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="75" width="55" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4" rx="2"/>
      <circle cx="42" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="32" x2="42" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="48" x2="22" y2="72" stroke="currentColor" stroke-width="3"/>
      <circle cx="19" cy="75" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="42" y1="48" x2="62" y2="72" stroke="currentColor" stroke-width="3"/>
      <circle cx="65" cy="75" r="5" fill="currentColor" opacity="0.6"/>
      <line x1="42" y1="72" x2="26" y2="105" stroke="currentColor" stroke-width="3"/>
      <line x1="26" y1="105" x2="18" y2="128" stroke="currentColor" stroke-width="3"/>
      <circle cx="16" cy="131" r="4" fill="currentColor" opacity="0.4"/>
      <line x1="42" y1="72" x2="82" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="82" y1="82" x2="100" y2="82" stroke="currentColor" stroke-width="3"/>
      <text x="18" y="138" font-size="8" fill="currentColor" opacity="0.8">front shin vertical!</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── CALF RAISE ───────────────────────────────────────────────────
  calf_bottom: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="140" x2="90" y2="140" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <line x1="45" y1="125" x2="55" y2="125" stroke="currentColor" stroke-width="3" opacity="0.6"/>
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="30" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="70" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="40" y2="118" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="118" x2="38" y2="140" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="140" x2="30" y2="145" stroke="currentColor" stroke-width="3"/>
      <text x="18" y="155" font-size="8" fill="currentColor" opacity="0.8">heel BELOW step</text>
    </svg>`,
    color: "#ff6b35"
  },
  calf_top: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="140" x2="90" y2="140" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <line x1="45" y1="125" x2="55" y2="125" stroke="currentColor" stroke-width="3" opacity="0.6"/>
      <circle cx="50" cy="14" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="24" x2="50" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="42" x2="30" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="42" x2="70" y2="58" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="78" x2="40" y2="112" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="112" x2="40" y2="132" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="132" x2="50" y2="128" stroke="currentColor" stroke-width="3"/>
      <text x="22" y="155" font-size="8" fill="currentColor" opacity="0.8">MAXIMUM rise!</text>
      <text x="62" y="118" font-size="12" fill="currentColor" opacity="0.8">↑</text>
    </svg>`,
    color: "#ff6b35"
  },
  seated_calf_down: {
    svg: `<svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="72" width="80" height="12" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4" rx="2"/>
      <circle cx="45" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="32" x2="55" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="50" x2="28" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="50" x2="68" y2="55" stroke="currentColor" stroke-width="3"/>
      <rect x="62" y="52" width="14" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5" rx="2"/>
      <line x1="55" y1="72" x2="45" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="72" x2="75" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="95" x2="40" y2="112" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="95" x2="80" y2="112" stroke="currentColor" stroke-width="3"/>
      <text x="22" y="115" font-size="8" fill="currentColor" opacity="0.8">knees 90°, heel down</text>
    </svg>`,
    color: "#ff6b35"
  },
  seated_calf_up: {
    svg: `<svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="72" width="80" height="12" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4" rx="2"/>
      <circle cx="45" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="32" x2="55" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="50" x2="28" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="50" x2="68" y2="55" stroke="currentColor" stroke-width="3"/>
      <rect x="62" y="52" width="14" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5" rx="2"/>
      <line x1="55" y1="72" x2="45" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="72" x2="75" y2="95" stroke="currentColor" stroke-width="3"/>
      <line x1="45" y1="95" x2="48" y2="110" stroke="currentColor" stroke-width="3"/>
      <line x1="48" y1="110" x2="55" y2="105" stroke="currentColor" stroke-width="3"/>
      <line x1="75" y1="95" x2="78" y2="110" stroke="currentColor" stroke-width="3"/>
      <line x1="78" y1="110" x2="85" y2="105" stroke="currentColor" stroke-width="3"/>
      <text x="28" y="118" font-size="8" fill="currentColor" opacity="0.8">soleus fires! heels up</text>
    </svg>`,
    color: "#ff6b35"
  },

  // ─── FARMER'S CARRY ──────────────────────────────────────────────
  farmers_stand: {
    svg: `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="28" x2="50" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="45" x2="28" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="28" y1="80" x2="26" y2="108" stroke="currentColor" stroke-width="3"/>
      <rect x="19" y="105" width="10" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <line x1="50" y1="45" x2="72" y2="80" stroke="currentColor" stroke-width="3"/>
      <line x1="72" y1="80" x2="74" y2="108" stroke="currentColor" stroke-width="3"/>
      <rect x="71" y="105" width="10" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <line x1="50" y1="82" x2="35" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="50" y1="82" x2="65" y2="125" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="125" x2="30" y2="152" stroke="currentColor" stroke-width="3"/>
      <line x1="65" y1="125" x2="70" y2="152" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  farmers_walk: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="55" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="28" x2="55" y2="82" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="45" x2="33" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="33" y1="78" x2="31" y2="106" stroke="currentColor" stroke-width="3"/>
      <rect x="24" y="103" width="10" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <line x1="55" y1="45" x2="77" y2="78" stroke="currentColor" stroke-width="3"/>
      <line x1="77" y1="78" x2="79" y2="106" stroke="currentColor" stroke-width="3"/>
      <rect x="76" y="103" width="10" height="18" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <line x1="55" y1="82" x2="40" y2="120" stroke="currentColor" stroke-width="3"/>
      <line x1="40" y1="120" x2="32" y2="150" stroke="currentColor" stroke-width="3"/>
      <line x1="55" y1="82" x2="68" y2="118" stroke="currentColor" stroke-width="3"/>
      <line x1="68" y1="118" x2="78" y2="145" stroke="currentColor" stroke-width="3"/>
      <text x="28" y="10" font-size="9" fill="currentColor" opacity="0.7">→ stride</text>
    </svg>`,
    color: "#47c8ff"
  },

  // ─── OVERHEAD TRICEP EXTENSION ────────────────────────────────────
  overhead_ext_top: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="32" x2="60" y2="88" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="42" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="38" x2="48" y2="12" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="78" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="78" y1="38" x2="72" y2="12" stroke="currentColor" stroke-width="3"/>
      <rect x="48" y="4" width="24" height="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <text x="24" y="55" font-size="8" fill="currentColor" opacity="0.7">elbows UP</text>
      <line x1="60" y1="88" x2="44" y2="132" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="88" x2="76" y2="132" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="132" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="132" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },
  overhead_ext_bottom: {
    svg: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="32" x2="60" y2="88" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="42" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="42" y1="38" x2="38" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="38" y1="62" x2="52" y2="72" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="48" x2="78" y2="38" stroke="currentColor" stroke-width="3"/>
      <line x1="78" y1="38" x2="82" y2="62" stroke="currentColor" stroke-width="3"/>
      <line x1="82" y1="62" x2="68" y2="72" stroke="currentColor" stroke-width="3"/>
      <rect x="48" y="68" width="24" height="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6" rx="2"/>
      <text x="25" y="86" font-size="8" fill="currentColor" opacity="0.8">behind head</text>
      <line x1="60" y1="88" x2="44" y2="132" stroke="currentColor" stroke-width="3"/>
      <line x1="60" y1="88" x2="76" y2="132" stroke="currentColor" stroke-width="3"/>
      <line x1="44" y1="132" x2="41" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="76" y1="132" x2="79" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#e8ff47"
  },

  // ─── ARM SWING ─────────────────────────────────────────────────
  arm_swing: {
    svg: `<svg viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="28" x2="70" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="45" x2="15" y2="60" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="45" x2="125" y2="60" stroke="currentColor" stroke-width="3"/>
      <text x="8" y="55" font-size="11" fill="currentColor" opacity="0.6">←</text>
      <text x="118" y="55" font-size="11" fill="currentColor" opacity="0.6">→</text>
      <line x1="70" y1="85" x2="52" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="85" x2="88" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="130" x2="47" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="88" y1="130" x2="93" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  },
  crossbody: {
    svg: `<svg viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="18" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="28" x2="70" y2="85" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="45" x2="105" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="45" x2="35" y2="55" stroke="currentColor" stroke-width="3"/>
      <line x1="35" y1="55" x2="95" y2="62" stroke="currentColor" stroke-width="3" stroke-dasharray="5 3"/>
      <text x="55" y="78" font-size="8" fill="currentColor" opacity="0.7">cross body</text>
      <line x1="70" y1="85" x2="52" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="70" y1="85" x2="88" y2="130" stroke="currentColor" stroke-width="3"/>
      <line x1="52" y1="130" x2="47" y2="155" stroke="currentColor" stroke-width="3"/>
      <line x1="88" y1="130" x2="93" y2="155" stroke="currentColor" stroke-width="3"/>
    </svg>`,
    color: "#47c8ff"
  }
};
