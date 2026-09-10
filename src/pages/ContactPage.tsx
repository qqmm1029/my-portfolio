import Card from "../components/Card";

const ContactPage = () => {
  return (
    <div className="cards">
      <Card title="联系方式" emoji="✉">
        邮箱：<a href="mailto:2621066289@qq.com">2621066289@qq.com</a>
        <br />
        坐标：浙江杭州
        <br />
        状态：大四在读，随时可到岗，实习四个月以上，一周五天
      </Card>

      <Card title="简历" emoji="▤">
        点击下方按钮查看或下载我的简历：
        <br />
        <a href="/resume.pdf" download className="btn-resume">
          📥 下载简历（PDF）
        </a>
      </Card>

      <Card title="关于我" emoji="✦">
        网络空间安全专业背景，对产品方向有浓厚兴趣。
        <br />
        具备理工科逻辑思维与技术理解力，熟悉 Axure 高保真原型设计，
        <br />
        能够拆解用户路径、规划功能模块，并深入设计异常分支与交互闭环。
        <br />
        技术背景让我能精准评估需求实现难度，弥合产品与技术之间的沟通鸿沟，
        <br />
        期待在产品岗位上通过实战快速迭代成长。
      </Card>
    </div>
  );
};

export default ContactPage;