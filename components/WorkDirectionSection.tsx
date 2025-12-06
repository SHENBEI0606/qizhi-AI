import React from 'react';
import { Trophy, Code2, Printer, Palette, Video } from 'lucide-react';

export const WorkDirectionSection: React.FC = () => {
  return (
    <section id="direction" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">工作方向</h2>
          <div className="w-24 h-1 bg-cnnu-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Innovation & Entrepreneurship */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-cnnu-blue">
              <Trophy size={40} />
            </div>
            <h3 className="text-2xl font-bold text-cnnu-blue mb-4">创新创业方向</h3>
            <p className="text-slate-600 leading-relaxed max-w-md">
              师生共研教育项目，大学生创新创业训练计划项目、大学生创新大赛（原互联网+）、计算机软件设计（机器人）大赛等，<span className="font-semibold text-slate-800">孵化专利软著</span>。
            </p>
          </div>

          {/* Technical Project Learning */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-innovation-gold">
              <Code2 size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">技术项目式学习</h3>
            <p className="text-slate-600 leading-relaxed max-w-md">
              承接企业技术项目订单，边做边学赚佣金，产教分润，<span className="font-semibold text-slate-800">能力证书直达就业</span>。
            </p>
          </div>
        </div>

        {/* Other Businesses Strip */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
           <h4 className="text-center text-slate-400 font-medium mb-6 uppercase tracking-widest text-sm">其他业务支持</h4>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 p-4 bg-slate-50 rounded-lg">
                 <Palette className="text-purple-500" />
                 <span className="font-bold text-slate-700">文创设计</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-slate-50 rounded-lg">
                 <Printer className="text-blue-500" />
                 <span className="font-bold text-slate-700">3D打印礼品</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-slate-50 rounded-lg">
                 <Video className="text-pink-500" />
                 <span className="font-bold text-slate-700">录课中心 (精品课制作)</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};