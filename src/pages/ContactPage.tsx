import Card from "../components/Card";

const ContactPage = () => {
  return (
    <div className="cards">
      <Card title="联系方式" emoji="📧">
        邮箱：<a href="mailto:2621066289@qq.com">2621066289@qq.com</a>
        <br />
        坐标：浙江杭州
        <br />
        状态：大三在读，随时可实习
      </Card>

      <Card title="简历" emoji="📄">
        点击下方按钮查看或下载我的简历：
        <br />
        <a href="/resume.pdf" download className="btn-resume">
          📥 下载简历（PDF）
        </a>
      </Card>

      <Card title="关于我" emoji="💬">
        网络空间安全专业背景，对前端开发有浓厚兴趣。
        <br />
        正在系统学习 React + TypeScript，目标成为一名前端工程师。
        <br />
        具有安全背景优势，了解 Web 安全基础（XSS/CSRF），
        <br />
        对前端性能优化与用户体验有持续学习的热情。
      </Card>
    </div>
  );
};

export default ContactPage;