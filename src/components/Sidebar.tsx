interface NavItem {
  id: string;
  icon: string;
  text: string;
}

interface SidebarProps {
  navItems: NavItem[];
  activePage: string;
  collapsed: boolean;
  onNavigate: (pageId: string) => void;
  onToggleCollapse: () => void;
}

const Sidebar = ({
  navItems,
  activePage,
  collapsed,
  onNavigate,
  onToggleCollapse,
}: SidebarProps) => {
  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-title">✦ 目 录</div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
      <button className="toggle-btn" onClick={onToggleCollapse}>
        {collapsed ? "▶" : "◀ 收起"}
      </button>
    </nav>
  );
};

export default Sidebar;