import React from 'react';
import { ExternalLink, Construction, MonitorPlay } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
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
          
          {/* Project 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
               <MonitorPlay className="text-white w-16 h-16 relative z-10" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">启智AI助力教学网</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">全新改版中</span>
              </div>
              <p className="text-slate-600 mb-6">
                基于人工智能的教学辅助平台，旨在为教师提供智能化的教学工具和资源，提升教学效率与质量。
              </p>
              <button className="text-cnnu-blue font-bold flex items-center group-hover:underline">
                了解详情 <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
               <Construction className="text-white w-16 h-16 relative z-10" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">智联课本</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">全力开发中</span>
              </div>
              <p className="text-slate-600 mb-6">
                <span className="block font-semibold mb-2 text-slate-800">智能交互 · 个性学习 · 数据驱动</span>
                基于大数据和人工智能技术的智能教育平台，为每一位学习者提供个性化的学习体验。支持3D教材互动、AI智能助手。
              </p>
               <button className="text-cnnu-blue font-bold flex items-center group-hover:underline">
                了解详情 <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};