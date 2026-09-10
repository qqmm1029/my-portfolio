import Card from "../components/Card";
import Tag from "../components/Tag";

const SkillsPage = () => {
  return (
    <div className="cards">
      <Card title="产品设计" emoji="◆">
        <Tag text="Axure 高保真原型" />
        <Tag text="需求分析" />
        <Tag text="功能规划" />
        <Tag text="信息架构" />
        <Tag text="用户路径拆解" />
        <Tag text="交互闭环设计" />
        <Tag text="异常分支设计" />
        <Tag text="组件状态机" />
      </Card>

      <Card title="项目与文档" emoji="◆">
        <Tag text="Notion" />
        <Tag text="Xmind" />
        <Tag text="Office" />
        <Tag text="策划文档编写" />
        <Tag text="项目管理" />
        <Tag text="开发评审" />
      </Card>

      <Card title="技术理解" emoji="◆">
        <Tag text="Python" />
        <Tag text="React / TypeScript" />
        <Tag text="HTML / CSS / JavaScript" />
        <Tag text="计算机网络" />
        <Tag text="数据结构" />
        <Tag text="开发全流程" />
      </Card>

      <Card title="AI 工具与语言" emoji="◆">
        <Tag text="ChatGPT" />
        <Tag text="DeepSeek" />
        <Tag text="Codex" />
        <Tag text="需求文档搭建" />
        <Tag text="数值推演" />
        <Tag text="技术方案调研" />
        <Tag text="英语六级" />
        <Tag text="基础日语" />
      </Card>
    </div>
  );
};

export default SkillsPage;