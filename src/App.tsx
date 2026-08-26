// ============================================================
// App.tsx - 应用程序根组件
// 功能：管理全局状态（页面切换、侧边栏折叠），渲染主布局
// ============================================================

// 导入 React Hooks
import { useState, useCallback } from "react";
// 导入侧边栏组件
import Sidebar from "./components/Sidebar";
// 导入所有页面组件
import HomePage from "./pages/HomePage";          // 首页
import ProjectsPage from "./pages/ProjectsPage";  // 项目页
import SkillsPage from "./pages/SkillsPage";      // 技能页
import ExperiencePage from "./pages/ExperiencePage"; // 经历页
import ContactPage from "./pages/ContactPage";    // 联系页
// 导入全局样式
import "./App.css";

// ============================================================
// 导航配置数据
// 定义侧边栏的导航项列表
// ============================================================
const navItems = [
  { id: "home", icon: "≡", text: "首页" },       // 首页导航项
  { id: "projects", icon: "✦", text: "项目" },    // 项目页导航项
  { id: "skills", icon: "♥", text: "技能" },      // 技能页导航项
  { id: "experience", icon: "★", text: "经历" },  // 经历页导航项
  { id: "contact", icon: "✉", text: "联系" },     // 联系页导航项
];

// ============================================================
// 主组件
// ============================================================
const App = () => {
  // ---------- 状态管理 ----------

  // activePage: 当前激活的页面 ID（默认 "home"）
  // 控制哪个页面内容被显示
  const [activePage, setActivePage] = useState("home");

  // collapsed: 侧边栏是否折叠（true=收起，false=展开）
  // 默认展开
  const [collapsed, setCollapsed] = useState(false);

  // ---------- 事件处理函数 ----------

  // handleNavigate: 切换页面
  // 接收页面 ID，更新 activePage 状态
  // useCallback 缓存函数，避免子组件不必要的重新渲染
  const handleNavigate = useCallback((pageId: string) => {
    setActivePage(pageId);  // 更新为点击的页面
  }, []);  // 空依赖 → 函数永远不变

  // handleToggleCollapse: 切换侧边栏折叠状态
  // 取反当前的折叠状态
  const handleToggleCollapse = useCallback(() => {
    setCollapsed(prev => !prev);  // true ↔ false 切换
  }, []);  // 空依赖 → 函数永远不变

  // ---------- 页面渲染函数 ----------

  // renderPage: 根据当前页面 ID 渲染对应的页面组件
  // switch 语句匹配 activePage，返回对应的组件
  const renderPage = () => {
    switch (activePage) {
      case "home":        // 如果 activePage === "home"
        return <HomePage />;
      case "projects":    // 如果 activePage === "projects"
        return <ProjectsPage />;
      case "skills":      // 如果 activePage === "skills"
        return <SkillsPage />;
      case "experience":  // 如果 activePage === "experience"
        return <ExperiencePage />;
      case "contact":     // 如果 activePage === "contact"
        return <ContactPage />;
      default:            // 如果匹配不到任何 case
        return <HomePage />;  // 默认返回首页
    }
  };

  // ---------- 渲染 UI ----------

  return (
    // 主容器：包含侧边栏和主内容区
    <div className="container">
      
      {/* ===== 侧边栏 ===== */}
      {/* 传递所有必要的 props */}
      <Sidebar
        navItems={navItems}                 // 导航列表数据
        activePage={activePage}             // 当前激活的页面 ID（用于高亮）
        collapsed={collapsed}               // 折叠状态（控制样式）
        onNavigate={handleNavigate}         // 切换页面的回调
        onToggleCollapse={handleToggleCollapse} // 切换折叠的回调
      />

      {/* ===== 主内容区 ===== */}
      {/* 显示当前选中的页面内容 */}
      <main className="main">
        {renderPage()}  {/* 根据 activePage 渲染对应页面 */}
      </main>
      
    </div>
  );
};

// ============================================================
// 导出组件
// ============================================================
export default App;