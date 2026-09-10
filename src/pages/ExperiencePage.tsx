import Card from "../components/Card";
import Tag from "../components/Tag";

const ExperiencePage = () => {
  return (
    <div className="cards">
      <Card title="社团经历" emoji="☆">
        <strong>setfree 街舞社 · 社团负责人</strong>（2023.9 - 至今）
        <br />
        <ul className="highlight-list">
          <li>主导社团活动策划与执行，从受众需求出发设计节目内容与呈现形式</li>
          <li>协调 10+ 人团队推进节目排期与现场执行，累计完成 20+ 场校内演出</li>
          <li>建立团队分工与排期机制，主导舞台视觉方案，确保多场大型活动零失误交付</li>
          <li>锻炼了需求洞察、项目推动与跨角色沟通协调能力</li>
        </ul>
      </Card>

      <Card title="获奖情况" emoji="☆">
        <ul className="highlight-list">
          <li>易班创新技术大赛文创产品设计赛道二等奖</li>
          <li>多次获校内单项奖学金</li>
          <li>校级英语比赛二等奖</li>
          <li>第十五届全国密码技术竞赛复赛</li>
        </ul>
      </Card>

      <Card title="教育背景" emoji="☆">
        <strong>杭州电子科技大学</strong>（2023.9 - 至今）
        <br />
        网络空间安全（本科）· 大三
        <br />
        <br />
        主修课程：
        <br />
        <Tag text="数据结构" />
        <Tag text="计算机网络" />
        <Tag text="人工智能" />
        <Tag text="深度学习" />
        <Tag text="Python" />
      </Card>
    </div>
  );
};

export default ExperiencePage;