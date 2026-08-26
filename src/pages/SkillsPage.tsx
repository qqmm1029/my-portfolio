import Card from "../components/Card";
import Tag from "../components/Tag";

const SkillsPage = () => {
  return (
    <div className="cards">
      <Card title="前端技术" emoji="◆">
        <Tag text="HTML5" />
        <Tag text="CSS3" />
        <Tag text="JavaScript" />
        <Tag text="React" />
        <Tag text="TypeScript" />
        <Tag text="响应式布局" />
        <Tag text="DOM 操作" />
        <Tag text="组件化开发" />
      </Card>

      <Card title="开发工具" emoji="◆">
        <Tag text="Git" />
        <Tag text="Vite" />
        <Tag text="VS Code" />
        <Tag text="npm" />
      </Card>

      <Card title="其他能力" emoji="◆">
        <Tag text="Python" />
        <Tag text="PyTorch" />
        <Tag text="计算机网络" />
        <Tag text="数据结构" />
        <Tag text="英语六级" />
        <Tag text="基础日语" />
      </Card>
    </div>
  );
};

export default SkillsPage;