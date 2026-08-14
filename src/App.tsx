import { useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import ImageModal from "./components/ImageModal";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

const navItems = [
  { id: "home", icon: "≡", text: "首页" },
  { id: "projects", icon: "✦", text: "项目" },
  { id: "skills", icon: "♥", text: "技能" },
  { id: "experience", icon: "★", text: "经历" },
  { id: "contact", icon: "✉", text: "联系" },
];

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleNavigate = useCallback((pageId: string) => {
    setActivePage(pageId);
  }, []);

  const handleToggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalImage(null);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "projects":
        return <ProjectsPage />;
      case "skills":
        return <SkillsPage />;
      case "experience":
        return <ExperiencePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="container">
      <Sidebar
        navItems={navItems}
        activePage={activePage}
        collapsed={collapsed}
        onNavigate={handleNavigate}
        onToggleCollapse={handleToggleCollapse}
      />

      <main className="main">{renderPage()}</main>

      <ImageModal src={modalImage} onClose={handleCloseModal} />
    </div>
  );
};

export default App;