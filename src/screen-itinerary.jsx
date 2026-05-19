// Itinerary / 行程 — list of days + day detail with timeline

function ItineraryScreen({ onOpenDay, onBack }) {
  return (
    <div style={{ background: KK.surface, minHeight: '100%', paddingBottom: 100, fontFamily: KK.font }}>
      {/* Header */}
      <div style={{
        background: '#fff',
        padding: '14px 16px 14px',
        position: 'relative',
        borderBottom: `1px solid ${KK.borderSoft}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div onClick={onBack} style={{ cursor: 'pointer' }}>
            <Icon name="ic_arrow_left_line" size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: KK.ink2, letterSpacing: '0.08em', fontWeight: 500 }}>釜山行 · 7/28 – 8/04</div>
            <div style={{ fontSize: 19, fontWeight: 900, color: KK.ink, letterSpacing: '-0.02em', marginTop: 1 }}>逐日行程</div>
          </div>
          <Icon name="ic_map_line" size={20} color="ink2" />
          <Icon name="ic_filter_line" size={20} color="ink2" />
        </div>
      </div>

      {/* Summary band */}
      <div style={{ display: 'flex', gap: 8, padding: '14px 16px 6px' }}>
        <SummaryStat l="總天數" v={String(DAYS.length)} u="天" />
        <SummaryStat l="景點數" v={String(DAYS.reduce((s, d) => s + d.stops.length, 0))} u="站" />
        <SummaryStat l="換飯店" v={String(DAYS.filter(d => d.kind === 'transfer').length)} u="次" />
        <SummaryStat l="飯店" v="2" u="家" />
      </div>

      {/* timeline of days */}
      <div style={{ padding: '6px 16px 0' }}>
        {DAYS.map((d, idx) => (
          <div key={d.n} onClick={() => onOpenDay(d.n)} style={{ display: 'flex', gap: 12, cursor: 'pointer' }}>
            {/* spine */}
            <div style={{ width: 28, position: 'relative', flexShrink: 0 }}>
              {idx > 0 && <div style={{ position: 'absolute', left: 13, top: 0, height: 16, width: 2, background: KK.borderSoft }} />}
              <div style={{
                position: 'absolute', left: 0, top: 14,
                width: 28, height: 28, borderRadius: 999,
                background: d.kind === 'arrival' || d.kind === 'departure' ? KK.tealDarker : (d.kind === 'daytrip' ? '#c8a13a' : (d.kind === 'transfer' ? '#9a5a78' : KK.teal)),
                color: '#fff', fontWeight: 900, fontSize: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 1,
              }}>{d.n}</div>
              {idx < DAYS.length - 1 && <div style={{ position: 'absolute', left: 13, top: 42, bottom: 0, width: 2, background: KK.borderSoft }} />}
            </div>

            {/* card */}
            <div style={{ flex: 1, paddingBottom: 16 }}>
              <div style={{
                background: '#fff', borderRadius: 8, overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(38,50,56,0.12)',
              }}>
                <Photo kind={d.photo} aspect="16/8">
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.5) 100%)' }} />
                  <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
                    <div style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 2 }}>DAY {d.n} · {d.date} ({d.dow})</div>
                    {d.kind === 'arrival' && <Badge tone="info">抵達</Badge>}
                    {d.kind === 'departure' && <Badge tone="critical">回程</Badge>}
                    {d.kind === 'daytrip' && <Badge tone="gold">小旅行</Badge>}
                    {d.kind === 'transfer' && <Badge tone="critical">換飯店</Badge>}
                  </div>
                  <div style={{ position: 'absolute', left: 10, right: 10, bottom: 8, color: '#fff' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: '20px' }}>{d.title}</div>
                  </div>
                </Photo>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: 12, color: KK.ink2, lineHeight: '17px' }}>{d.summary}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8, fontSize: 11, color: KK.ink2 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      <Icon name="ic_location_line" size={12} color="ink2" />
                      {d.base}
                    </span>
                    <span>·</span>
                    <span>{d.weather}</span>
                    <span style={{ flex: 1 }} />
                    <span style={{ color: KK.tealDarker, fontWeight: 700 }}>看詳細 →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SummaryStat({ l, v, u }) {
  return (
    <div style={{
      flex: 1, background: '#fff', borderRadius: 8, padding: '10px 8px',
      boxShadow: '0 1px 4px rgba(38,50,56,0.08)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 10, color: KK.ink2, fontWeight: 500 }}>{l}</div>
      <div style={{ marginTop: 2 }}>
        <span style={{ fontSize: 22, fontWeight: 900, color: KK.ink, letterSpacing: '-0.02em' }}>{v}</span>
        <span style={{ fontSize: 11, color: KK.ink2, marginLeft: 2 }}>{u}</span>
      </div>
    </div>
  );
}

// =================================================================== DAY DETAIL

function DayDetailScreen({ dayN, onBack, onPrev, onNext }) {
  const d = DAYS.find(x => x.n === dayN) || DAYS[0];
  return (
    <div style={{ background: KK.surface, minHeight: '100%', paddingBottom: 110, fontFamily: KK.font }}>
      {/* Hero photo */}
      <Photo kind={d.photo} aspect="16/11">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.6) 100%)' }} />
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', alignItems: 'center' }}>
          <button onClick={onBack} style={btnRound2}><Icon name="ic_arrow_left_line" size={20} /></button>
          <div style={{ flex: 1 }} />
          <button style={{ ...btnRound2, marginRight: 8 }}><Icon name="ic_map_line" size={20} /></button>
          <button style={btnRound2}><Icon name="ic_share_ios_line" size={18} /></button>
        </div>
        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)',
              padding: '3px 8px', borderRadius: 2, fontSize: 11, letterSpacing: '0.08em', fontWeight: 700,
            }}>DAY {d.n}</div>
            <div style={{ fontSize: 12, opacity: 0.9 }}>{d.date} ({d.dow}) · {d.base}</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8, letterSpacing: '-0.02em', lineHeight: '28px' }}>{d.title}</div>
        </div>
      </Photo>

      {/* Quick stats */}
      <div style={{ margin: '12px 12px 0', background: '#fff', borderRadius: 8, padding: 12, display: 'flex', gap: 10 }}>
        <Stat3 i="ic_sun_line" l="天氣" v={d.weather} />
        <div style={{ width: 1, background: KK.borderSoft }} />
        <Stat3 i="ic_location_line" l="駐點" v={d.base} />
        <div style={{ width: 1, background: KK.borderSoft }} />
        <Stat3 i="ic_clock_line" l="站數" v={`${d.stops.length} 站`} />
      </div>

      {/* Summary band */}
      <div style={{ margin: '12px 12px 0', background: KK.tealLightBg, borderRadius: 8, padding: 14, display: 'flex', gap: 12 }}>
        <Icon name="ic_info_fill" size={20} color="teal" />
        <div style={{ flex: 1, fontSize: 12, color: KK.tealDarker, lineHeight: '18px' }}>{d.summary}</div>
      </div>

      {/* Timeline */}
      <div style={{ margin: '12px 12px 0', background: '#fff', borderRadius: 8, padding: '14px 14px 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink }}>當日行程</div>
          <div style={{ fontSize: 12, color: KK.tealDarker, fontWeight: 500 }}>顯示地圖</div>
        </div>
        {d.stops.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 12 }}>
            <div style={{ width: 32, position: 'relative', flexShrink: 0 }}>
              <div style={{ position: 'absolute', left: 15, top: 0, bottom: 0, width: 2, background: KK.borderSoft }} />
              <div style={{
                position: 'relative', zIndex: 1, width: 32, height: 32,
                borderRadius: 999,
                background: s.highlight ? KK.teal : KK.tealLightBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={s.icon} size={16} color={s.highlight ? 'white' : 'teal'} />
              </div>
            </div>
            <div style={{ flex: 1, paddingBottom: i < d.stops.length - 1 ? 18 : 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, color: KK.ink2, fontWeight: 700, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>{s.t}</span>
                {s.tag && <Badge tone={s.highlight ? 'teal' : 'gold'}>{s.tag}</Badge>}
                {s.highlight && !s.tag && <Badge tone="teal">必去</Badge>}
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: KK.ink, marginTop: 4, lineHeight: '20px' }}>{s.name}</div>
              <div style={{ fontSize: 12, color: KK.ink2, marginTop: 3, lineHeight: '17px' }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Next-day preview */}
      <div style={{
        margin: '12px 12px 0',
        display: 'flex', gap: 8,
      }}>
        {dayN > 1 && (
          <div onClick={onPrev} style={{
            flex: 1, background: '#fff', borderRadius: 8, padding: '12px 14px',
            boxShadow: '0 1px 4px rgba(38,50,56,0.08)', cursor: 'pointer',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: KK.ink2, fontSize: 11 }}>
              <Icon name="ic_arrow_left_line" size={12} color="ink2" />
              <span>前一天</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink, marginTop: 4 }}>Day {dayN - 1}</div>
            <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2, lineHeight: '15px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {(DAYS.find(x => x.n === dayN - 1) || {}).title}
            </div>
          </div>
        )}
        {dayN < DAYS.length && (
          <div onClick={onNext} style={{
            flex: 1, background: '#fff', borderRadius: 8, padding: '12px 14px',
            boxShadow: '0 1px 4px rgba(38,50,56,0.08)', cursor: 'pointer',
            textAlign: 'right',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: KK.ink2, fontSize: 11, justifyContent: 'flex-end' }}>
              <span>下一天</span>
              <Icon name="ic_arrow_right_line" size={12} color="ink2" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink, marginTop: 4 }}>Day {dayN + 1}</div>
            <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2, lineHeight: '15px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {(DAYS.find(x => x.n === dayN + 1) || {}).title}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat3({ i, l, v }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Icon name={i} size={16} color="teal" />
      <div style={{ fontSize: 10, color: KK.ink2, marginTop: 2 }}>{l}</div>
      <div style={{ fontSize: 12, fontWeight: 700, color: KK.ink }}>{v}</div>
    </div>
  );
}

const btnRound2 = {
  width: 36, height: 36, borderRadius: 999,
  background: 'rgba(255,255,255,0.92)', border: 0,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer',
};

Object.assign(window, { ItineraryScreen, DayDetailScreen });
