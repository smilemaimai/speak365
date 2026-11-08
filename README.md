# 開口 365

365 天英文口說 Web App，每天 10–15 分鐘，美式發音、繁體中文介面。純前端，不需要伺服器或帳號；進度存在瀏覽器的 localStorage，聲音不會上傳到這個網站（語音辨識由手機瀏覽器內建服務處理）。

- **12 個月、52 週主題**：開口第一步 → 生活基本功 → 城市小日子 → 出發去旅行 → 旅途中的大小事 → 交朋友與應變 → 聊聊過去與喜好 → 表達想法 → 社交場合 → 說故事 → 文化與溝通 → 流利自在。以日常社交與出國旅遊為主，難度從入門到中高級。
- **每週 7 天的節奏**：新句子 A／新句子 B（跟讀評分）→ 中翻英挑戰 → 情境對話聽與跟讀 → 角色扮演（App 演對方）→ 自由開口（錄音回放自評）→ 週複習（本週＋之前的句子）。第 365 天是畢業日。
- **跟讀評分**：按麥克風說英文，逐字比對，綠字說對、紅字要加強。
- 其他：慢速朗讀、錄音對照、365 格進度牆、連續天數、備份碼匯出／還原、課文中的 `{name}` 可換成你的英文名字。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的 repository（例如 `speak365`）
2. 上傳這個資料夾裡的所有檔案到根目錄（`index.html`、`data1.js`、`data2.js`、`manifest.json`、`icon.svg`、`.nojekyll`）
3. **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)`，按 Save
4. 約一分鐘後網址是 `https://<你的帳號>.github.io/speak365/`

```bash
git init && git add . && git commit -m "開口 365"
git branch -M main
git remote add origin https://github.com/<你的帳號>/speak365.git
git push -u origin main
```

> 麥克風只能在 HTTPS 或 localhost 下使用，GitHub Pages 預設就是 HTTPS。

## 本機執行

```bash
python3 -m http.server 8366
```

打開 http://localhost:8366

## 手機使用提醒

- **iPhone**：用 Safari 開，並在「設定 → Siri」開啟 Siri、「一般 → 鍵盤」開啟聽寫，語音辨識才會運作。用「分享 → 加入主畫面」就能像 App 一樣全螢幕開啟。
- **Android**：用 Chrome。
- 第一次按麥克風會詢問權限，請選「允許」。
- 換手機前到「設定 → 備份進度」複製備份碼。

## 檔案結構

| 檔案 | 內容 |
|---|---|
| `data1.js` | 月份主題與第 1–26 週課程（每週 8 句核心句、6 句情境對話、自由開口題） |
| `data2.js` | 第 27–52 週課程 |
| `index.html` | 介面、朗讀、語音辨識評分、錄音、進度 |
