// Shared mobile primitives that use the KKday token CSS.
// All of these are mounted to window at file end so other Babel scripts see them.

const KK = {
  teal: '#1ab6c1',
  tealDark: '#13a3b6',
  tealDarker: '#03748a',
  tealLightBg: '#f0fafb',
  ink: '#212121',
  ink2: '#727272',
  ink3: '#9c9da0',
  border: '#d5d6db',
  borderSoft: '#e6e9ed',
  surface: '#f7fafc',
  surface2: '#f1f4f8',
  price: '#ff8f00',
  critical: '#e65f50',
  criticalBg: '#fff2f2',
  info: '#2d84d6',
  infoBg: '#f2faff',
  gold: '#ad7a00',
  goldBg: '#fff8e1',
  font: '"Noto Sans TC", -apple-system, "PingFang TC", system-ui, sans-serif',
};

const Icon = ({ name, size = 24, color, style = {} }) => (
  <img
    src={`assets/icons/${name}.svg`}
    width={size} height={size} alt=""
    style={{
      display: 'block',
      ...(color ? { filter: colorFilter(color) } : {}),
      ...style,
    }}
  />
);

// Rough CSS filter recipes to tint black source SVGs to brand colors.
function colorFilter(c) {
  switch (c) {
    case 'teal':
      return 'brightness(0) saturate(100%) invert(55%) sepia(82%) saturate(500%) hue-rotate(141deg) brightness(94%) contrast(90%)';
    case 'white': return 'brightness(0) invert(1)';
    case 'ink2': return 'brightness(0) saturate(100%) invert(45%)';
    case 'ink3': return 'brightness(0) saturate(100%) invert(65%)';
    case 'gold': return 'brightness(0) saturate(100%) invert(52%) sepia(97%) saturate(474%) hue-rotate(6deg) brightness(98%) contrast(95%)';
    case 'critical': return 'brightness(0) saturate(100%) invert(53%) sepia(56%) saturate(900%) hue-rotate(333deg)';
    default: return undefined;
  }
}

// Destination photos — procedurally generated gradients so we don't need real imagery.
const PHOTOS = {
  // Busan-specific palettes
  haeundae:   'linear-gradient(160deg,#ffd28a 0%,#ff8d4a 35%,#3a5a8a 80%,#1a2a5e 100%)',  // sunset over beach
  seomyeon:   'linear-gradient(180deg,#1a2240 0%,#3a4470 35%,#c33a6e 70%,#ff9a4a 100%)',  // city night
  gamcheon:   'linear-gradient(160deg,#ffd9b8 0%,#f0a070 25%,#7fb8d8 55%,#4a6a90 100%)',  // pastel hillside
  jagalchi:   'linear-gradient(180deg,#a8c8da 0%,#5a7a98 40%,#2a3a55 75%,#1a2030 100%)',  // sea market
  taejongdae: 'linear-gradient(180deg,#7fbacc 0%,#3a8aa8 40%,#1a4a6a 80%,#0a2a40 100%)',  // cliffs
  yongdusan:  'linear-gradient(165deg,#fce088 0%,#ee9a3a 40%,#9a3a55 75%,#2a1a40 100%)',  // tower at dusk
  gwangalli:  'linear-gradient(180deg,#3a2a55 0%,#5a3a8a 30%,#c83a8a 65%,#ff9a3a 100%)',  // bridge night
  gyeongju:   'linear-gradient(160deg,#f0e0a8 0%,#c89a55 40%,#7a4a2a 75%,#3a1f15 100%)',  // ancient
  beomeosa:   'linear-gradient(170deg,#c8d8a8 0%,#7a9a5a 40%,#3a5a2a 75%,#1a3015 100%)',  // temple in green
  yonggungsa: 'linear-gradient(180deg,#a0c8d8 0%,#5a8aa8 35%,#3a5a7a 70%,#c8b878 100%)',  // sea temple
  haedongspa: 'linear-gradient(160deg,#fce0d0 0%,#e8a890 40%,#9a5a78 75%,#2a1a30 100%)',  // spa
  songdo:     'linear-gradient(165deg,#88c8e8 0%,#3a8ac8 40%,#1a4a8a 75%,#0a2a55 100%)',  // skywalk
  cheongsapo: 'linear-gradient(165deg,#ffc8a8 0%,#e88a4a 35%,#a83a3a 70%,#3a1a2a 100%)',  // lighthouse
  bifc:       'linear-gradient(180deg,#1a2a55 0%,#3a4a8a 30%,#8a4a8a 65%,#e8a83a 100%)',  // skyline
  gimhae:     'linear-gradient(165deg,#cfe0ee 0%,#7a98b8 40%,#3a4a78 80%,#1a2a55 100%)',  // airport
  jiufen:  'linear-gradient(135deg,#d0e3f0 0%,#8aa7b8 45%,#4a5e70 100%)',
  teamlab: 'linear-gradient(135deg,#1a0d3a 0%,#4a1878 55%,#c239b3 100%)',
  tokyo:   'linear-gradient(135deg,#ffc27a 0%,#ff6b6b 55%,#2d1b4e 100%)',
  osaka:   'linear-gradient(135deg,#fde0a4 0%,#ea8f4e 45%,#8b3a2a 100%)',
  seoul:   'linear-gradient(135deg,#b6d8e8 0%,#6e8fae 50%,#2f3b5a 100%)',
  bangkok: 'linear-gradient(135deg,#ffd97a 0%,#e78f37 50%,#5b3410 100%)',
  kyoto:   'linear-gradient(135deg,#e8c8d8 0%,#b47a8e 50%,#4a1f2e 100%)',
  hsr:     'linear-gradient(135deg,#e0f0f5 0%,#8ab5c0 50%,#2a4a55 100%)',
  wifi:    'linear-gradient(135deg,#dcdce8 0%,#7a7ea8 50%,#242640 100%)',
  universal:'linear-gradient(135deg,#ffe088 0%,#ee4a54 55%,#1c2a4e 100%)',
  bali:    'linear-gradient(135deg,#c8e8c8 0%,#6ea872 50%,#1f3a25 100%)',
  hongkong:'linear-gradient(135deg,#ffc97a 0%,#c84848 50%,#1a1a2e 100%)',
};

function Photo({ kind, children, style = {}, aspect = '16/10' }) {
  return (
    <div style={{
      aspectRatio: aspect,
      background: PHOTOS[kind] || PHOTOS.jiufen,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      {/* subtle grain for photo feel */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.15), transparent 60%)',
        pointerEvents: 'none',
      }} />
      {children}
    </div>
  );
}

function Badge({ tone = 'teal', children, style = {} }) {
  const map = {
    teal: { bg: KK.tealLightBg, fg: KK.tealDarker },
    critical: { bg: KK.criticalBg, fg: '#d14330' },
    info: { bg: KK.infoBg, fg: '#1565c0' },
    gold: { bg: KK.goldBg, fg: KK.gold },
  };
  const c = map[tone] || map.teal;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      background: c.bg, color: c.fg,
      fontSize: 11, fontWeight: 700, lineHeight: 1,
      padding: '3px 6px', borderRadius: 2,
      ...style,
    }}>{children}</span>
  );
}

function Chip({ active, children, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: active ? KK.tealLightBg : '#fff',
      border: `1px solid ${active ? KK.teal : KK.border}`,
      color: active ? KK.tealDarker : KK.ink,
      fontWeight: active ? 700 : 500,
      fontSize: 13, lineHeight: 1,
      padding: '7px 12px', borderRadius: 2,
      fontFamily: KK.font,
      cursor: 'pointer', whiteSpace: 'nowrap',
    }}>{children}</button>
  );
}

Object.assign(window, { KK, Icon, Photo, Badge, Chip, PHOTOS, colorFilter });
