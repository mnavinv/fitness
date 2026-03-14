// poses.js — Filled silhouette exercise figures
!function(){
const svg=(vb,body)=>`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg"><style>@keyframes fe-b{0%,100%{opacity:.82}50%{opacity:1}}.fe-g{animation:fe-b 4s ease-in-out infinite}</style><g class="fe-g">${body}</g></svg>`;
const hd=(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="13" ry="15" fill="currentColor"/>`;
const torso=(cx,ty,h,sw=14,ww=10)=>`<path d="M${cx-sw} ${ty}L${cx+sw} ${ty}L${cx+ww} ${ty+h}L${cx-ww} ${ty+h}Z" fill="currentColor" opacity=".88"/>`;
const seg=(ax,ay,bx,by,w,op=.85)=>{const dx=bx-ax,dy=by-ay,l=Math.hypot(dx,dy),a=Math.atan2(dy,dx)*180/Math.PI;return `<rect x="${ax}" y="${ay-w}" width="${l}" height="${w*2}" rx="${w}" fill="currentColor" opacity="${op}" transform="rotate(${a},${ax},${ay})"/>`;};
const foot=(cx,cy)=>`<ellipse cx="${cx}" cy="${cy}" rx="14" ry="5" fill="currentColor" opacity=".72"/>`;
const db=(x,y)=>`<rect x="${x-9}" y="${y-3}" width="18" height="6" rx="3" fill="currentColor" opacity=".6"/><rect x="${x-14}" y="${y-5}" width="5" height="10" rx="2" fill="currentColor" opacity=".82"/><rect x="${x+9}" y="${y-5}" width="5" height="10" rx="2" fill="currentColor" opacity=".82"/>`;
const dbv=(x,y)=>`<rect x="${x-3}" y="${y-9}" width="6" height="18" rx="3" fill="currentColor" opacity=".6"/><rect x="${x-5}" y="${y-13}" width="10" height="5" rx="2" fill="currentColor" opacity=".82"/><rect x="${x-5}" y="${y+8}" width="10" height="5" rx="2" fill="currentColor" opacity=".82"/>`;
const bar=(x1,y,x2)=>`<rect x="${x1}" y="${y-4}" width="${x2-x1}" height="8" rx="4" fill="currentColor" opacity=".5"/>`;
const floor=()=>`<line x1="0" y1="99" x2="210" y2="99" stroke="currentColor" stroke-width="2" opacity=".15"/>`;

// Standard pieces — standing figure centered at x=60 in 120×200
// Head(60,18) Torso top(60,32) bottom(60,86) ShoulderL(46,44) ShoulderR(74,44)
const H=hd(60,18);
const T=torso(60,32,54);
const L=()=>seg(50,86,44,132,9)+seg(44,132,40,174,7)+foot(40,179)+seg(70,86,76,132,9)+seg(76,132,80,174,7)+foot(80,179);
const AR=()=>seg(46,44,32,76,7)+seg(32,76,28,102,6)+seg(74,44,88,76,7)+seg(88,76,92,102,6); // arms at rest
const STD=(extra='')=>svg('0 0 120 200',H+T+AR()+L()+extra);

// Hanging figure base (120×220)
const HANG_BASE=(armLx,armLy,armRx,armRy,bodyY)=>
  bar(12,8,108)+
  `<ellipse cx="${armLx}" cy="14" rx="9" ry="5" fill="currentColor" opacity=".82"/>` +
  `<ellipse cx="${armRx}" cy="14" rx="9" ry="5" fill="currentColor" opacity=".82"/>` +
  seg(armLx,14,armLy[0],armLy[1],7)+seg(armRx,14,armRy[0],armRy[1],7)+
  hd(60,bodyY)+torso(60,bodyY+14,50)+
  seg(46,bodyY+14,armLy[0],armLy[1],9)+seg(74,bodyY+14,armRy[0],armRy[1],9)+
  seg(52,bodyY+64,46,bodyY+110,9)+seg(46,bodyY+110,42,bodyY+148,7)+foot(42,bodyY+153)+
  seg(68,bodyY+64,74,bodyY+110,9)+seg(74,bodyY+110,78,bodyY+148,7)+foot(78,bodyY+153);

// Hinge base — bent-over position (160×165)
const HINGE=(extra)=>svg('0 0 165 165',
  hd(22,26)+seg(22,40,42,48,8)+
  `<rect x="36" y="38" width="104" height="20" rx="10" fill="currentColor" opacity=".88"/>` +
  seg(130,58,122,106,14)+seg(122,106,118,146,12,.8)+foot(118,151)+
  seg(148,58,156,106,14)+seg(156,106,160,146,12,.8)+foot(160,151)+extra);

window.POSES = {

// ── WARMUP ────────────────────────────────────────────────────────────────
standing_arms_out: {svg: svg('0 0 160 200',
  hd(80,18)+torso(80,32,54)+
  seg(66,44,14,68,7)+seg(14,68,8,94,6)+
  seg(94,44,146,68,7)+seg(146,68,152,94,6)+
  seg(70,86,64,132,9)+seg(64,132,60,174,7)+foot(60,179)+
  seg(90,86,96,132,9)+seg(96,132,100,174,7)+foot(100,179))},

circle_motion: {svg: svg('0 0 160 200',
  hd(80,18)+torso(80,32,54)+
  seg(66,44,12,66,7)+seg(12,66,8,92,6)+
  seg(94,44,148,66,7)+seg(148,66,152,92,6)+
  seg(70,86,64,132,9)+seg(64,132,60,174,7)+foot(60,179)+
  seg(90,86,96,132,9)+seg(96,132,100,174,7)+foot(100,179)+
  `<path d="M8 90 Q-4 64 8 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 3" opacity=".5"/>` +
  `<path d="M152 90 Q164 64 152 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 3" opacity=".5"/>`)},

arm_swing: {svg: STD()},
crossbody: {svg: svg('0 0 120 200', H+T+
  seg(46,44,72,62,7)+seg(72,62,82,76,6)+
  seg(74,44,48,60,7)+seg(48,60,38,74,6)+L())},

// ── PUSH-UPS (side view 210×105) ─────────────────────────────────────────
pushup_top: {svg: svg('0 0 210 105',
  hd(192,26)+seg(192,40,172,44,8)+
  `<rect x="42" y="36" width="135" height="22" rx="11" fill="currentColor" opacity=".88"/>` +
  `<ellipse cx="56" cy="47" rx="22" ry="14" fill="currentColor" opacity=".8"/>` +
  seg(148,38,148,90,8)+seg(128,40,128,92,8,.7)+
  seg(36,46,10,58,13)+seg(10,58,4,64,11,.8)+foot(4,70)+foot(16,72)+
  floor())},

pushup_bottom: {svg: svg('0 0 210 105',
  hd(192,48)+seg(192,62,172,66,8)+
  `<rect x="42" y="58" width="135" height="22" rx="11" fill="currentColor" opacity=".88"/>` +
  `<ellipse cx="56" cy="69" rx="22" ry="14" fill="currentColor" opacity=".8"/>` +
  seg(148,58,132,80,8)+seg(132,80,150,96,7)+
  seg(128,60,114,80,8,.7)+seg(114,80,130,96,7,.65)+
  seg(36,68,10,80,13)+seg(10,80,4,86,11,.8)+foot(4,92)+foot(16,94)+
  floor())},

diamond_top: {svg: svg('0 0 210 105',
  hd(192,26)+seg(192,40,172,44,8)+
  `<rect x="42" y="36" width="135" height="22" rx="11" fill="currentColor" opacity=".88"/>` +
  `<ellipse cx="56" cy="47" rx="22" ry="14" fill="currentColor" opacity=".8"/>` +
  seg(148,38,152,90,8)+seg(128,40,124,92,8,.7)+
  `<ellipse cx="138" cy="98" rx="18" ry="6" fill="currentColor" opacity=".72"/>` +
  seg(36,46,10,58,13)+foot(4,70)+foot(16,72)+floor())},

diamond_bottom: {svg: svg('0 0 210 105',
  hd(192,48)+seg(192,62,172,66,8)+
  `<rect x="42" y="58" width="135" height="22" rx="11" fill="currentColor" opacity=".88"/>` +
  `<ellipse cx="56" cy="69" rx="22" ry="14" fill="currentColor" opacity=".8"/>` +
  seg(148,58,144,80,8)+seg(144,80,154,96,7)+
  seg(128,60,124,80,8,.7)+seg(124,80,132,96,7,.65)+
  `<ellipse cx="143" cy="98" rx="18" ry="6" fill="currentColor" opacity=".72"/>` +
  seg(36,68,10,80,13)+foot(4,92)+foot(16,94)+floor())},

// ── HANGING / PULL-UPS (120×220) ─────────────────────────────────────────
hang_passive: {svg: svg('0 0 120 220',HANG_BASE(38,17,[40,36],[80,36],50))},
hang_active:  {svg: svg('0 0 120 220',HANG_BASE(38,17,[38,32],[82,32],46))},
pullup_hang:  {svg: svg('0 0 120 220',HANG_BASE(36,17,[38,36],[82,36],52))},
pullup_mid:   {svg: svg('0 0 120 220',HANG_BASE(34,17,[28,26],[92,26],38))},
pullup_top:   {svg: svg('0 0 120 220',HANG_BASE(32,17,[24,20],[96,20],16))},
chinup_hang:  {svg: svg('0 0 120 220',HANG_BASE(40,17,[42,36],[78,36],52))},
chinup_top:   {svg: svg('0 0 120 220',HANG_BASE(36,17,[26,20],[94,20],16))},

// ── FLOOR PRESS (top-down 3/4 view 210×120) ───────────────────────────────
floor_press_top: {svg: svg('0 0 210 120',
  hd(188,28)+
  `<rect x="54" y="20" width="130" height="26" rx="13" fill="currentColor" opacity=".88"/>` +
  `<ellipse cx="66" cy="33" rx="22" ry="15" fill="currentColor" opacity=".8"/>` +
  seg(58,46,50,90,14)+seg(50,90,46,108,11,.8)+foot(46,114)+
  seg(76,46,84,90,14)+seg(84,90,88,108,11,.8)+foot(88,114)+
  seg(142,22,142,6,8)+db(142,4)+seg(162,22,162,6,8)+db(162,4))},

floor_press_bottom: {svg: svg('0 0 210 120',
  hd(188,28)+
  `<rect x="54" y="20" width="130" height="26" rx="13" fill="currentColor" opacity=".88"/>` +
  `<ellipse cx="66" cy="33" rx="22" ry="15" fill="currentColor" opacity=".8"/>` +
  seg(58,46,50,90,14)+seg(50,90,46,108,11,.8)+foot(46,114)+
  seg(76,46,84,90,14)+seg(84,90,88,108,11,.8)+foot(88,114)+
  seg(142,22,128,44,8)+seg(128,44,138,58,7)+db(140,60)+
  seg(162,22,176,44,8)+seg(176,44,166,58,7)+db(164,60))},

// ── SHOULDER PRESS ────────────────────────────────────────────────────────
arnold_start: {svg: STD(db(28,98)+db(92,98))},

arnold_mid: {svg: svg('0 0 120 200',H+T+L()+
  seg(46,44,22,60,7)+seg(22,60,18,38,6)+db(16,34)+
  seg(74,44,98,60,7)+seg(98,60,102,38,6)+db(104,34))},

arnold_top: {svg: svg('0 0 120 200',H+T+L()+
  seg(46,44,30,22,7)+seg(30,22,32,4,6)+db(30,2)+
  seg(74,44,90,22,7)+seg(90,22,88,4,6)+db(90,2))},

// ── LATERAL RAISE ─────────────────────────────────────────────────────────
lateral_start: {svg: STD(db(28,102)+db(92,102))},

lateral_top: {svg: svg('0 0 165 200',
  hd(82,18)+torso(82,32,54)+
  seg(68,44,16,46,7)+seg(16,46,2,48,6)+db(0,46)+
  seg(96,44,148,46,7)+seg(148,46,163,48,6)+db(165,46)+
  seg(72,86,66,132,9)+seg(66,132,62,174,7)+foot(62,179)+
  seg(92,86,98,132,9)+seg(98,132,102,174,7)+foot(102,179))},

// ── ROWS (hinged, 165×165) ────────────────────────────────────────────────
row_start: {svg: HINGE(
  seg(46,44,42,86,8)+seg(42,86,40,110,6)+db(38,114)+
  seg(64,44,60,82,8)+seg(60,82,58,104,6))},

row_end: {svg: HINGE(
  seg(46,44,60,30,8)+seg(60,30,74,22,6)+db(76,20)+
  seg(64,44,60,82,8)+seg(60,82,58,104,6))},

// ── REAR DELT FLY ────────────────────────────────────────────────────────
fly_start: {svg: HINGE(
  seg(46,44,40,86,8)+seg(40,86,36,108,6)+db(34,112)+
  seg(82,44,88,86,8)+seg(88,86,92,108,6)+db(94,112))},

fly_end: {svg: HINGE(
  seg(46,44,10,40,8)+seg(10,40,2,38,6)+db(0,36)+
  seg(82,44,118,40,8)+seg(118,40,128,38,6)+db(130,36))},

// ── TRICEP KICKBACK ───────────────────────────────────────────────────────
kickback_start: {svg: HINGE(
  seg(46,44,38,76,8)+seg(38,76,28,98,6)+db(26,102)+
  seg(64,44,60,82,8))},

kickback_end: {svg: HINGE(
  seg(46,44,38,76,8)+seg(38,76,62,58,6)+db(66,56)+
  seg(64,44,60,82,8))},

// ── CURLS ─────────────────────────────────────────────────────────────────
hammer_start: {svg: STD(dbv(28,102)+dbv(92,102))},

hammer_top: {svg: svg('0 0 120 200',H+T+L()+
  seg(46,44,32,76,7)+seg(32,76,36,52,6)+dbv(34,46)+
  seg(74,44,88,76,7)+seg(88,76,84,52,6)+dbv(86,46))},

reverse_start: {svg: STD(db(28,102)+db(92,102))},

reverse_top: {svg: svg('0 0 120 200',H+T+L()+
  seg(46,44,32,76,7)+seg(32,76,36,52,6)+db(34,48)+
  seg(74,44,88,76,7)+seg(88,76,84,52,6)+db(86,48))},

// ── WRIST CURLS (seated 145×175) ─────────────────────────────────────────
wrist_curl_start: {svg: svg('0 0 145 175',
  hd(72,20)+torso(72,34,48)+
  seg(58,38,44,74,7)+seg(44,74,38,116,6)+db(36,120)+
  seg(86,38,100,74,7)+seg(100,74,106,116,6)+db(108,120)+
  seg(62,82,50,118,13)+seg(50,118,48,155,11,.8)+foot(48,160)+
  seg(82,82,94,118,13)+seg(94,118,96,155,11,.8)+foot(96,160)+
  `<rect x="18" y="85" width="110" height="8" rx="4" fill="currentColor" opacity=".18"/>` +
  `<line x1="16" y1="163" x2="130" y2="163" stroke="currentColor" stroke-width="2" opacity=".14"/>`)},

wrist_curl_end: {svg: svg('0 0 145 175',
  hd(72,20)+torso(72,34,48)+
  seg(58,38,44,74,7)+seg(44,74,38,112,6)+seg(38,112,32,102,6)+db(30,100)+
  seg(86,38,100,74,7)+seg(100,74,106,112,6)+seg(106,112,112,102,6)+db(114,100)+
  seg(62,82,50,118,13)+seg(50,118,48,155,11,.8)+foot(48,160)+
  seg(82,82,94,118,13)+seg(94,118,96,155,11,.8)+foot(96,160)+
  `<rect x="18" y="85" width="110" height="8" rx="4" fill="currentColor" opacity=".18"/>` +
  `<line x1="16" y1="163" x2="130" y2="163" stroke="currentColor" stroke-width="2" opacity=".14"/>`)},

reverse_curl_start: {svg: svg('0 0 145 175',
  hd(72,20)+torso(72,34,48)+
  seg(58,38,44,74,7)+seg(44,74,38,118,6)+db(36,122)+
  seg(86,38,100,74,7)+seg(100,74,106,118,6)+db(108,122)+
  seg(62,82,50,118,13)+seg(50,118,48,155,11,.8)+foot(48,160)+
  seg(82,82,94,118,13)+seg(94,118,96,155,11,.8)+foot(96,160)+
  `<rect x="18" y="85" width="110" height="8" rx="4" fill="currentColor" opacity=".18"/>`)},

reverse_curl_end: {svg: svg('0 0 145 175',
  hd(72,20)+torso(72,34,48)+
  seg(58,38,44,74,7)+seg(44,74,40,108,6)+db(38,106)+
  seg(86,38,100,74,7)+seg(100,74,104,108,6)+db(106,106)+
  seg(62,82,50,118,13)+seg(50,118,48,155,11,.8)+foot(48,160)+
  seg(82,82,94,118,13)+seg(94,118,96,155,11,.8)+foot(96,160)+
  `<rect x="18" y="85" width="110" height="8" rx="4" fill="currentColor" opacity=".18"/>`)},

// ── GRIP ──────────────────────────────────────────────────────────────────
grip_open: {svg: svg('0 0 80 120',
  seg(40,100,40,52,12)+
  seg(40,52,22,22,5)+seg(40,52,28,20,5)+seg(40,52,38,18,5)+seg(40,52,48,19,5)+seg(40,52,54,22,5)+
  seg(40,68,62,97,9)+`<ellipse cx="68" cy="101" rx="10" ry="6" fill="currentColor" opacity=".55"/>`)},

grip_closed: {svg: svg('0 0 80 120',
  seg(40,100,40,52,12)+
  seg(40,52,24,30,5)+seg(40,52,30,28,5)+seg(40,52,40,28,5)+seg(40,52,50,29,5)+seg(40,52,56,32,5)+
  seg(40,68,62,97,9)+`<ellipse cx="68" cy="101" rx="10" ry="6" fill="currentColor" opacity=".55"/>`)},

// ── FARMER'S CARRY ───────────────────────────────────────────────────────
farmers_stand: {svg: STD(db(28,102)+db(92,102))},

farmers_walk: {svg: svg('0 0 120 200',H+T+
  seg(46,44,32,76,7)+seg(32,76,28,102,6)+db(26,104)+
  seg(74,44,88,76,7)+seg(88,76,92,102,6)+db(94,104)+
  seg(50,86,40,130,9)+seg(40,130,34,174,7)+foot(34,179)+
  seg(70,86,84,130,9)+seg(84,130,90,162,7)+foot(90,167))},

// ── SQUATS ────────────────────────────────────────────────────────────────
squat_stand: {svg: STD()},

squat_bottom: {svg: svg('0 0 135 200',
  hd(67,32)+torso(67,46,38,14,12)+
  seg(53,50,32,64,7)+seg(32,64,18,76,6)+
  seg(81,50,102,64,7)+seg(102,64,116,76,6)+
  `<ellipse cx="67" cy="86" rx="28" ry="13" fill="currentColor" opacity=".8"/>` +
  seg(54,86,30,112,13)+seg(30,112,26,140,11,.8)+foot(26,145)+
  seg(80,86,104,112,13)+seg(104,112,108,140,11,.8)+foot(108,145))},

// ── GOBLET SQUAT ─────────────────────────────────────────────────────────
goblet_hold: {svg: svg('0 0 120 200',H+T+L()+
  seg(46,44,36,64,7)+seg(36,64,46,50,6)+
  seg(74,44,84,64,7)+seg(84,64,74,50,6)+dbv(60,42))},

goblet_bottom: {svg: svg('0 0 135 200',
  hd(67,32)+torso(67,46,38,14,12)+
  seg(53,50,34,62,7)+seg(34,62,44,50,6)+
  seg(81,50,100,62,7)+seg(100,62,90,50,6)+dbv(67,42)+
  `<ellipse cx="67" cy="86" rx="28" ry="13" fill="currentColor" opacity=".8"/>` +
  seg(54,86,30,112,13)+seg(30,112,26,140,11,.8)+foot(26,145)+
  seg(80,86,104,112,13)+seg(104,112,108,140,11,.8)+foot(108,145))},

// ── RDL ──────────────────────────────────────────────────────────────────
rdl_top: {svg: STD(db(28,102)+db(92,102))},

rdl_bottom: {svg: svg('0 0 165 170',
  hd(22,26)+seg(22,40,42,48,8)+
  `<rect x="36" y="38" width="108" height="20" rx="10" fill="currentColor" opacity=".88"/>` +
  seg(50,42,46,90,8)+seg(46,90,44,116,6)+db(42,120)+
  seg(70,44,74,90,8)+seg(74,90,76,116,6)+db(78,120)+
  seg(126,58,120,108,14)+seg(120,108,116,150,12,.8)+foot(116,155)+
  seg(144,58,150,108,14)+seg(150,108,154,150,12,.8)+foot(154,155))},

// ── LUNGES ────────────────────────────────────────────────────────────────
lunge_stand: {svg: STD()},

lunge_down: {svg: svg('0 0 130 200',
  hd(65,26)+torso(65,40,50)+
  seg(51,44,38,72,7)+seg(38,72,34,98,6)+
  seg(79,44,92,72,7)+seg(92,72,96,98,6)+
  seg(58,90,48,132,13)+seg(48,132,44,168,11,.8)+foot(44,173)+
  seg(72,90,96,124,13)+seg(96,124,100,160,11,.8)+foot(100,165))},

// ── BULGARIAN SPLIT SQUAT ────────────────────────────────────────────────
bss_setup: {svg: svg('0 0 158 205',
  hd(65,26)+torso(65,40,50)+
  seg(51,44,34,68,7)+seg(34,68,30,94,6)+db(28,98)+
  seg(79,44,96,68,7)+seg(96,68,100,94,6)+db(102,98)+
  seg(58,90,48,136,13)+seg(48,136,44,172,11,.8)+foot(44,177)+
  seg(72,90,96,122,13)+seg(96,122,108,142,11,.8)+
  `<rect x="100" y="142" width="46" height="12" rx="4" fill="currentColor" opacity=".28"/>`)},

bss_bottom: {svg: svg('0 0 158 205',
  hd(65,38)+torso(65,52,50)+
  seg(51,56,34,80,7)+seg(34,80,30,106,6)+db(28,110)+
  seg(79,56,96,80,7)+seg(96,80,100,106,6)+db(102,110)+
  seg(58,102,48,148,13)+seg(48,148,44,184,11,.8)+foot(44,189)+
  seg(72,102,96,134,13)+seg(96,134,108,154,11,.8)+
  `<rect x="100" y="154" width="46" height="12" rx="4" fill="currentColor" opacity=".28"/>`)},

// ── CALF RAISES ──────────────────────────────────────────────────────────
calf_bottom: {svg: svg('0 0 120 200',H+T+AR()+
  seg(50,86,44,132,9)+seg(44,132,40,174,7)+foot(40,179)+
  seg(70,86,76,132,9)+seg(76,132,80,174,7)+foot(80,179)+
  `<line x1="10" y1="182" x2="110" y2="182" stroke="currentColor" stroke-width="2" opacity=".14"/>`)},

calf_top: {svg: svg('0 0 120 200',H+T+AR()+
  seg(50,86,44,128,9)+seg(44,128,42,165,7)+
  `<ellipse cx="48" cy="168" rx="10" ry="5" fill="currentColor" opacity=".82"/>` +
  seg(70,86,76,128,9)+seg(76,128,78,165,7)+
  `<ellipse cx="72" cy="168" rx="10" ry="5" fill="currentColor" opacity=".82"/>` +
  `<line x1="10" y1="174" x2="110" y2="174" stroke="currentColor" stroke-width="2" opacity=".14"/>`)},

// ── SEATED CALF RAISE ────────────────────────────────────────────────────
seated_calf_down: {svg: svg('0 0 148 175',
  hd(74,20)+torso(74,34,48)+
  seg(60,38,46,74,7)+seg(46,74,42,108,6)+
  seg(88,38,102,74,7)+seg(102,74,106,108,6)+
  `<rect x="20" y="88" width="110" height="9" rx="4" fill="currentColor" opacity=".2"/>` +
  seg(64,88,48,92,13)+seg(48,92,32,96,12,.8)+
  seg(84,88,100,92,13)+seg(100,92,116,96,12,.8)+
  seg(32,96,28,140,12)+seg(28,140,26,160,10,.8)+foot(26,165)+
  seg(116,96,120,140,12)+seg(120,140,122,160,10,.8)+foot(122,165)+
  dbv(74,80)+`<line x1="12" y1="168" x2="136" y2="168" stroke="currentColor" stroke-width="2" opacity=".14"/>`)},

seated_calf_up: {svg: svg('0 0 148 175',
  hd(74,20)+torso(74,34,48)+
  seg(60,38,46,74,7)+seg(46,74,42,108,6)+
  seg(88,38,102,74,7)+seg(102,74,106,108,6)+
  `<rect x="20" y="88" width="110" height="9" rx="4" fill="currentColor" opacity=".2"/>` +
  seg(64,88,48,92,13)+seg(48,92,32,96,12,.8)+
  seg(84,88,100,92,13)+seg(100,92,116,96,12,.8)+
  seg(32,96,28,136,12)+seg(28,136,30,154,10,.8)+
  `<ellipse cx="36" cy="156" rx="10" ry="5" fill="currentColor" opacity=".84"/>` +
  seg(116,96,120,136,12)+seg(120,136,118,154,10,.8)+
  `<ellipse cx="112" cy="156" rx="10" ry="5" fill="currentColor" opacity=".84"/>` +
  dbv(74,80)+`<line x1="12" y1="162" x2="136" y2="162" stroke="currentColor" stroke-width="2" opacity=".14"/>`)},

// ── OVERHEAD TRICEP EXTENSION ────────────────────────────────────────────
overhead_ext_top: {svg: svg('0 0 120 210',H+T+L()+
  seg(46,44,34,22,7)+seg(34,22,36,4,6)+
  seg(74,44,86,22,7)+seg(86,22,84,4,6)+dbv(60,2))},

overhead_ext_bottom: {svg: svg('0 0 120 210',H+T+L()+
  seg(46,44,32,20,7)+seg(32,20,22,44,6)+
  seg(74,44,88,20,7)+seg(88,20,98,44,6)+dbv(60,50))},

};}();
