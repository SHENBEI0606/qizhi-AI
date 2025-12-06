import React from 'react';
import { Target, TrendingUp, Scale, Award } from 'lucide-react';

const goals = [
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "提前布局",
    description: "提前开展项目储备和团队组建工作，抢占先机，为长周期项目打下坚实基础。",
    color: "bg-blue-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "质量提升",
    description: "通过系统的孵化流程和专家指导，全面提升项目的学术价值、商业潜力和核心竞争力。",
    color: "bg-indigo-500"
  },
  {
    icon: <Scale className="w-8 h-8 text-white" />,
    title: "公平机制",
    description: "建立公平、透明、公开的项目分配与选拔机制，确保每位同学都有平等的机会。",
    color: "bg-purple-500"
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "成果导向",
    description: "以结果为导向，全力冲击省级及以上立项和奖项，实现学院双创成果的重大突破。",
    color: "bg-innovation-gold"
  }
];

export const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">总体目标</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            我们要打造什么样的双创生态？
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group transform hover:-translate-y-2"
            >
              <div className={`${goal.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{goal.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};