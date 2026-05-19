# 釜山行 · Busan Trip 2026/07/28 – 08/05

第一次去韓國的 8 天 7 夜釜山旅遊指南 · 互動式 prototype。

採用 KKday 設計系統，包含：

- **總覽** — 出發倒數、班機、住宿（海雲台 / 西面）、每日重點
- **入境準備** — K-ETA、e-CD、SIM、T-money 等 8 項可勾選清單
- **逐日行程** — Day 1–8 詳細時間軸
- **攻略** — 必吃 12 道、韓語會話、地鐵、購物 + 退稅

## 本機預覽

直接打開 `index.html`，或啟動任一靜態伺服器：

```bash
python3 -m http.server 8000
# 然後打開 http://localhost:8000
```

## 部署到 GitHub Pages

1. push 到 GitHub repo (例如 `busan-trip`)
2. Repo Settings → Pages → Source 選 `main` branch + `/` (root)
3. 約 1 分鐘後拜訪 `https://<你的帳號>.github.io/busan-trip/`

## 檔案結構

```
index.html              ← 主頁面（含 React + Babel CDN）
src/
  data.js               ← 行程資料 (DAYS / HOTELS / TRIP)
  colors_and_type.css   ← KKday 設計 token
  primitives.jsx        ← Icon / Photo / Badge / Chip
  ios-frame.jsx         ← iOS 裝置外框
  screen-overview.jsx   ← 總覽分頁
  screen-entry.jsx      ← 入境分頁
  screen-itinerary.jsx  ← 行程 + Day 詳細
  screen-tips.jsx       ← 攻略（食 / 語 / 交通 / 購物）
assets/icons/           ← 95 個 SVG icon
```

要改行程內容，直接編輯 `src/data.js` 裡的 `DAYS` 陣列即可。
