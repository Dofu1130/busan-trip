// Tips / 攻略 — must-eat, useful phrases, shopping, transport reference

function TipsScreen({ onBack }) {
  const [tab, setTab] = React.useState('food');

  return (
    <div style={{ background: KK.surface, minHeight: '100%', paddingBottom: 100, fontFamily: KK.font }}>
      {/* Header */}
      <div style={{
        background: '#fff',
        padding: '14px 16px',
        borderBottom: `1px solid ${KK.borderSoft}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {onBack && <div onClick={onBack} style={{ cursor: 'pointer' }}><Icon name="ic_arrow_left_line" size={22} /></div>}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: KK.ink2, letterSpacing: '0.08em', fontWeight: 500 }}>第一次去韓國</div>
            <div style={{ fontSize: 19, fontWeight: 900, color: KK.ink, letterSpacing: '-0.02em', marginTop: 1 }}>釜山攻略</div>
          </div>
          <Icon name="ic_heart_line" size={20} color="ink2" />
        </div>

        {/* tabs */}
        <div style={{ display: 'flex', gap: 4, marginTop: 12, overflowX: 'auto' }}>
          {[
            ['food', '美食', 'ic_utensils_line'],
            ['phrases', '會話', 'ic_language_line'],
            ['transport', '交通', 'ic_train_line'],
            ['shopping', '購物', 'ic_store_fill'],
          ].map(([k, l, ico]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              background: tab === k ? KK.teal : '#fff',
              color: tab === k ? '#fff' : KK.ink2,
              border: `1px solid ${tab === k ? KK.teal : KK.border}`,
              fontFamily: KK.font,
              fontSize: 13, fontWeight: tab === k ? 700 : 500,
              padding: '7px 12px', borderRadius: 999,
              display: 'flex', alignItems: 'center', gap: 5,
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}>
              <Icon name={ico} size={14} color={tab === k ? 'white' : 'ink2'} />
              {l}
            </button>
          ))}
        </div>
      </div>

      {tab === 'food' && <FoodTab />}
      {tab === 'phrases' && <PhrasesTab />}
      {tab === 'transport' && <TransportTab />}
      {tab === 'shopping' && <ShoppingTab />}
    </div>
  );
}

// =================================================================== FOOD

function FoodTab() {
  const items = [
    { k: 'pork',  ko: '돼지국밥', cn: '豬肉湯飯', loc: '西面 · 田浦', price: '₩9,000', emoji: '🍲', desc: '釜山代表平民料理，白米泡進濃郁豬骨湯，配蝦醬、洋蔥、辣椒', tag: '釜山限定', tone: 'critical' },
    { k: 'milmyeon', ko: '밀면', cn: '麥麵 (冷麵)', loc: '南浦 · 海雲台', price: '₩8,000', emoji: '🍜', desc: '釜山版冷麵，冰涼酸甜湯底配麥麵條，夏天救命', tag: '釜山限定', tone: 'critical' },
    { k: 'eomuk', ko: '어묵', cn: '甘川魚糕', loc: '札嘎其 · BIFF', price: '₩2,000', emoji: '🍢', desc: '街邊一根支 50 元台幣的暖心點心，湯免費續', tag: '街邊', tone: 'gold' },
    { k: 'crab',  ko: '대게', cn: '帝王蟹/雪蟹', loc: '機張 · 札嘎其', price: '₩90,000起', emoji: '🦀', desc: '8 月正值產季，機張市場一條街都在賣', tag: '貴但值', tone: 'critical' },
    { k: 'sundae', ko: '순대국밥', cn: '米腸湯飯', loc: '西面 · 田浦', price: '₩9,000', emoji: '🥘', desc: '韓國血腸 + 內臟泡湯，下酒一絕', tag: '挑食慎', tone: 'gold' },
    { k: 'samgye', ko: '삼계탕', cn: '蔘雞湯', loc: '海雲台 · 西面', price: '₩16,000', emoji: '🍗', desc: '夏天三伏天就吃這個，整隻雞燉糯米人蔘', tag: '夏天必', tone: 'teal' },
    { k: 'bbq',   ko: '삼겹살', cn: '韓式烤五花', loc: '西面 · 田浦', price: '₩14,000/人', emoji: '🥩', desc: '韓國最日常的聚餐，五花包生菜佐烤泡菜', tag: '聚餐', tone: 'teal' },
    { k: 'ssiat', ko: '씨앗호떡', cn: '種子糖餅', loc: 'BIFF廣場', price: '₩2,000', emoji: '🥞', desc: '南浦洞 BIFF 名物，現煎熱餅塞滿堅果黑糖', tag: 'BIFF', tone: 'gold' },
    { k: 'cafe',  ko: '카페', cn: '田浦咖啡', loc: '田浦', price: '₩6,000', emoji: '☕', desc: 'CNN 票選亞洲必去咖啡街，工業風韓系老店成排', tag: 'IG打卡', tone: 'info' },
    { k: 'fish',  ko: '회', cn: '生魚片', loc: '札嘎其 · 機張', price: '₩40,000/盤', emoji: '🐟', desc: '札嘎其市場一樓選魚，二樓店家現切現吃，自帶醬料區', tag: '海港', tone: 'info' },
    { k: 'bingsu', ko: '빙수', cn: '紅豆刨冰', loc: 'Centum City', price: '₩10,000', emoji: '🍧', desc: '雪花冰加紅豆煉乳，雪冰連鎖店穩定好吃', tag: '消暑', tone: 'info' },
    { k: 'chimaek', ko: '치맥', cn: '炸雞 + 啤酒', loc: '廣安里 · 海雲台', price: '₩22,000', emoji: '🍺', desc: '看橋邊夜景配啤酒炸雞，韓劇打卡必備', tag: '夜景配', tone: 'critical' },
  ];

  return (
    <div style={{ padding: '12px 12px' }}>
      <div style={{
        background: KK.criticalBg, borderRadius: 8, padding: '10px 12px',
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
      }}>
        <Icon name="ic_fire_fill" size={18} color="critical" />
        <div style={{ fontSize: 12, color: '#d14330', fontWeight: 500, lineHeight: '17px' }}>
          按釜山在地代表性排序 · <strong>豬肉湯飯</strong> 跟 <strong>麥麵</strong> 是釜山限定，回首爾吃不到一樣的味道
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {items.map(f => (
          <div key={f.k} style={{
            background: '#fff', borderRadius: 8, padding: '12px 12px 12px',
            boxShadow: '0 1px 4px rgba(38,50,56,0.08)',
          }}>
            <div style={{
              fontSize: 38, lineHeight: 1, marginBottom: 6,
            }}>{f.emoji}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>{f.cn}</span>
            </div>
            <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2 }}>{f.ko} · {f.loc}</div>
            <div style={{ fontSize: 11, color: KK.ink, marginTop: 6, lineHeight: '15px', minHeight: 45 }}>{f.desc}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
              <Badge tone={f.tone}>{f.tag}</Badge>
              <span style={{ fontSize: 12, fontWeight: 700, color: KK.price }}>{f.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =================================================================== PHRASES

function PhrasesTab() {
  const [speakingKey, setSpeakingKey] = React.useState(null);

  const speakKorean = (text, key) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('此瀏覽器不支援語音合成 · 請改用 Chrome / Safari');
      return;
    }
    // Cancel anything currently speaking before starting new utterance
    window.speechSynthesis.cancel();
    // Use only the first form when phrase has "A / B" alternates
    const spoken = text.split('/')[0].trim();
    const u = new SpeechSynthesisUtterance(spoken);
    u.lang = 'ko-KR';
    u.rate = 0.85;
    u.onend = () => setSpeakingKey(null);
    u.onerror = () => setSpeakingKey(null);
    setSpeakingKey(key);
    window.speechSynthesis.speak(u);
  };

  const groups = [
    {
      group: '基本招呼',
      items: [
        ['안녕하세요', 'an-nyeong-ha-se-yo', '你好'],
        ['감사합니다', 'gam-sa-ham-ni-da', '謝謝'],
        ['죄송합니다', 'joe-song-ham-ni-da', '對不起'],
        ['네 / 아니요', 'ne / a-ni-yo', '是 / 不是'],
      ],
    },
    {
      group: '吃飯結帳',
      items: [
        ['이거 주세요', 'i-geo ju-se-yo', '我要這個 (指菜單)'],
        ['맛있어요!', 'mas-i-sseo-yo', '好吃！'],
        ['매워요?', 'mae-wo-yo', '會辣嗎？'],
        ['계산해 주세요', 'gye-san-hae ju-se-yo', '結帳'],
        ['카드 돼요?', 'ka-deu dwae-yo', '可以刷卡嗎？'],
        ['포장이요', 'po-jang-i-yo', '外帶'],
      ],
    },
    {
      group: '交通購物',
      items: [
        ['해운대역까지 가주세요', 'hae-un-dae-yeok-kka-ji ga-ju-se-yo', '請開到海雲台站'],
        ['얼마예요?', 'eol-ma-ye-yo', '多少錢？'],
        ['좀 깎아주세요', 'jom kkak-ka-ju-se-yo', '便宜一點啦'],
        ['화장실 어디예요?', 'hwa-jang-sil eo-di-ye-yo', '廁所在哪裡？'],
      ],
    },
    {
      group: '緊急狀況',
      items: [
        ['도와주세요!', 'do-wa-ju-se-yo', '請幫忙！'],
        ['한국말 잘 못해요', 'han-guk-mal jal mot-hae-yo', '我韓語不太好'],
        ['영어 할 수 있어요?', 'yeong-eo hal su iss-eo-yo', '你會說英文嗎？'],
      ],
    },
  ];

  return (
    <div style={{ padding: '12px 12px' }}>
      <div style={{
        background: KK.infoBg, borderRadius: 8, padding: '10px 12px',
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
      }}>
        <Icon name="ic_info_fill" size={18} color="ink2" style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(95%) saturate(1800%) hue-rotate(190deg) brightness(95%) contrast(95%)' }} />
        <div style={{ fontSize: 12, color: '#1565c0', fontWeight: 500, lineHeight: '17px' }}>
          點右側 <strong>耳機圖示</strong> 用手機系統語音念出韓文。會話卡關時 <strong>Papago app</strong> 拍菜單翻譯最穩
        </div>
      </div>

      {groups.map(g => (
        <div key={g.group} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: KK.ink2, fontWeight: 700, letterSpacing: '0.08em', margin: '0 4px 6px' }}>{g.group.toUpperCase()}</div>
          <div style={{ background: '#fff', borderRadius: 8 }}>
            {g.items.map(([ko, romaji, zh], i) => (
              <div key={ko} style={{
                padding: '12px 14px',
                borderBottom: i < g.items.length - 1 ? `1px solid ${KK.borderSoft}` : 0,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: KK.ink, lineHeight: 1.2 }}>{ko}</div>
                  <div style={{ fontSize: 11, color: KK.ink2, marginTop: 3, fontStyle: 'italic' }}>{romaji}</div>
                  <div style={{ fontSize: 12, color: KK.tealDarker, marginTop: 3 }}>{zh}</div>
                </div>
                <button
                  onClick={() => speakKorean(ko, ko)}
                  aria-label={`播放韓語：${ko}`}
                  style={{
                    width: 36, height: 36, borderRadius: 999,
                    background: speakingKey === ko ? KK.teal : KK.tealLightBg,
                    border: 'none', padding: 0, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background .15s ease',
                  }}
                >
                  <Icon name="ic_headset_line" size={18} color={speakingKey === ko ? 'white' : 'teal'} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// =================================================================== TRANSPORT

function TransportTab() {
  return (
    <div style={{ padding: '12px 12px' }}>
      {/* Card 1: subway lines */}
      <div style={{ background: '#fff', borderRadius: 8, padding: 14, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <Icon name="ic_train_line" size={18} color="teal" />
          <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>釜山地鐵會用到的 3 條線</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { line: '1', color: '#f06a3a', name: '橘線', use: '南浦 · 札嘎其 · 西面 · 釜山站 · 梵魚寺' },
            { line: '2', color: '#5aaa3a', name: '綠線', use: '海雲台 · 廣安里 · 西面 · 沙上(轉機場輕軌)' },
            { line: 'D', color: '#a04a9a', name: '東海線', use: '機張 · OSIRIA · 海雲台 → 龍宮寺方向' },
          ].map(l => (
            <div key={l.line} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999,
                background: l.color, color: '#fff',
                fontWeight: 900, fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{l.line}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink }}>{l.name}</div>
                <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2, lineHeight: '15px' }}>{l.use}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 12, padding: '8px 10px',
          background: KK.tealLightBg, borderRadius: 6,
          fontSize: 11, color: KK.tealDarker, lineHeight: '16px',
        }}>
          💡 <strong>單程 ₩1,400 起</strong> · 用 T-money 自動 ₩100 折扣 · 末班約 23:30
        </div>
      </div>

      {/* Card 2: T-money */}
      <div style={{ background: '#fff', borderRadius: 8, padding: 14, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 30 }}>💳</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>T-money 卡用法</div>
            <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2 }}>地鐵、公車、計程車、便利店都能用</div>
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: KK.ink2, lineHeight: '18px' }}>
          1. 機場 / CU / GS25 買空卡 ₩4,000<br/>
          2. 便利店 / 地鐵儲值機儲值 ₩10,000 起<br/>
          3. 進站 / 上車「逼一下」感應器<br/>
          4. 回程到便利店退餘額（手續費 ₩500）
        </div>
      </div>

      {/* Card 3: Kakao T */}
      <div style={{ background: '#fff', borderRadius: 8, padding: 14, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 30 }}>🚕</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>Kakao T 計程車</div>
            <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2 }}>韓國版 Uber · 顯示固定金額不會繞</div>
          </div>
        </div>
        <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, fontSize: 12 }}>
          {[
            ['起跳 (日)', '₩4,800 / 2km'],
            ['起跳 (夜)', '₩5,800 / 22:00 後'],
            ['預估海雲台→西面', '₩15,000'],
            ['預估機場→海雲台', '₩35,000'],
          ].map(([k, v]) => (
            <div key={k} style={{ background: KK.surface, borderRadius: 6, padding: 8 }}>
              <div style={{ fontSize: 10, color: KK.ink2 }}>{k}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: KK.ink, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 4: KTX */}
      <div style={{ background: '#fff', borderRadius: 8, padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name="ic_highspeed_rail_line" size={28} color="teal" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>慶州一日 KTX</div>
            <div style={{ fontSize: 11, color: KK.ink2, marginTop: 2 }}>釜山站 → 新慶州 30 分鐘 · ₩11,000</div>
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: KK.ink2, lineHeight: '18px' }}>
          建議用 <strong>Korail</strong> app 提前 1 週訂位 · 夏天慶州熱門時段會滿座<br/>
          新慶州站到佛國寺要搭 700 號公車約 30 分
        </div>
      </div>
    </div>
  );
}

// =================================================================== SHOPPING

function ShoppingTab() {
  return (
    <div style={{ padding: '12px 12px' }}>
      <div style={{ background: '#fff', borderRadius: 8, padding: 14, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <Icon name="ic_store_fill" size={18} color="teal" />
          <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>釜山購物熱區排行</div>
        </div>
        {[
          { name: '西面 / 田浦', tag: '美妝 + 服飾 + 咖啡', desc: 'Olive Young 旗艦、ARTBOX 文具、田浦咖啡街韓系服飾', rank: 1 },
          { name: 'Shinsegae Centum City', tag: '世界最大百貨', desc: '名品 + Spa Land 汗蒸幕 + 美食街，下雨天救星', rank: 2 },
          { name: 'Lotte 東釜山 Premium Outlet', tag: '名牌 outlet', desc: 'Coach / Polo / Adidas 6 折起，搭東海線到 OSIRIA 站', rank: 3 },
          { name: '南浦洞 / 光復洞', tag: '老市區商圈', desc: '釜山版西門町，地下街 + 樂天百貨，BIFF 廣場小吃', rank: 4 },
          { name: '札嘎其 + 國際市場', tag: '傳統市場', desc: '海鮮、海苔、伴手禮，殺價文化還在', rank: 5 },
        ].map(s => (
          <div key={s.name} style={{
            padding: '10px 0', borderBottom: s.rank < 5 ? `1px solid ${KK.borderSoft}` : 0,
            display: 'flex', gap: 12, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 999,
              background: s.rank === 1 ? '#ffd700' : (s.rank === 2 ? '#c0c0c0' : (s.rank === 3 ? '#cd7f32' : KK.surface)),
              color: s.rank <= 3 ? '#fff' : KK.ink,
              fontSize: 13, fontWeight: 900,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>{s.rank}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: KK.ink }}>{s.name}</span>
                <Badge tone="teal">{s.tag}</Badge>
              </div>
              <div style={{ fontSize: 11, color: KK.ink2, marginTop: 4, lineHeight: '15px' }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Souvenirs list */}
      <div style={{ background: '#fff', borderRadius: 8, padding: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: KK.ink, marginBottom: 10 }}>必買伴手禮清單</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {[
            ['🥖', '蜂蜜奶油杏仁', '機張海鮮市場 / 機場免稅'],
            ['🌶', 'CJ 不倒翁泡麵組', '便利店 / 樂天超市'],
            ['🧴', 'Olive Young 面膜', 'AHC / mediheal 整盒最划算'],
            ['🍫', 'Market O 布朗尼', '機場免稅 + 樂天瑪特'],
            ['🌊', '兩切海苔', '札嘎其市場 / Premium 樂天'],
            ['🍵', '韓國橘子茶', '玻璃罐挖一匙泡熱水超暖'],
          ].map(([e, n, where]) => (
            <div key={n} style={{ background: KK.surface, borderRadius: 6, padding: 10, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 22, lineHeight: 1 }}>{e}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: KK.ink }}>{n}</div>
                <div style={{ fontSize: 10, color: KK.ink2, marginTop: 2, lineHeight: '13px' }}>{where}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tax refund */}
      <div style={{ marginTop: 12, background: KK.goldBg, borderRadius: 8, padding: 14, display: 'flex', gap: 10 }}>
        <Icon name="ic_coupon_color" size={22} />
        <div style={{ flex: 1, fontSize: 12, color: KK.ink, lineHeight: '17px' }}>
          <strong>退稅小提醒：</strong>單張收據滿 ₩30,000 才可退，總額退 7–9%。<br/>
          機場 KIOSK 自助操作（中文介面）出境前蓋章，行李託運前要先做。
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TipsScreen });
