import React from 'react';
import { Lightbulb, Wrench, GraduationCap } from 'lucide-react';

export const BackgroundSection: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">工作室简介</h2>
          <div className="w-24 h-1 bg-innovation-gold mx-auto mb-8"></div>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            “启智”双创工作室隶属于长春师范大学教育学院，以<span className="text-cnnu-blue font-bold">教育技术学专业</span>为基石，
            深度融合<span className="text-cnnu-blue font-bold">人工智能技术</span>，致力于打造
            “<span className="text-innovation-gold font-bold">产教融合、校企协同</span>”的创新创业孵化平台。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Tech Level Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Wrench size={120} className="text-cnnu-blue" />
             </div>
             <div className="relative z-10">
                <div className="w-12 h-12 bg-cnnu-blue rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                   <Lightbulb size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">技术层面</h3>
                <p className="text-slate-600 mb-6 font-medium">聚焦人工智能技术在教育领域的创新应用，重点支持：</p>
                <ul className="space-y-3">
                  {[
                    "AI教育工具研发",
                    "智能微课 / 精品课程开发",
                    "智慧教学资源 / 平台搭建",
                    "教育类虚拟仿真与数字孪生资源设计",
                    "AI赋能教师教育"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                      <span className="w-2 h-2 bg-cnnu-light rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Work Direction Card */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl border border-amber-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={120} className="text-innovation-gold" />
             </div>
             <div className="relative z-10">
                <div className="w-12 h-12 bg-innovation-gold rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                   <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">工作方向与服务</h3>
                <p className="text-slate-600 mb-6 font-medium">为全校学生提供全链条服务体系：</p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-orange-100 text-center">
                      <span className="block font-bold text-slate-800">技术实践</span>
                    </div>
                    <div className="px-2 text-slate-400">→</div>
                    <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-orange-100 text-center">
                      <span className="block font-bold text-slate-800">项目孵化</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                     <div className="h-8 w-[1px] bg-slate-300"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-orange-100 text-center">
                      <span className="block font-bold text-slate-800">就业推荐</span>
                    </div>
                    <div className="px-2 text-slate-400">←</div>
                    <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-orange-100 text-center">
                      <span className="block font-bold text-slate-800">能力认证</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Policy Context (Condensed) */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
           <p className="text-slate-500 text-sm">
             背景：为深入贯彻落实国家创新创业教育政策，提升学院学生创新创业能力，由教育学院启智双创工作室牵头组织和孵化双创项目和比赛项目。
           </p>
        </div>

      </div>
    </section>
  );
};