import Card from "../components/Card";

const ProjectsPage = () => {
  return (
    <div className="cards">
      <Card title="个人作品展示网站" emoji="🌐">
        <strong>技术栈：</strong>HTML5 / CSS3 / JavaScript / 响应式设计
        <br />
        <br />
        <strong>项目介绍：</strong>
        <br />
        独立设计并开发的个人作品集网站（本项目），实现个人信息展示与图片交互功能。
        <ul className="highlight-list">
          <li>使用 HTML/CSS 完成页面布局与毛玻璃视觉设计</li>
          <li>结合 Media Query 实现 PC 与移动端响应式适配</li>
          <li>使用 JavaScript 实现页面切换、侧边栏折叠等交互</li>
          <li>实现图片弹窗的缩放与拖拽功能（鼠标滚轮 + 触摸手势）</li>
          <li>完成从 UI 设计、页面开发到交互实现的完整流程</li>
        </ul>
      </Card>

      <Card title="基于深度学习的图像篡改检测系统" emoji="🤖">
        <strong>技术栈：</strong>Python / PyTorch / CNN / Transformer
        <br />
        <br />
        <strong>项目介绍：</strong>
        <br />
        基于深度学习实现图像篡改区域自动检测与定位。
        <ul className="highlight-list">
          <li>复现双流检测网络，融合 RGB 特征与噪声特征</li>
          <li>完成数据处理、模型训练及实验验证全流程</li>
          <li>在 NIST16 数据集取得 AUC 0.989 / IoU 0.840</li>
          <li>使用 AUC、IoU、F1 等指标系统评估模型性能</li>
          <li>锻炼了工程化思维、调试能力与代码规范意识</li>
        </ul>
      </Card>
    </div>
  );
};

export default ProjectsPage;