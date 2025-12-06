import React from 'react';
import { Calendar, UserPlus, Users, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';

export const MechanismSection: React.FC = () => {
  return (
    <section id="mechanism" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-innovation-gold/10 text-innovation-gold rounded-full text-sm font-semibold mb-4">
            全流程支持
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">项目孵化机制</h2>
          <p className="text-lg text-slate-600">五大环节，构建完整的双创生态闭环</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            
            {/* Step 1: Mentor Project Collection */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-cnnu-blue mb-2 flex items-center md:justify-end gap-2">
                    导师项目征集 <UserPlus size={20} className="text-innovation-gold" />
                  </h3>
                  <div className="text-slate-600 space-y-2 text-sm">
                    <p><strong>流程：</strong></p>
                    <ul className="list-disc list-inside md:list-none text-slate-500">
                      <li>1. 导师扫码入库</li>
                      <li>2. 提交个人基本情况（含项目指导方向和成员需求）</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cnnu-blue rounded-full border-4 border-white flex items-center justify-center z-10 order-1 md:order-2 mt-[-2rem] md:mt-0">
                <span className="text-white font-bold text-xs">1</span>
              </div>
              <div className="md:w-5/12 pl-12 md:pl-8 order-3">
                <div className="inline-flex items-center text-innovation-gold font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">
                  <Calendar size={14} className="mr-2" />
                  每年 11月 - 12月
                </div>
              </div>
            </div>

            {/* Step 2: Student Declaration */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 mb-4 md:mb-0 text-right pr-12 md:pr-8 order-2 md:order-1 hidden md:block">
                 <div className="inline-flex items-center text-innovation-gold font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">
                  <Calendar size={14} className="mr-2" />
                  每年 11月 - 次年3月
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cnnu-blue rounded-full border-4 border-white flex items-center justify-center z-10 order-1 mt-[-2rem] md:mt-0">
                <span className="text-white font-bold text-xs">2</span>
              </div>
              <div className="md:w-5/12 pl-0 md:pl-8 order-3 md:order-3 w-full">
                 <div className="md:hidden mb-2 ml-12">
                   <div className="inline-flex items-center text-innovation-gold font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} className="mr-2" />
                    每年 11月 - 次年3月
                  </div>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ml-12 md:ml-0">
                  <h3 className="text-xl font-bold text-cnnu-blue mb-2 flex items-center gap-2">
                    <Users size={20} className="text-innovation-gold" /> 学生自主申报
                  </h3>
                  <div className="text-slate-600 space-y-2 text-sm">
                    <p><strong>提交材料：</strong>项目申报书（含创意、可行性、需求）</p>
                    <p><strong>评审机制：</strong></p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">优秀</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">良好</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">待完善</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: School-Enterprise */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1 w-full pl-12 md:pl-0">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-cnnu-blue mb-2 flex items-center md:justify-end gap-2">
                    校企合作项目导入 <Briefcase size={20} className="text-innovation-gold" />
                  </h3>
                  <div className="text-slate-600 space-y-2 text-sm">
                    <p>鼓励合作企业提出实践性项目</p>
                    <p>启智双创工作室统一对接，面向学生开放申请</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cnnu-blue rounded-full border-4 border-white flex items-center justify-center z-10 order-1 md:order-2 mt-[-2rem] md:mt-0">
                <span className="text-white font-bold text-xs">3</span>
              </div>
              <div className="md:w-5/12 pl-12 md:pl-8 order-3">
                 <span className="text-slate-400 text-sm italic">持续进行</span>
              </div>
            </div>

             {/* Step 4: Two-way Selection */}
             <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-5/12 mb-4 md:mb-0 text-right pr-12 md:pr-8 order-2 md:order-1 hidden md:block">
                 <div className="inline-flex items-center text-innovation-gold font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">
                  <Calendar size={14} className="mr-2" />
                  当年12月末 - 次年3月
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cnnu-blue rounded-full border-4 border-white flex items-center justify-center z-10 order-1 mt-[-2rem] md:mt-0">
                <span className="text-white font-bold text-xs">4</span>
              </div>
              <div className="md:w-5/12 pl-0 md:pl-8 order-3 md:order-3 w-full">
                 <div className="md:hidden mb-2 ml-12">
                   <div className="inline-flex items-center text-innovation-gold font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} className="mr-2" />
                    当年12月末 - 次年3月
                  </div>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ml-12 md:ml-0">
                  <h3 className="text-xl font-bold text-cnnu-blue mb-2 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-innovation-gold" /> 师生双向选择机制
                  </h3>
                  <ul className="text-slate-600 text-sm space-y-2 list-disc list-inside">
                    <li>学生最多选择3个导师项目，按优先级排序</li>
                    <li>导师面试，增加匹配质量</li>
                    <li>工作室推荐候选导师，双向沟通确认</li>
                    <li>如无匹配意愿，工作室协调其他导师</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Fairness Mechanism Card */}
        <div className="mt-20">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl shadow-sm">
            <div className="flex items-start">
              <AlertCircle className="text-red-500 mr-4 mt-1 flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-3">公平性保障机制 (防止项目集中)</h3>
                <p className="text-red-700 mb-2 font-medium">硬性规定：</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <span className="block text-sm text-slate-500">限制一</span>
                    <span className="font-bold text-slate-800">每位导师最多同时指导 <span className="text-red-600 text-xl">1</span> 个大创项目</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <span className="block text-sm text-slate-500">限制二</span>
                    <span className="font-bold text-slate-800">每位导师最多同时指导 <span className="text-red-600 text-xl">3</span> 个大赛项目</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};