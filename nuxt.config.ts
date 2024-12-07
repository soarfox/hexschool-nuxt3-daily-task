import { preProcessFile } from "typescript";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 以下註解說明參考自'以下針對核心檔案用途進行補充': https://hackmd.io/JTnXov2MR4m9epBKH9VmiQ
  // compatibilityDate 屬性 : 將 Nuxt3 的功能和行為鎖定在 2024-04-03 之前的版本，
  // 避免之後 Nuxt3 新版本的寫法調整會影響到目前專案的運作
  compatibilityDate: '2024-04-03',
  // 啟用 Nuxt DevTools 開發工具
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  css: ["@/assets/stylesheets/all.scss"],
  // 若希望在每個頁面與元件都共用同一支SCSS或SASS變數, 需要在nuxt.config.ts設定vite選項的css.preprocessorOptions.scss.additionalData
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // @ 會指向 hexschool-nuxt3-daily-task/路徑; 在此將自己撰寫的scss樣式進行引用; 目前使用@import在npm run dev時會有警告文字, 未來將全面改用@use, 但需等BS5官方改版後才適用
          additionalData:  `
            @import "@/assets/stylesheets/_variables.scss";`,
        },
      },
    },
  },
});
