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
          <strong>前端开发</strong>有浓厚兴趣。
          <br />
          具备扎实的计算机基础（数据结构、计算机网络），正在系统学习前端技术栈，
          <br />
          独立完成过网页开发项目，同时拥有深度学习项目经验，具备较强的工程实践能力。
        </Card>

        <Card title="求职方向" emoji="☆">
          目标岗位：<strong>前端开发工程师</strong>
          <br />
          期望城市：杭州 / 上海 
          <br />
          可实习时间：随时到岗
        </Card>

        <Card title="关键标签" emoji="◎">
          <Tag text="网络空间安全科班" />
          <Tag text="HTML / CSS / JavaScript" />
          <Tag text="React + TypeScript" />
          <Tag text="响应式布局" />
          <Tag text="深度学习经验" />
          <Tag text="英语六级" />
          <Tag text="团队协作" />
        </Card>
      </div>
    </>
  );
};

export default HomePage;