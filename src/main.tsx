// ============================================================
// main.tsx - 应用入口文件
// 功能：React 应用的启动入口，将 App 组件挂载到 DOM
// ============================================================

// 导入 StrictMode：React 的严格模式工具
// 作用：在开发环境下帮助发现潜在问题（如过时的 API、副作用问题等）
import { StrictMode } from "react";
// 导入 createRoot：React 18 的新渲染 API
// 作用：创建 React 根节点，用于渲染 React 组件
import { createRoot } from "react-dom/client";
// 导入全局样式（重置样式、基础样式）
import "./index.css";
// 导入根组件 App
import App from "./App";

// ============================================================
// 渲染应用
// ============================================================

// 1. 获取 DOM 中的根节点
// document.getElementById("root") 获取 index.html 中的 <div id="root">
// ! 表示断言：告诉 TypeScript 这个元素一定存在（不会为 null）
createRoot(document.getElementById("root")!)

  // 2. 渲染 React 组件
  .render(
    // 严格模式：包裹 App 组件，启用开发环境检查
    <StrictMode>
      <App />  {/* 渲染根组件 */}
    </StrictMode>
  );