# AML Buddy Frontend

這個資料夾是給 GitHub Pages 上傳的「前台公開版」。

建議 repository 名稱：

```text
aml-buddy-frontend
```

部署後網址會像：

```text
https://你的帳號.github.io/aml-buddy-frontend/
```

## 內容

- `index.html`：前台入口
- `assets/`：Logo 與圖像資源
- `css/style.css`：前台樣式
- `js/app.js`：前台互動流程
- `js/data.js`：前台靜態題庫，已更新為正式 50 題
- `js/translations.js`：正式 50 題的 AI 輔助英文／日文顯示翻譯
- `data/faqs.json`：正式 50 題原始 JSON 備份

## Supabase 共用題庫

正式發布資料建議由 Supabase 提供。請在 `index.html` 內填入：

```js
window.AML_BUDDY_SUPABASE = {
  url: "你的 Supabase Project URL",
  anonKey: "你的 Supabase anon public key",
  table: "aml_buddy_faqs"
};
```

填入後，前台載入時會向 Supabase 讀取 `status = published` 且未刪除的 FAQ。未填設定時，才會使用 `js/data.js` 靜態題庫與本機 demo 暫存。

## 注意

GitHub Pages 本身仍是靜態網站；跨裝置共用資料是透過 Supabase 完成，不是 GitHub Pages 內建功能。後台發布、刪除或重設資料後，請分別用手機與電腦瀏覽器打開前台確認題庫一致。
