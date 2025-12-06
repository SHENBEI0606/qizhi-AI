import React, { useState } from 'react';
import { BrainCircuit, BookOpen, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface ProjectDetail {
  title: string;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  status: string;
  statusColor: string;
  statusBg: string;
  shortDescription: React.ReactNode;
  details: ProjectDetail[];
  icon: React.ReactNode;
  gradient: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "启智AI助力教学网",
    status: "全新改版中",
    statusColor: "text-blue-700",
    statusBg: "bg-blue-100",
    shortDescription: "基于人工智能的教学辅助平台，旨在为教师提供智能化的教学工具和资源，提升教学效率与质量。",
    details: [
      {
        title: "核心功能模块",
        items: [
          "AI 教学数字人分身：快速创建自己的数字形象",
          "AI 视频图片创作：发挥想象，让AI帮你创作素材",
          "Agent 智能体：搭建自己的智能体，我的AI学习工作小助手"
        ]
      },
      {
        title: "最新动态",
        items: [
          "发布《关于构建国际数字教育标准体系框架的倡议》解读",
          "上线 Kimi 教学领域应用专区",
          "人工智能赋能基础教育应用蓝皮书总结"
        ]
      }
    ],
    icon: <BrainCircuit className="text-white w-16 h-16 relative z-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3" />,
    gradient: "from-blue-600 to-indigo-700",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "智联课本",
    status: "全力开发中",
    statusColor: "text-amber-700",
    statusBg: "bg-amber-100",
    shortDescription: (
      <>
        <span className="block font-semibold mb-2 text-slate-800">智能交互 · 个性学习 · 数据驱动</span>
        基于大数据和人工智能技术的智能教育平台，为每一位学习者提供个性化的学习体验。
      </>
    ),
    details: [
      {
        title: "平台特色",
        items: [
          "3D 互动体验：沉浸式学习环境，让知识触手可及",
          "数智可视化分析：多维度学情分析，实时掌握学习动态",
          "智能备课系统：AI分享教学行为，精准推送学习内容"
        ]
      },
      {
        title: "预期覆盖",
        items: [
          "服务学生用户：10,000+ 人",
          "服务教师用户：2,000+ 人",
          "目标：为每一位学习者提供个性化的学习路径"
        ]
      }
    ],
    icon: <BookOpen className="text-white w-16 h-16 relative z-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3" />,
    gradient: "from-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const ProjectsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">在研项目</h2>
            <p className="text-slate-600">正在进行中的孵化项目展示</p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
               <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
               持续更新中
             </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
              {/* Header Image Area */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
                 <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                 ></div>
                 {project.icon}
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <span className={`px-3 py-1 ${project.statusBg} ${project.statusColor} text-xs font-bold rounded-full`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="text-slate-600 mb-6 flex-grow">
                  {project.shortDescription}
                </div>

                {/* Toggle Button */}
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="text-cnnu-blue font-bold flex items-center hover:bg-blue-50 w-fit px-4 py-2 rounded-lg -ml-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  {expandedId === project.id ? (
                    <>收起详情 <ChevronUp size={16} className="ml-2" /></>
                  ) : (
                    <>了解详情 <ChevronDown size={16} className="ml-2" /></>
                  )}
                </button>

                {/* Expandable Content with CSS Grid Animation */}
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    expandedId === project.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <div className="grid gap-6">
                        {project.details.map((detail, idx) => (
                          <div key={idx}>
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center text-sm">
                              <Sparkles size={14} className="text-innovation-gold mr-2" />
                              {detail.title}
                            </h4>
                            <ul className="space-y-2">
                              {detail.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="text-sm text-slate-600 flex items-start pl-1">
                                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
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