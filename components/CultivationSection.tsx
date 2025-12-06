import React from 'react';
import { Layers, Rocket, Users2, Library } from 'lucide-react';

export const CultivationSection: React.FC = () => {
  const modes = [
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      title: "分层进阶制",
      content: "根据成员基础与目标，设置“入门 → 进阶 → 核心 → 项目负责人”的成长路径，提供阶梯式培养内容。",
      bg: "bg-blue-50"
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      title: "项目驱动制",
      content: "核心培养围绕真实项目展开，成员在项目中学习技术、锻炼能力、全面提升。",
      bg: "bg-indigo-50"
    },
    {
      icon: <Users2 className="w-8 h-8 text-purple-500" />,
      title: "导师双轨制",
      content: (
        <ul className="text-sm space-y-2 mt-2">
          <li><span className="font-bold text-slate-700">校内导师：</span>由教育学院教师担任，负责学业指导、技术答疑、项目把关。</li>
          <li><span className="font-bold text-slate-700">企业导师：</span>聘请合作企业资深工程师、产品经理，提供产业前沿视角与市场指导。</li>
        </ul>
      ),
      bg: "bg-purple-50"
    },
    {
      icon: <Library className="w-8 h-8 text-orange-500" />,
      title: "工作坊与集训",
      content: "定期举办“AI+教育”前沿技术工作坊、项目实战集训营、创新思维训练营。",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section id="cultivation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">培养模式</h2>
          <p className="text-xl text-slate-600">科学的成长路径，全方位的指导体系</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modes.map((mode, index) => (
            <div key={index} className={`${mode.bg} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100`}>
              <div className="flex items-start mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                  {mode.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{mode.title}</h3>
                  <div className="text-slate-600 leading-relaxed">
                    {mode.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};