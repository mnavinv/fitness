const PROGRAM = {
  days: [
    {
      id: "mon",
      label: "MON",
      name: "Push Day A",
      focus: "Chest · Shoulders · Triceps",
      color: "#e8ff47",
      icon: "💪",
      totalTime: 50,
      phases: [
        {
          name: "Warm-Up",
          duration: "8 min",
          exercises: [
            {
              name: "Joint Circles",
              target: "Wrists → elbows → shoulders → hips → ankles",
              sets: 1, reps: "10 each joint", rest: 0, load: "BW",
              pose: {
                frames: [
                  { figure: "standing_arms_out", label: "Arms extended" },
                  { figure: "circle_motion", label: "Rotate in circles" }
                ],
                cues: ["Stand tall, feet hip-width", "Start from wrists upward", "Full rotation — no shortcuts", "Keep core braced throughout"]
              },
              breathing: {
                pattern: "free",
                instruction: "Breathe naturally. Inhale on extension, exhale on contraction.",
                inhale: 0, exhale: 0
              }
            },
            {
              name: "Incline Push-ups (slow)",
              target: "Chest / shoulder primer",
              sets: 2, reps: "10", rest: 30, load: "BW",
              pose: {
                frames: [
                  { figure: "pushup_top", label: "Start: arms extended" },
                  { figure: "pushup_bottom", label: "Lower: 3 seconds" }
                ],
                cues: ["Hands on wall/chair at chest height", "Body in straight line — no hips sagging", "Elbows at 45° to body, not flared", "Squeeze chest at top"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Inhale as you lower (3s), exhale as you push up (1s). Never hold breath.",
                inhale: 3, exhale: 1
              }
            },
            {
              name: "Dead Hangs",
              target: "Shoulder decompression, grip primer",
              sets: 1, reps: "20–30 sec", rest: 30, load: "BW",
              pose: {
                frames: [
                  { figure: "hang_passive", label: "Grip bar, relax" },
                  { figure: "hang_active", label: "Engage scapulae" }
                ],
                cues: ["Grip slightly wider than shoulders", "Actively pull shoulder blades DOWN", "Slight hollow body — don't let ribs flare", "Feet off ground completely"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Slow deep breaths. Inhale 4s, exhale 4s. Relax into the hang.",
                inhale: 4, exhale: 4
              }
            }
          ]
        },
        {
          name: "Main Lifts",
          duration: "35 min",
          exercises: [
            {
              name: "DB Floor Press",
              target: "Chest, anterior deltoid, triceps",
              sets: 4, reps: "8–10", rest: 75, load: "10–15 kg",
              pose: {
                frames: [
                  { figure: "floor_press_top", label: "Start: DBs over chest" },
                  { figure: "floor_press_bottom", label: "Lower: elbows touch floor" }
                ],
                cues: ["Lie flat, knees bent, feet flat", "DBs directly above mid-chest", "Elbows at 45° — not 90° flared", "Drive shoulder blades into floor on press", "Stop when upper arms touch floor — no more"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Inhale as you lower (3s). Brace core. Exhale forcefully as you press (2s).",
                inhale: 3, exhale: 2
              }
            },
            {
              name: "DB Arnold Press",
              target: "Full deltoid, upper trap",
              sets: 3, reps: "10–12", rest: 60, load: "7.5–10 kg",
              pose: {
                frames: [
                  { figure: "arnold_start", label: "Start: palms facing you" },
                  { figure: "arnold_mid", label: "Rotate outward" },
                  { figure: "arnold_top", label: "Press: palms forward" }
                ],
                cues: ["Sit upright, spine neutral", "Start with DBs at chin, palms IN", "Rotate palms OUT as you press up", "Full extension at top — slight pause", "Reverse the rotation on the way down"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Inhale at bottom (palms in). Exhale through the press and rotation (2s).",
                inhale: 2, exhale: 2
              }
            },
            {
              name: "DB Lateral Raise",
              target: "Medial deltoid width",
              sets: 3, reps: "12–15", rest: 45, load: "5–7.5 kg",
              pose: {
                frames: [
                  { figure: "lateral_start", label: "Arms at sides, slight bend" },
                  { figure: "lateral_top", label: "Raise to shoulder height" }
                ],
                cues: ["Slight forward lean (10°) at hips", "Lead with elbows, not wrists", "Pinky slightly higher than thumb (pour water)", "Stop at shoulder height — not above", "3s controlled descent — this is where gains happen"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Exhale as you raise (2s). Inhale controlled on the way down (3s).",
                inhale: 3, exhale: 2
              }
            },
            {
              name: "Diamond Push-ups",
              target: "Triceps, inner chest",
              sets: 3, reps: "12–15", rest: 60, load: "BW",
              pose: {
                frames: [
                  { figure: "diamond_top", label: "Hands form diamond shape" },
                  { figure: "diamond_bottom", label: "Lower chest to hands" }
                ],
                cues: ["Index fingers and thumbs touching — diamond shape", "Hands directly under sternum", "Body rigid — squeeze glutes and core", "Elbows track backward, not outward", "Full lockout at top"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Inhale going down (2s). Exhale hard as you push up (1s). No breath holding.",
                inhale: 2, exhale: 1
              }
            },
            {
              name: "DB Tricep Kickbacks",
              target: "Tricep long head, peak contraction",
              sets: 3, reps: "12", rest: 45, load: "5–7.5 kg",
              pose: {
                frames: [
                  { figure: "kickback_start", label: "Hinge, upper arm parallel" },
                  { figure: "kickback_end", label: "Extend fully, 1s squeeze" }
                ],
                cues: ["Hinge 45° at hips, back flat", "Upper arm GLUED to torso — don't let it drop", "Extend arm fully behind you", "1 second squeeze at full extension", "Slow return — 3 seconds"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Exhale as you extend the arm (1s). Inhale as you return (3s).",
                inhale: 3, exhale: 1
              }
            }
          ]
        },
        {
          name: "Forearm Finisher",
          duration: "6 min",
          exercises: [
            {
              name: "DB Wrist Curls",
              target: "Flexor group",
              sets: 3, reps: "15–20", rest: 30, load: "5 kg",
              pose: {
                frames: [
                  { figure: "wrist_curl_start", label: "Palms up, wrist open" },
                  { figure: "wrist_curl_end", label: "Curl upward, squeeze" }
                ],
                cues: ["Forearms resting on thighs or bench", "Let wrist drop fully at bottom", "Curl only the wrist — forearms stay still", "Squeeze at top for 1 second", "Full range — bottom to top"]
              },
              breathing: { pattern: "free", instruction: "Breathe freely. Exhale on the curl up.", inhale: 1, exhale: 1 }
            },
            {
              name: "DB Reverse Wrist Curls",
              target: "Extensor group — critical for balance",
              sets: 3, reps: "15", rest: 30, load: "2.5–5 kg",
              pose: {
                frames: [
                  { figure: "reverse_curl_start", label: "Palms down, wrist dropped" },
                  { figure: "reverse_curl_end", label: "Raise knuckles up" }
                ],
                cues: ["Palms facing DOWN on thighs", "Lighter weight needed here — extensors are weaker", "Full drop at bottom", "Raise knuckles as high as possible", "Control on the way down"]
              },
              breathing: { pattern: "free", instruction: "Exhale raising knuckles, inhale lowering.", inhale: 1, exhale: 1 }
            },
            {
              name: "Hand Grip Crusher Sets",
              target: "Grip endurance, forearm density",
              sets: 2, reps: "Max × 45s", rest: 30, load: "Grip trainer",
              pose: {
                frames: [
                  { figure: "grip_open", label: "Full open hand" },
                  { figure: "grip_closed", label: "Full crush — max squeeze" }
                ],
                cues: ["Hold gripper at base of fingers", "Full open between each rep", "Squeeze to complete closure each rep", "Alternate hands with no rest between", "Track reps — beat it next session"]
              },
              breathing: { pattern: "free", instruction: "Never hold breath. Exhale on each squeeze.", inhale: 1, exhale: 1 }
            }
          ]
        }
      ]
    },
    {
      id: "tue",
      label: "TUE",
      name: "Pull Day A",
      focus: "Back · Biceps · Rear Delt",
      color: "#47c8ff",
      icon: "🏋️",
      totalTime: 50,
      phases: [
        {
          name: "Warm-Up",
          duration: "8 min",
          exercises: [
            {
              name: "Arm Swings + Cross-body",
              target: "Chest & shoulder mobility",
              sets: 1, reps: "30 sec each", rest: 0, load: "BW",
              pose: {
                frames: [{ figure: "arm_swing", label: "Swing arms wide" }, { figure: "crossbody", label: "Cross across chest" }],
                cues: ["Stand with feet shoulder-width", "Swing arms back as far as comfortable", "Then cross arms in front of chest", "Gradually increase range each rep", "Keep upper body relaxed"]
              },
              breathing: { pattern: "free", instruction: "Breathe naturally. Let body dictate rhythm.", inhale: 0, exhale: 0 }
            },
            {
              name: "Dead Hangs",
              target: "Shoulder decompression, grip primer",
              sets: 1, reps: "20–30 sec", rest: 30, load: "BW",
              pose: {
                frames: [{ figure: "hang_passive", label: "Grip bar" }, { figure: "hang_active", label: "Depress scapulae" }],
                cues: ["Grip slightly wider than shoulders", "Pull shoulder blades DOWN (not just hanging)", "Long slow breaths to relax lats", "Grip alternating overhand/underhand if needed"]
              },
              breathing: { pattern: "timed", instruction: "Inhale 4s through nose, exhale 4s through mouth. Decompress.", inhale: 4, exhale: 4 }
            }
          ]
        },
        {
          name: "Main Lifts",
          duration: "35 min",
          exercises: [
            {
              name: "Pull-ups (Pronated Grip)",
              target: "Lats, rhomboids, biceps",
              sets: 4, reps: "Max–2", rest: 90, load: "BW",
              pose: {
                frames: [
                  { figure: "pullup_hang", label: "Start: full dead hang" },
                  { figure: "pullup_mid", label: "Mid: elbows driving down" },
                  { figure: "pullup_top", label: "Top: chest near bar" }
                ],
                cues: ["Overhand grip, hands just outside shoulders", "Start from FULL dead hang — no cheating", "Drive elbows toward hips (think: elbows to back pockets)", "Chest leads up — not chin", "3s controlled descent — full hang at bottom"]
              },
              breathing: {
                pattern: "timed",
                instruction: "Inhale at bottom hang. Exhale as you pull up. Inhale on slow descent (3s).",
                inhale: 3, exhale: 2
              }
            },
            {
              name: "Chin-ups (Supinated Grip)",
              target: "Lower lats, biceps peak",
              sets: 3, reps: "Max–1", rest: 90, load: "BW",
              pose: {
                frames: [
                  { figure: "chinup_hang", label: "Palms facing you" },
                  { figure: "chinup_top", label: "Pull chin over bar" }
                ],
                cues: ["Underhand grip, hands shoulder-width", "Elbows close to body throughout", "Squeeze biceps at top — 1s pause", "Don't swing or kip", "Full dead hang between reps"]
              },
              breathing: { pattern: "timed", instruction: "Exhale pulling up. Inhale descending (3s). Never hold at top.", inhale: 3, exhale: 2 }
            },
            {
              name: "DB Single-arm Row",
              target: "Mid-back, lat thickness",
              sets: 3, reps: "10–12 / side", rest: 60, load: "12.5–15 kg",
              pose: {
                frames: [
                  { figure: "row_start", label: "Hinge, arm hanging" },
                  { figure: "row_end", label: "Elbow drives back" }
                ],
                cues: ["Support hand and knee on bench/chair", "Spine completely neutral — no rounding", "Let arm hang FULLY at bottom (stretch the lat)", "Drive ELBOW back toward hip — not up", "At top: squeeze lat, shoulder blade retracted, 1s pause"]
              },
              breathing: { pattern: "timed", instruction: "Inhale on the stretch down (2s). Exhale as you row up (2s).", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Hammer Curl",
              target: "Brachialis, forearm thickness",
              sets: 3, reps: "12", rest: 45, load: "10–12.5 kg",
              pose: {
                frames: [
                  { figure: "hammer_start", label: "Neutral grip, arms down" },
                  { figure: "hammer_top", label: "Curl to shoulder" }
                ],
                cues: ["Neutral grip (thumbs up) throughout — don't rotate", "Upper arms pinned to sides — no swinging", "Curl to shoulder height", "Squeeze brachialis at top — 1s", "2s controlled lowering"]
              },
              breathing: { pattern: "timed", instruction: "Exhale curling up (2s). Inhale lowering (2s). Steady rhythm.", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Reverse Curl",
              target: "Brachioradialis, extensor group",
              sets: 3, reps: "12–15", rest: 45, load: "7.5–10 kg",
              pose: {
                frames: [
                  { figure: "reverse_start", label: "Overhand grip, arms down" },
                  { figure: "reverse_top", label: "Curl — knuckles up" }
                ],
                cues: ["Overhand grip — knuckles face forward", "Upper arms still — elbows act as hinges only", "This is harder than regular curls — lower weight", "Full extension at bottom", "Squeeze forearms at top"]
              },
              breathing: { pattern: "timed", instruction: "Exhale on curl (2s). Inhale on descent (2s). Keep breathing.", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Rear Delt Fly",
              target: "Posterior delt, upper back",
              sets: 3, reps: "15", rest: 45, load: "5 kg",
              pose: {
                frames: [
                  { figure: "fly_start", label: "Hinge 45°, DBs hanging" },
                  { figure: "fly_end", label: "Raise to shoulder height" }
                ],
                cues: ["Hinge 45° at hips, back flat", "Slight bend in elbows — maintain it", "Raise arms OUT and BACK (like a T)", "Lead with elbows, not hands", "Squeeze rear delts at top — pinch shoulder blades"]
              },
              breathing: { pattern: "timed", instruction: "Exhale raising (2s). Inhale lowering (3s). Light weight, full feel.", inhale: 3, exhale: 2 }
            }
          ]
        },
        {
          name: "Forearm Finisher",
          duration: "5 min",
          exercises: [
            {
              name: "Farmer's Carry",
              target: "Grip endurance, traps, core",
              sets: 3, reps: "30–40 steps", rest: 45, load: "12.5–15 kg/hand",
              pose: {
                frames: [
                  { figure: "farmers_stand", label: "Stand tall, DBs at sides" },
                  { figure: "farmers_walk", label: "Walk — chest up, no lean" }
                ],
                cues: ["Hold DBs at sides with death grip", "Shoulders back and DOWN — don't shrug", "Chest tall — look forward", "Small controlled steps", "No leaning side to side — stay rigid"]
              },
              breathing: { pattern: "free", instruction: "Breathe naturally. Inhale through nose, exhale through mouth. Steady rhythm.", inhale: 0, exhale: 0 }
            },
            {
              name: "Dead Hang Timed Hold",
              target: "Grip max strength, decompression",
              sets: 2, reps: "Max hold", rest: 60, load: "BW",
              pose: {
                frames: [
                  { figure: "hang_active", label: "Active hang, scapulae down" }
                ],
                cues: ["Aim for 60s continuous", "Active hang — shoulder blades depressed", "If grip fails, rest and continue", "Track your time every session", "This is both strength AND measurement"]
              },
              breathing: { pattern: "timed", instruction: "Long slow breaths help you hold longer. Inhale 4s, exhale 4s. Don't rush.", inhale: 4, exhale: 4 }
            }
          ]
        }
      ]
    },
    {
      id: "wed",
      label: "WED",
      name: "Legs + Calves",
      focus: "Quads · Hamstrings · Calf Priority",
      color: "#ff6b35",
      icon: "🦵",
      totalTime: 50,
      phases: [
        {
          name: "Warm-Up",
          duration: "8 min",
          exercises: [
            {
              name: "Bodyweight Squats",
              target: "Hip flexors, glutes, knees",
              sets: 2, reps: "15", rest: 30, load: "BW",
              pose: {
                frames: [{ figure: "squat_stand", label: "Stand: feet shoulder-width" }, { figure: "squat_bottom", label: "Full depth — thighs parallel" }],
                cues: ["Feet shoulder-width, toes 15° outward", "Arms forward for balance", "Chest tall — no forward lean", "Knees track over toes", "Full depth if mobility allows"]
              },
              breathing: { pattern: "timed", instruction: "Inhale going down (2s). Exhale driving up (2s). Brace core throughout.", inhale: 2, exhale: 2 }
            },
            {
              name: "Single-leg Calf Raises (BW)",
              target: "Ankle prep, soleus activation",
              sets: 1, reps: "10 each side", rest: 0, load: "BW",
              pose: {
                frames: [{ figure: "calf_bottom", label: "Full stretch — heel down" }, { figure: "calf_top", label: "Full rise — hold 1s" }],
                cues: ["Use wall for balance only — don't lean", "Full range: heel below step level at bottom", "Full rise at top — squeeze calf 1s", "Slow 3s up, 1s hold, 3s down", "Feel the stretch at bottom"]
              },
              breathing: { pattern: "timed", instruction: "Exhale rising (3s). Hold breath 1s at top. Inhale lowering (3s).", inhale: 3, exhale: 3 }
            }
          ]
        },
        {
          name: "Main Lifts",
          duration: "30 min",
          exercises: [
            {
              name: "Goblet Squat",
              target: "Quads, glutes, core stability",
              sets: 4, reps: "12–15", rest: 75, load: "15 kg",
              pose: {
                frames: [
                  { figure: "goblet_hold", label: "DB vertical at chest" },
                  { figure: "goblet_bottom", label: "Elbows inside knees at depth" }
                ],
                cues: ["Hold ONE DB vertically at chest (both hands on top end)", "Feet slightly wider than shoulder-width", "Elbows push knees OUT at bottom", "Chest stays upright — counterweight helps", "Drive through heels, not toes"]
              },
              breathing: { pattern: "timed", instruction: "Big breath before descent. Hold and brace going down (2s). Exhale hard driving up (2s).", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Romanian Deadlift",
              target: "Hamstrings, glutes, lower back",
              sets: 3, reps: "10–12", rest: 75, load: "12.5–15 kg",
              pose: {
                frames: [
                  { figure: "rdl_top", label: "Stand: DBs in front" },
                  { figure: "rdl_bottom", label: "Hinge: feel the hamstring" }
                ],
                cues: ["DBs in front of thighs, overhand grip", "HINGE at hips — not squat down", "Soft bend in knees (same angle throughout)", "Push hips BACK — feel hamstrings loading", "Lower until you feel pull — usually mid-shin", "Drive hips forward to stand"]
              },
              breathing: { pattern: "timed", instruction: "Inhale before hinge. Hold brace going down (3s). Exhale forcefully coming up (2s).", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Reverse Lunge",
              target: "Quad, glute balance, stability",
              sets: 3, reps: "10 / side", rest: 60, load: "10–12.5 kg",
              pose: {
                frames: [
                  { figure: "lunge_stand", label: "Stand tall, DBs at sides" },
                  { figure: "lunge_down", label: "Step back, knee hovers floor" }
                ],
                cues: ["Step BACK (not forward) — easier on knees", "Front shin stays VERTICAL — key form point", "Back knee hovers 2cm from floor", "Drive through FRONT heel to stand", "Don't lean forward — stay upright"]
              },
              breathing: { pattern: "timed", instruction: "Inhale stepping back (2s). Exhale driving through front foot to stand (2s).", inhale: 2, exhale: 2 }
            },
            {
              name: "Bulgarian Split Squat",
              target: "Single-leg quad + glute strength",
              sets: 3, reps: "8–10 / side", rest: 75, load: "7.5–10 kg",
              pose: {
                frames: [
                  { figure: "bss_setup", label: "Rear foot elevated on chair" },
                  { figure: "bss_bottom", label: "Front shin vertical, drop down" }
                ],
                cues: ["Rear foot on chair/bench — TOP of foot, not toes", "Front foot far enough forward that shin stays vertical", "Torso upright — don't lean over", "Lower straight down — not forward", "This will burn. That's correct."]
              },
              breathing: { pattern: "timed", instruction: "Inhale descending (3s). Exhale forcefully as you drive up (2s). Brace core.", inhale: 3, exhale: 2 }
            }
          ]
        },
        {
          name: "Calf Priority Block",
          duration: "10 min",
          exercises: [
            {
              name: "Single-leg DB Calf Raise",
              target: "Gastrocnemius — height and peak",
              sets: 4, reps: "15–20", rest: 45, load: "12.5 kg",
              pose: {
                frames: [
                  { figure: "calf_bottom", label: "Heel BELOW step — full stretch" },
                  { figure: "calf_top", label: "Maximum rise — 1s squeeze" }
                ],
                cues: ["Stand on step edge — only front third of foot", "Heel must drop BELOW step level at bottom", "Rise as HIGH as possible — full plantar flexion", "1 second squeeze at absolute top", "3s up — 1s hold — 3s down — NON-NEGOTIABLE"]
              },
              breathing: { pattern: "timed", instruction: "Exhale rising (3s). Hold at top. Inhale lowering (3s). Calves need oxygen — keep breathing.", inhale: 3, exhale: 3 }
            },
            {
              name: "Seated Calf Raise",
              target: "Soleus — the muscle giving calf thickness",
              sets: 3, reps: "20–25", rest: 30, load: "DB on knees",
              pose: {
                frames: [
                  { figure: "seated_calf_down", label: "Knees bent 90°, heels down" },
                  { figure: "seated_calf_up", label: "Heels raise — soleus fires" }
                ],
                cues: ["Sit with knees at 90° — this is critical (soleus only fires bent-knee)", "DB balanced on lower thigh near knee", "Full drop at bottom — feel the soleus stretch", "Raise as high as possible", "20–25 reps — soleus is built for endurance"]
              },
              breathing: { pattern: "free", instruction: "Breathe freely. These are high rep — just keep moving with steady breath.", inhale: 1, exhale: 1 }
            },
            {
              name: "Calf Raise ISO Hold",
              target: "Time under tension overload",
              sets: 2, reps: "30–45 sec hold", rest: 45, load: "BW or DB",
              pose: {
                frames: [{ figure: "calf_top", label: "Maximum height — hold" }],
                cues: ["Rise to absolute maximum height", "Hold. Don't lower.", "When it burns — hold 10 more seconds", "This is the difference maker for calf growth", "Mental toughness set — don't bail early"]
              },
              breathing: { pattern: "timed", instruction: "Inhale 4s, exhale 4s while holding. Breathing helps you stay up longer.", inhale: 4, exhale: 4 }
            }
          ]
        }
      ]
    },
    {
      id: "thu",
      label: "THU",
      name: "Push Day B",
      focus: "Shoulders · Triceps · Chest",
      color: "#c8ff47",
      icon: "🔺",
      totalTime: 50,
      phases: [
        {
          name: "Warm-Up",
          duration: "8 min",
          exercises: [
            {
              name: "Joint Circles",
              target: "Wrists, elbows, shoulders",
              sets: 1, reps: "10 each", rest: 0, load: "BW",
              pose: { frames: [{ figure: "standing_arms_out", label: "Arms extended" }], cues: ["Focus on shoulders today", "Wide slow circles", "Both directions"] },
              breathing: { pattern: "free", instruction: "Breathe naturally.", inhale: 0, exhale: 0 }
            }
          ]
        },
        {
          name: "Main Lifts",
          duration: "35 min",
          exercises: [
            {
              name: "DB Arnold Press",
              target: "Full deltoid — shoulder-led today",
              sets: 4, reps: "10–12", rest: 75, load: "10 kg",
              pose: {
                frames: [{ figure: "arnold_start", label: "Palms facing you" }, { figure: "arnold_top", label: "Rotate and press" }],
                cues: ["Seated, spine neutral", "This is the primary lift today — go heavier than Push A", "Full rotation palm-in to palm-out", "Controlled on the way down", "Keep core braced — no back arch"]
              },
              breathing: { pattern: "timed", instruction: "Inhale at bottom. Exhale through rotation and press (2s).", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Lateral Raise",
              target: "Medial deltoid — shoulder width",
              sets: 4, reps: "12–15", rest: 45, load: "5–7.5 kg",
              pose: {
                frames: [{ figure: "lateral_start", label: "Slight forward lean" }, { figure: "lateral_top", label: "Shoulder height — pour water" }],
                cues: ["Lead with elbows", "Pinky up slightly — external rotation", "3s down every rep", "Burn means it's working"]
              },
              breathing: { pattern: "timed", instruction: "Exhale raising (2s). Inhale slow descent (3s).", inhale: 3, exhale: 2 }
            },
            {
              name: "DB Floor Press",
              target: "Chest — secondary today",
              sets: 3, reps: "10", rest: 60, load: "12.5 kg",
              pose: {
                frames: [{ figure: "floor_press_top", label: "DBs over chest" }, { figure: "floor_press_bottom", label: "Elbows touch floor" }],
                cues: ["Same form as Push A", "Slightly lighter — shoulders already fatigued", "Focus on chest squeeze at top", "Full ROM every rep"]
              },
              breathing: { pattern: "timed", instruction: "Inhale lowering (3s). Exhale pressing (2s).", inhale: 3, exhale: 2 }
            },
            {
              name: "Diamond Push-ups",
              target: "Triceps burnout",
              sets: 3, reps: "Max", rest: 60, load: "BW",
              pose: {
                frames: [{ figure: "diamond_top", label: "Diamond hands" }, { figure: "diamond_bottom", label: "Lower fully" }],
                cues: ["Max reps to near failure", "If you hit 20+ add a weight plate on back", "No half reps — full range only", "Rest-pause if needed: 5 breaths then continue"]
              },
              breathing: { pattern: "timed", instruction: "Exhale pressing (1s). Inhale lowering (2s). Push through the burn.", inhale: 2, exhale: 1 }
            },
            {
              name: "DB Overhead Tricep Extension",
              target: "Tricep long head — stretch loaded",
              sets: 3, reps: "12", rest: 45, load: "10–12.5 kg",
              pose: {
                frames: [
                  { figure: "overhead_ext_top", label: "DB overhead, arms extended" },
                  { figure: "overhead_ext_bottom", label: "Lower behind head" }
                ],
                cues: ["Hold ONE DB with both hands above head", "Elbows stay pointed UP — don't let them flare", "Lower DB behind head until stretch felt in tricep", "Upper arms stay still — only forearms move", "Full extension at top"]
              },
              breathing: { pattern: "timed", instruction: "Inhale lowering (3s). Exhale extending (2s). Keep elbows in.", inhale: 3, exhale: 2 }
            }
          ]
        },
        {
          name: "Forearm Finisher",
          duration: "6 min",
          exercises: [
            {
              name: "Hand Grip Crusher Sets",
              target: "Grip endurance — try to beat Monday",
              sets: 3, reps: "Max × 45s", rest: 30, load: "Grip trainer",
              pose: { frames: [{ figure: "grip_closed", label: "Full crush" }], cues: ["Full open between reps", "Track total reps", "Beat last session"] },
              breathing: { pattern: "free", instruction: "Exhale on every squeeze. Never hold breath.", inhale: 1, exhale: 1 }
            },
            {
              name: "DB Wrist Curls",
              target: "Flexor group",
              sets: 3, reps: "15–20", rest: 30, load: "5 kg",
              pose: { frames: [{ figure: "wrist_curl_end", label: "Full curl" }], cues: ["Full ROM", "Squeeze at top"] },
              breathing: { pattern: "free", instruction: "Exhale curling up, inhale down.", inhale: 1, exhale: 1 }
            }
          ]
        }
      ]
    },
    {
      id: "fri",
      label: "FRI",
      name: "Pull Day B",
      focus: "Biceps · Back · Forearm depth",
      color: "#ff47c8",
      icon: "💪",
      totalTime: 50,
      phases: [
        {
          name: "Warm-Up",
          duration: "8 min",
          exercises: [
            {
              name: "Dead Hangs",
              target: "Shoulder decompression",
              sets: 2, reps: "25 sec", rest: 30, load: "BW",
              pose: { frames: [{ figure: "hang_active", label: "Active hang" }], cues: ["Scapulae down", "Slow breaths", "Relax into stretch"] },
              breathing: { pattern: "timed", instruction: "Inhale 4s, exhale 4s. Decompress the spine.", inhale: 4, exhale: 4 }
            }
          ]
        },
        {
          name: "Main Lifts",
          duration: "35 min",
          exercises: [
            {
              name: "Chin-ups (Supinated Grip)",
              target: "Biceps peak, lower lats",
              sets: 4, reps: "Max–1", rest: 90, load: "BW",
              pose: {
                frames: [{ figure: "chinup_hang", label: "Palms facing you" }, { figure: "chinup_top", label: "Chin over bar" }],
                cues: ["This is primary today — push for one more rep vs Tuesday", "Underhand shoulder-width grip", "Squeeze biceps at top hard", "3s down to full hang", "No kipping — ever"]
              },
              breathing: { pattern: "timed", instruction: "Exhale pulling up (2s). Inhale lowering (3s). Big breath at dead hang.", inhale: 3, exhale: 2 }
            },
            {
              name: "DB Single-arm Row",
              target: "Lat thickness and width",
              sets: 4, reps: "10–12 / side", rest: 60, load: "15 kg",
              pose: {
                frames: [{ figure: "row_start", label: "Full arm stretch" }, { figure: "row_end", label: "Elbow past hip" }],
                cues: ["Go heavier than Tuesday", "Full stretch at bottom — crucial", "Elbow drives PAST hip at top", "Shoulder blade fully retracted at top", "2s pause at top position"]
              },
              breathing: { pattern: "timed", instruction: "Inhale stretching down (2s). Exhale rowing up (2s). Pause and breathe at top.", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Hammer Curl",
              target: "Brachialis thickness",
              sets: 3, reps: "12", rest: 45, load: "12.5 kg",
              pose: {
                frames: [{ figure: "hammer_start", label: "Neutral grip" }, { figure: "hammer_top", label: "Curl to shoulder" }],
                cues: ["Neutral grip throughout", "Alternate arms for higher TUT", "No body swing", "2s up, 2s down"]
              },
              breathing: { pattern: "timed", instruction: "Exhale curling (2s). Inhale lowering (2s). Alternate arms rhythmically.", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Reverse Curl",
              target: "Brachioradialis, forearm thickness",
              sets: 3, reps: "12–15", rest: 45, load: "10 kg",
              pose: {
                frames: [{ figure: "reverse_start", label: "Overhand grip" }, { figure: "reverse_top", label: "Knuckles up to shoulder" }],
                cues: ["Overhand grip — hardest curl variation", "Elbows pinned to sides", "This builds forearm SIZE not just strength", "Full extension at bottom each rep"]
              },
              breathing: { pattern: "timed", instruction: "Exhale curling (2s). Inhale descending (2s). Steady.", inhale: 2, exhale: 2 }
            },
            {
              name: "DB Rear Delt Fly",
              target: "Posterior delt, upper back",
              sets: 3, reps: "15", rest: 45, load: "5 kg",
              pose: {
                frames: [{ figure: "fly_start", label: "Hinge 45°" }, { figure: "fly_end", label: "T-shape at top" }],
                cues: ["Light weight, high feel", "T-shape at top", "Pinch shoulder blades", "Squeeze rear delts — not traps"]
              },
              breathing: { pattern: "timed", instruction: "Exhale raising (2s). Inhale lowering (3s).", inhale: 3, exhale: 2 }
            }
          ]
        },
        {
          name: "Forearm Finisher",
          duration: "5 min",
          exercises: [
            {
              name: "Farmer's Carry",
              target: "Grip endurance, core, traps",
              sets: 3, reps: "40 steps", rest: 45, load: "15 kg/hand",
              pose: { frames: [{ figure: "farmers_walk", label: "Chest tall, no lean" }], cues: ["Go heavier than Tuesday if possible", "Shoulders back and down", "Death grip on DBs"] },
              breathing: { pattern: "free", instruction: "Breathe naturally. Inhale nose, exhale mouth.", inhale: 0, exhale: 0 }
            },
            {
              name: "Dead Hang Timed Hold",
              target: "Beat Tuesday's time",
              sets: 2, reps: "Beat last time", rest: 60, load: "BW",
              pose: { frames: [{ figure: "hang_active", label: "Active hang" }], cues: ["Track your seconds", "This is your weekly benchmark", "Active hang — not passive"] },
              breathing: { pattern: "timed", instruction: "Inhale 4s, exhale 4s. Rhythm helps hold longer.", inhale: 4, exhale: 4 }
            }
          ]
        }
      ]
    },
    {
      id: "sat",
      label: "SAT",
      name: "Pickleball",
      focus: "Active Recovery · Cardio · Fun",
      color: "#47ffb8",
      icon: "🏓",
      totalTime: 60,
      phases: [],
      restDay: true,
      restMessage: "Active recovery day. Pickleball counts as your cardio and active rest. No structured lifting. Enjoy the game — it's working for you."
    },
    {
      id: "sun",
      label: "SUN",
      name: "Full Rest",
      focus: "Recovery · Mobility · Growth",
      color: "#888",
      icon: "🌙",
      totalTime: 0,
      phases: [],
      restDay: true,
      restMessage: "Complete rest. Muscles grow when you recover, not when you train. Optional: 10 min light stretching or Ho'oponopono practice."
    }
  ]
};
