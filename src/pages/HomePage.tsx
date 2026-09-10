import AvatarSection from "../components/AvatarSection";
import Card from "../components/Card";
import Tag from "../components/Tag";

const HomePage = () => {
  return (
    <>
      <AvatarSection caption="杭州电子科技大学 · 网络空间安全（本科）" />

      <div className="cards">
        <Card title="你好，我是谁" emoji="♙">
          我叫刘宸玥，是杭州电子科技大学网络空间安全专业的大三学生，对
          <strong>产品方向</strong>有浓厚兴趣。
          <br />
          具备理工科逻辑思维与技术理解力，熟悉开发全流程，
          <br />
          独立完成过完整产品原型设计，能够弥合需求与技术之间的沟通鸿沟。
        </Card>

        <Card title="求职方向" emoji="☆">
          目标岗位：<strong>产品经理 / 产品助理</strong>
          <br />
          期望城市：杭州 
          <br />
          可实习时间：随时到岗,实习四个月以上，一周五天
        </Card>

        <Card title="关键标签" emoji="◎">
          <Tag text="网络空间安全" />
          <Tag text="Axure 原型" />
          <Tag text="需求分析 / 功能规划" />
          <Tag text="用户路径拆解" />
          <Tag text="技术理解力" />
          <Tag text="英语六级" />
          <Tag text="跨团队协作" />
        </Card>
      </div>
    </>
  );
};

export default HomePage;