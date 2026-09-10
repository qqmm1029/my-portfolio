// ============================================================
// Sidebar.tsx - 侧边栏导航组件
// 功能：显示导航菜单，支持页面切换和折叠/展开
// ============================================================

// 导入 React

// ============================================================
// 定义导航项的类型
// ============================================================
interface NavItem {
  id: string;       // 页面唯一标识（如："home"、"projects"）
  icon: string;     // 图标（如："🏠"、"📁"）
  text: string;     // 显示文字（如："首页"、"项目"）
}

// ============================================================
// 定义组件的 Props 类型
// ============================================================
interface SidebarProps {
  navItems: NavItem[];              // 导航项列表
  activePage: string;               // 当前激活的页面 ID
  collapsed: boolean;               // 是否折叠（true=收起，false=展开）
  onNavigate: (pageId: string) => void;  // 点击导航时的回调函数
  onToggleCollapse: () => void;     // 切换折叠状态的回调函数
}

// ============================================================
// 主组件
// ============================================================
const Sidebar = ({
  navItems,           // 导航项列表
  activePage,         // 当前激活的页面
  collapsed,          // 折叠状态
  onNavigate,         // 切换页面函数
  onToggleCollapse,   // 切换折叠函数
}: SidebarProps) => {
  return (
    // ===== 侧边栏容器 =====
    // 根据 collapsed 动态添加 "collapsed" 类名
    // 展开：class="sidebar"
    // 折叠：class="sidebar collapsed"
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* ===== 侧边栏标题 ===== */}
      {/* 折叠时会自动隐藏（通过 CSS .sidebar.collapsed .sidebar-title） */}
      <div className="sidebar-title">✦ 目 录</div>
      
      {/* ===== 导航列表 ===== */}
      <ul className="nav-list">
        {/* 遍历 navItems 数组，生成每个导航项 */}
        {navItems.map((item) => (
          // key 是 React 列表渲染必须的唯一标识
          <li key={item.id}>
            {/* 
              导航按钮
              - 如果当前页面 ID 等于按钮的 ID，添加 "active" 类名（高亮）
              - 点击时调用 onNavigate 切换页面
            */}
            <button
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {/* 图标（折叠时仍然显示） */}
              <span className="nav-icon">{item.icon}</span>
              {/* 文字（折叠时隐藏） */}
              <span className="nav-text">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
      
      {/* ===== 折叠/展开切换按钮 ===== */}
      {/* 
        点击切换折叠状态
        折叠时显示 "▶"（展开图标）
        展开时显示 "◀ 收起"（收起图标 + 文字）
      */}
      <button className="toggle-btn" onClick={onToggleCollapse}>
        {collapsed ? "▶" : "◀ 收起"}
      </button>
    </nav>
  );
};

// ============================================================
// 导出组件
// ============================================================
export default Sidebar;