# 九宮格動畫小作業 with Vue 3 + Vite

[Demo](https://vue-animation-test.onrender.com)
---
## 實作項目
### 主頁面-側邊選單收合按鈕
1. 製作可開啟／收合側邊選單的按鈕（放置於頂部欄漢堡按鈕）。
2. 選單內每個項目都可點擊，點擊後 highlight 被選取項目，一次只有一個展開且 highlight 的項目；若該項目有子元素，會展開該層，須支援多層項目（先切好一個層級之後，再改成遞迴版本建立子目錄）。
3. 實作記憶功能，關閉分頁後再開啟，可以顯示上次選取的項目（同時存至 `store` 及 `localStorage` 記憶）。
4. 另提供一個下拉選單，需包含所有種類。從下拉選單中選取任一項目時，等同點擊該項目（文字描述）。<br/>
   目前已將選單中所選項目的 `key` 透過 `store` 的 `action` `setActiveMenuItem` 存至 `store` 及 `localStorage`，<br/>
   因此將下拉選單以資料渲染出來後，將選單事件 `onChange` 時，同時觸發 `setActiveMenuItem` 變更即可。

### 主頁面-九宮格動畫
1. 切出一個九宮格，右上, 正中, 右下的格子會不停閃爍。四個角落的格子內有顆會向右移動一段距離的球，球不被背景動畫影響（使用絕對定位，將格子、閃爍背景、球切開）。
2. 九宮格需要垂直置中於下方區塊（使用 `flex` 置中）。
3. 請使用兩種以上的動畫執行方式，來繪製動畫（CSS/GSAP）。
4. 四顆球同時朝同一個座標點移動；可支援同時存在一百顆球、且須控制座標點（文字描述）。<br/>
   先產生存取多顆球的陣列，陣列內每個物件內有座標 x, y（或是使用 CSS 的 `top`、`right`）。<br/>
   將球製作成 component 後，新增起始座標以及目標座標的 props，在球內部進行 `onMounted` 後使用 `gsap.to` 將物件移動到目標座標即可。


## 專案使用技術
*   專案起手架 `vite ^4.4.5`
*   前端框架 `vue ^3.3.4`
*   狀態管理 `pinia ^2.1.6` 🍍
*   路由切換 `vue-router @4`
*   萬用資源 `@vue-use/core ^10.2.1`
*   CSS 框架 `tailwindcss ^3.3.3`
*   CSS 預處理器 `sass ^1.64.1`
*   動畫庫 `gsap ^3.12.2`
