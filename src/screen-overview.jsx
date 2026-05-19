// Trip Overview screen — countdown, hotels, day grid

function OverviewScreen({ onOpenDay, onOpenEntry, onOpenItinerary, onOpenTips }) {
  // Trip starts 2026-07-28. Faux "today" for prototype = 2026-07-22 (T-6).
  const daysToGo = 6;

  return (
    <div style={{ background: KK.surface, minHeight: '100%', paddingBottom: 100, fontFamily: KK.font }}>

      {/* Teal hero header with countdown */}
      <div style={{
        background: `linear-gradient(160deg, ${KK.teal} 0%, ${KK.tealDarker} 100%)`,
        padding: '14px 16px 22px',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative arch */}
        <div style={{
          position: 'absolute', right: -60, top: -40,
          width: 220, height: 220, borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
        }} />
        <div style={{
          position: 'absolute', right: 20, top: 30,
          width: 100, height: 100, borderRadius: 999,
          background: 'rgba(255,255,255,0.06)',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, position: 'relative' }}>
          <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', opacity: 0.9 }}>
            我的旅程
          </div>
          <div style={{ flex: 1 }} />
          <Icon name="ic_bell_line" size={20} color="white" />
          <Icon name="ic_person_line" size={20} color="white" />
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.12em', opacity: 0.85, fontWeight: 500 }}>UPCOMING · 即將出發</div>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 6, lineHeight: 1 }}>
            釜山行 <span style={{ fontSize: 22, fontWeight: 500, opacity: 0.85 }}>부산</span>
          </div>
          <div style={{ fontSize: 13, marginTop: 8, opacity: 0.92, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>7/28 (一)</span>
            <Icon name="ic_arrow_right_line" size={12} color="white" style={{ opacity: 0.85 }} />
            <span>8/04 (二)</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>8 天 7 夜 · 初訪韓國</span>
          </div>

          {/* countdown chips */}
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <div style={{
              background: 'rgba(255,255,255,0.16)',
              borderRadius: 8, padding: '10px 14px',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{ fontSize: 10, opacity: 0.85, letterSpacing: '0.05em' }}>COUNTDOWN</div>
              <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1, marginTop: 2 }}>
                {daysToGo}<span style={{ fontSize: 13, fontWeight: 500, marginLeft: 4, opacity: 0.85 }}>天</span>
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.16)',
              borderRadius: 8, padding: '10px 14px',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{ fontSize: 10, opacity: 0.85, letterSpacing: '0.05em' }}>FLIGHT</div>
              <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1, marginTop: 4 }}>TPE → PUS</div>
              <div style={{ fontSize: 10, opacity: 0.85, marginTop: 2 }}>KE2086 · 12:00</div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.16)',
              borderRadius: 8, padding: '10px 14px',
              backdropFilter: 'blur(4px)', flex: 1,
            }}>
              <div style={{ fontSize: 10, opacity: 0.85, letterSpacing: '0.05em' }}>WEATHER</div>
              <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1, marginTop: 4 }}>☀ 30° / 25°</div>
              <div style={{ fontSize: 10, opacity: 0.85, marginTop: 2 }}>悶熱 · 偶陣雨</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ margin: '-12px 12px 0', background: '#fff', borderRadius: 12, padding: '14px 8px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, boxShadow: '0 2px 24px rgba(38,50,56,0.12)' }}>
        {[
          { i: 'ic_check_circle_line', l: '入境準備', c: 'teal', sub: '6 件', onClick: onOpenEntry },
          { i: 'ic_calendar_line', l: '逐日行程', c: 'teal', sub: '8 天', onClick: onOpenItinerary },
          { i: 'ic_utensils_line', l: '必吃美食', c: 'teal', sub: '12 樣', onClick: onOpenTips },
          { i: 'ic_train_line', l: '交通攻略', c: 'teal', sub: '看圖', onClick: onOpenTips },
        ].map(a => (
          <div key={a.l} onClick={a.onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '6px 4px', cursor: 'pointer' }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: KK.tealLightBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={a.i} size={22} color="teal" />
            </div>
            <div style={{ fontSize: 12, color: KK.ink, fontWeight: 700 }}>{a.l}</div>
            <div style={{ fontSize: 10, color: KK.ink3 }}>{a.sub}</div>
          </div>
        ))}
      </div>

      {/* Hotels strip */}
      <div style={{ margin: '20px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="ic_inn_fill" size={18} color="teal" />
          <div style={{ fontSize: 17, fontWeight: 700, color: KK.ink }}>住宿安排</div>
        </div>
        <div style={{ fontSize: 12, color: KK.tealDarker, fontWeight: 500 }}>地圖 →</div>
      </div>
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {HOTELS.map((h, i) => (
          <a
            key={h.id}
            href={h.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fff', borderRadius: 8, overflow: 'hidden',
              boxShadow: '0 1px 4px rgba(38,50,56,0.12)',
              display: 'flex', minHeight: 96,
              textDecoration: 'none', color: 'inherit',
            }}
          >
            <div style={{ width: 96, flexShrink: 0, position: 'relative' }}>
              <Photo kind={h.photo} aspect="auto" style={{ height: '100%' }}>
                <div style={{ position: 'absolute', top: 6, left: 6, background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 6px', borderRadius: 2 }}>STAY {i + 1}</div>
              </Photo>
            </div>
            <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 6 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>{h.name}</div>
                <Badge tone="teal">{h.tag}</Badge>
              </div>
              <div style={{ fontSize: 12, color: KK.ink2, marginTop: 3, lineHeight: '17px' }}>{h.nearest}</div>
              <div style={{ flex: 1 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6, fontSize: 12 }}>
                <span style={{ color: KK.ink2 }}>{h.checkIn} <span style={{ opacity: 0.5 }}>→</span> {h.checkOut}</span>
                <span style={{ color: KK.ink, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {h.nights} 晚
                  <Icon name="ic_arrow_right_line" size={12} color="ink2" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Day grid */}
      <div style={{ margin: '22px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="ic_calendar_fill" size={18} color="teal" />
          <div style={{ fontSize: 17, fontWeight: 700, color: KK.ink }}>每日重點</div>
        </div>
        <div onClick={onOpenItinerary} style={{ fontSize: 12, color: KK.tealDarker, fontWeight: 500, cursor: 'pointer' }}>看全部 →</div>
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {DAYS.map(d => (
          <div key={d.n} onClick={() => onOpenDay(d.n)} style={{
            background: '#fff', borderRadius: 8, padding: '12px 12px 12px 0',
            boxShadow: '0 1px 4px rgba(38,50,56,0.12)',
            display: 'flex', alignItems: 'stretch', gap: 12, cursor: 'pointer',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* left date column */}
            <div style={{
              width: 64, flexShrink: 0,
              background: `linear-gradient(180deg, ${d.kind === 'arrival' || d.kind === 'departure' ? KK.tealDarker : (d.kind === 'daytrip' ? '#c8a13a' : (d.kind === 'transfer' ? '#9a5a78' : KK.teal))} 0%, rgba(0,0,0,0.1) 100%)`,
              color: '#fff', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', padding: '8px 0',
            }}>
              <div style={{ fontSize: 9, opacity: 0.85, letterSpacing: '0.1em' }}>DAY</div>
              <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1, marginTop: 2 }}>{d.n}</div>
              <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>{d.date}</div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>({d.dow})</div>
            </div>
            <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>{d.title}</span>
                {d.kind === 'arrival' && <Badge tone="info">抵達</Badge>}
                {d.kind === 'departure' && <Badge tone="critical">回程</Badge>}
                {d.kind === 'daytrip' && <Badge tone="gold">小旅行</Badge>}
                {d.kind === 'transfer' && <Badge tone="critical">換飯店</Badge>}
              </div>
              <div style={{ fontSize: 11, color: KK.ink3, marginTop: 4, lineHeight: '15px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{d.summary}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, fontSize: 11, color: KK.ink2 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  <Icon name="ic_location_line" size={12} color="ink2" />
                  {d.base}
                </span>
                <span>·</span>
                <span>{d.weather}</span>
                <span>·</span>
                <span style={{ color: KK.tealDarker, fontWeight: 700 }}>{d.stops.length} 站</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trip notes / safety card */}
      <div style={{ margin: '22px 16px 0', background: KK.goldBg, borderRadius: 8, padding: 14, display: 'flex', gap: 12 }}>
        <Icon name="ic_warning_triangle_line" size={22} color="gold" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: KK.gold }}>出發前 3 天提醒</div>
          <ul style={{ fontSize: 12, color: KK.ink2, margin: '6px 0 0', paddingLeft: 16, lineHeight: '18px' }}>
            <li>確認 K-ETA 是否需要申請（2026年起規則查詢中）</li>
            <li>線上預辦海關申報 QR (e-CD)</li>
            <li>準備韓元現金 ₩100,000 + 信用卡</li>
            <li>下載 Naver Map · Papago · Kakao T 三神器</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

Object.assign(window, { OverviewScreen });
