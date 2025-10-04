// React 的入口檔案
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../main.css'  // 引入原本的 CSS

// 找到 id="root" 的 DOM 元素，把 React App 渲染進去
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
