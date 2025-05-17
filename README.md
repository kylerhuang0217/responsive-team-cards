# Responsive Team Cards

## 作業說明

這是第三週的 Flex 排版作業，主要練習 RWD 的應用。內容是設計一組人物介紹卡片，包含圖片、職稱與簡介。

這次作業本來沒什麼特別的想法，我一開始是直接拿第一週作業的 About 頁面來用，把樣式改成五個人物介紹，但這樣看起來其實很平淡。

後來是 ChatGPT 給我很多修改的建議，才慢慢調成有「卡片感」的排版。過程中也加了一些小效果，例如 hover 時陰影會變深，加上 transition 之後，互動看起來也比較順。

## 互動功能補充（Week 5 延伸）

後來為了進一步練習 DOM 操作，我在這個作業上加上了互動功能，包含：

- 點擊 **"Show details"** 可展開自我介紹與 Email
- 點擊 **"Hide"** 可再次收起資訊
- 點擊 **"Edit"** 後可直接修改卡片上的資料（包含姓名、職稱、自我介紹與 Email）
- 點擊 **"Save"** 可儲存內容並回復為純文字狀態
- 點擊 **"Add Team Member"** 會新增一張卡片，並自動支援以上互動

整體是用 JavaScript 操作 DOM 的方式來實作，不靠後端或框架，純前端完成。

## 使用技術

- HTML
- SCSS
- Flexbox
- RWD（Responsive Web Design）
- JavaScript（互動邏輯）

## 頁面預覽

- https://responsive-team-cards.surge.sh
