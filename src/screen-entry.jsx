// Entry / 入境準備 — checklist + Gimhae airport transport guide

const ENTRY_CHECK_KEY = 'busan-trip:entry-checklist';
const ENTRY_CHECK_DEFAULT = {
  keta: false, eCustoms: false, krw: false, sim: false,
  naver: false, kakao: false, papago: false, tmoney: false,
};

function EntryScreen({ onBack }) {
  const [checked, setChecked] = React.useState(() => {
    try {
      const raw = window.localStorage.getItem(ENTRY_CHECK_KEY);
      if (raw) return { ...ENTRY_CHECK_DEFAULT, ...JSON.parse(raw) };
    } catch (e) {}
    return ENTRY_CHECK_DEFAULT;
  });
  React.useEffect(() => {
    try {
      window.localStorage.setItem(ENTRY_CHECK_KEY, JSON.stringify(checked));
    } catch (e) {}
  }, [checked]);
  const toggle = (k) => setChecked(s => ({ ...s, [k]: !s[k] }));

  const checklist = [
    { k: 'keta', t: 'K-ETA 電子旅行許可', sub: '台灣護照 2025–2026 暫時免申請，出發前到 k-eta.go.kr 再確認一次', tone: 'critical', icon: 'ic_warning_circle_fill', tag: '出發前 72h' },
    { k: 'eCustoms', t: '線上海關申報 e-CD', sub: '在 customs.go.kr 填表拿 QR，落地後快速通關', tone: 'info', icon: 'ic_check_circle_line', tag: '可選' },
    { k: 'krw', t: '韓元現金 ₩100,000 起跳', sub: '台幣兌韓元先換一半，現場 ATM 用 Visa 卡也行', tone: 'gold', icon: 'ic_coupon_color', tag: '建議' },
    { k: 'sim', t: '上網 SIM / eSIM / WiFi 蛋', sub: '8 天約 NT$ 300–450，eSIM 落地直接開，免換卡', tone: 'teal', icon: 'ic_globe_fill' },
    { k: 'tmoney', t: 'T-money 交通卡', sub: '機場 / 便利店 ₩4,000 + 儲值，地鐵 公車 計程車 通用', tone: 'teal', icon: 'ic_train_line' },
    { k: 'naver', t: '下載 Naver Map', sub: 'Google Map 在韓國不準，Naver / Kakao Map 才是本地神器', tone: 'teal', icon: 'ic_map_fill' },
    { k: 'kakao', t: '下載 Kakao T', sub: '韓國的 Uber，計程車叫車 + 顯示金額不被繞路', tone: 'teal', icon: 'ic_car_line' },
    { k: 'papago', t: '下載 Papago 翻譯', sub: 'NAVER 出品，中韓互譯比 Google 強，拍照即時翻譯', tone: 'teal', icon: 'ic_language_line' },
  ];

  const doneCount = Object.values(checked).filter(Boolean).length;
  const progress = (doneCount / checklist.length) * 100;

  return (
    <div style={{ background: KK.surface, minHeight: '100%', paddingBottom: 100, fontFamily: KK.font }}>
      {/* Top header */}
      <div style={{
        background: KK.teal, color: '#fff',
        padding: '14px 16px 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div onClick={onBack} style={{ cursor: 'pointer' }}>
            <Icon name="ic_arrow_left_line" size={22} color="white" />
          </div>
          <div style={{ flex: 1 }} />
          <Icon name="ic_share_ios_line" size={20} color="white" />
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', opacity: 0.85, fontWeight: 500 }}>STEP 1 · FIRST-TIME KOREA</div>
        <div style={{ fontSize: 26, fontWeight: 900, marginTop: 4, letterSpacing: '-0.02em' }}>入境韓國準備</div>
        <div style={{ fontSize: 13, opacity: 0.92, marginTop: 4 }}>第一次去韓國最容易踩雷的 8 件事</div>

        {/* progress */}
        <div style={{ marginTop: 16, background: 'rgba(255,255,255,0.18)', borderRadius: 999, height: 8, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: '#fff', borderRadius: 999, transition: 'width .3s ease' }} />
        </div>
        <div style={{ fontSize: 12, marginTop: 6, opacity: 0.9 }}>已完成 {doneCount} / {checklist.length} 項</div>
      </div>

      {/* Checklist */}
      <div style={{ margin: '12px 12px 0', background: '#fff', borderRadius: 8 }}>
        {checklist.map((c, i) => (
          <div key={c.k} onClick={() => toggle(c.k)} style={{
            display: 'flex', gap: 12, padding: '14px 14px',
            borderBottom: i < checklist.length - 1 ? `1px solid ${KK.borderSoft}` : 0,
            cursor: 'pointer', alignItems: 'flex-start',
          }}>
            {/* checkbox */}
            <div style={{
              width: 22, height: 22, borderRadius: 6, marginTop: 1,
              background: checked[c.k] ? KK.teal : '#fff',
              border: `1.5px solid ${checked[c.k] ? KK.teal : KK.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {checked[c.k] && <Icon name="ic_check_line_semibold" size={14} color="white" />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 14, fontWeight: 700, color: KK.ink,
                  textDecoration: checked[c.k] ? 'line-through' : 'none',
                  opacity: checked[c.k] ? 0.5 : 1,
                }}>{c.t}</span>
                {c.tag && <Badge tone={c.tone}>{c.tag}</Badge>}
              </div>
              <div style={{ fontSize: 12, color: KK.ink2, marginTop: 4, lineHeight: '17px', opacity: checked[c.k] ? 0.5 : 1 }}>{c.sub}</div>
            </div>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: KK.tealLightBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon name={c.icon} size={18} color={c.tone === 'critical' ? 'critical' : (c.tone === 'gold' ? 'gold' : 'teal')} />
            </div>
          </div>
        ))}
      </div>

      {/* 落地流程 step list */}
      <div style={{ margin: '20px 12px 0' }}>
        <div style={{ fontSize: 11, color: KK.ink2, fontWeight: 700, letterSpacing: '0.08em', margin: '0 4px 8px' }}>抵達金海機場 · 流程</div>
        <div style={{ background: '#fff', borderRadius: 8, padding: 16 }}>
          {[
            ['1', '入境審查', '排「Foreigner」線 · 採指紋 + 拍照 · 約 20–40 分'],
            ['2', '提領行李', '看顯示板找航班 · 韓國行李轉盤通常很快'],
            ['3', '海關通關', '如有預填 e-CD 走 QR 通道 · 否則走綠線（無申報）'],
            ['4', '機場 1 樓出境', '右手邊有 SIM / WiFi 蛋自取櫃台 + 換錢所'],
            ['5', '輕軌 / 巴士 / 計程車', '見下方交通圖比較'],
          ].map(([n, t, s], i) => (
            <div key={n} style={{ display: 'flex', gap: 12, paddingBottom: i === 4 ? 0 : 14 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 999,
                background: KK.tealLightBg, color: KK.tealDarker,
                fontSize: 13, fontWeight: 900,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink }}>{t}</div>
                <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2, lineHeight: '16px' }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 機場交通比較 */}
      <div style={{ margin: '20px 12px 0' }}>
        <div style={{ fontSize: 11, color: KK.ink2, fontWeight: 700, letterSpacing: '0.08em', margin: '0 4px 8px' }}>金海 → 海雲台 · 三種選擇</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            {
              icon: 'ic_train_line', mode: '輕軌 + 地鐵 (推薦)',
              time: '約 65 分', cost: '₩1,600',
              path: 'PUS輕軌 → 沙上(2號線) → 海雲台',
              tone: 'teal', best: 'CP 值首選',
            },
            {
              icon: 'ic_bus_line', mode: '機場利木津巴士',
              time: '約 50 分', cost: '₩10,000',
              path: 'Gimhae → 海雲台 (1009 號)',
              tone: 'info', best: '行李多',
            },
            {
              icon: 'ic_car_line', mode: '計程車 / Kakao T',
              time: '約 40 分', cost: '₩35,000+',
              path: '機場直達飯店',
              tone: 'gold', best: '深夜抵達',
            },
          ].map((o, i) => (
            <div key={o.mode} style={{
              background: '#fff', borderRadius: 8, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 1px 4px rgba(38,50,56,0.08)',
              borderLeft: `3px solid ${o.tone === 'teal' ? KK.teal : (o.tone === 'info' ? KK.info : '#ad7a00')}`,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                background: KK.tealLightBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon name={o.icon} size={22} color={o.tone === 'gold' ? 'gold' : 'teal'} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink }}>{o.mode}</div>
                  <Badge tone={o.tone}>{o.best}</Badge>
                </div>
                <div style={{ fontSize: 11, color: KK.ink2, marginTop: 3 }}>{o.path}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: KK.price }}>{o.cost}</div>
                <div style={{ fontSize: 10, color: KK.ink2 }}>{o.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 重要小提醒 */}
      <div style={{ margin: '20px 12px 0' }}>
        <div style={{ fontSize: 11, color: KK.ink2, fontWeight: 700, letterSpacing: '0.08em', margin: '0 4px 8px' }}>幾個容易踩雷的小提醒</div>
        <div style={{ background: '#fff', borderRadius: 8 }}>
          {[
            ['⛔', '不可帶肉製品入境', '貢丸、肉乾、泡麵調理包含肉粉都會被扣，被抓罰金最高 ₩10,000,000'],
            ['💳', '小店一定要先問能不能刷卡', '釜山部分傳統市場、路邊攤只收現金'],
            ['🚇', '地鐵末班約 23:30 收車', '搭末班前一站下車比較不擠'],
            ['🍶', '免稅店一人 ₩800 USD 上限', '酒類 2 瓶以下 (合計 2L 以下) / 香菸 200 支以下'],
            ['💧', '冷水水龍頭直接喝沒問題', '韓國自來水可生飲，餐廳常會給冰水'],
            ['💸', '退稅有兩種', '即時退稅當場退 / 機場退稅出境前找 KIOSK 蓋章'],
          ].map(([e, t, s], i, arr) => (
            <div key={t} style={{ display: 'flex', gap: 12, padding: '12px 14px', borderBottom: i < arr.length - 1 ? `1px solid ${KK.borderSoft}` : 0 }}>
              <div style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{e}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink }}>{t}</div>
                <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2, lineHeight: '16px' }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EntryScreen });
