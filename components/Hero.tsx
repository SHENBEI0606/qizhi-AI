import React from 'react';
import { ArrowRight, Sparkles, BrainCircuit, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradient & Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 z-0"></div>
      
      {/* Abstract Shapes (inspired by PDF design) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-blue-100/20 to-transparent skew-x-12 transform translate-x-20"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cnnu-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-innovation-gold/5 rounded-full blur-3xl"></div>

      {/* Vertical decorative line from PDF */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-blue-200 to-transparent hidden lg:block"></div>
      <div className="absolute top-[10%] right-[12%] w-16 h-64 bg-gradient-to-b from-blue-500 to-blue-600 opacity-80 blur-[2px] hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-2/3 text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center space-x-2 bg-white shadow-sm border border-blue-100 px-4 py-1.5 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-cnnu-blue animate-pulse"></span>
              <span className="text-sm font-bold text-cnnu-blue tracking-wide">长春师范大学 · 教育学院</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-slate-900">
              <span className="text-cnnu-blue">“启智”</span> <br className="md:hidden" />
              <span className="text-slate-800">双创工作室</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed lg:mx-0 mx-auto">
              以<span className="font-bold text-cnnu-blue">教育技术学</span>专业为基石，深度融合<span className="font-bold text-cnnu-blue">人工智能</span>技术。<br/>
              打造“产教融合、校企协同”的创新创业孵化平台。
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <a href="#projects" className="group w-full sm:w-auto bg-cnnu-blue hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-900/20 flex items-center justify-center">
                查看在研项目
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#cultivation" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-cnnu-blue border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center">
                了解培养模式
              </a>
            </div>
          </div>

          {/* Right side illustration content */}
          <div className="lg:w-1/3 mt-16 lg:mt-0 relative hidden lg:block">
             {/* Floating cards */}
             <div className="relative z-10">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mb-6 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-blue-100 text-cnnu-blue rounded-lg">
                      <BrainCircuit size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">AI + 教育</h3>
                      <p className="text-xs text-slate-500">前沿技术深度融合</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 ml-12 transform hover:-translate-y-1 transition-transform duration-300 delay-100">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-orange-100 text-innovation-gold rounded-lg">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">全链条孵化</h3>
                      <p className="text-xs text-slate-500">从创意到落地</p>
                    </div>
                  </div>
                </div>

                 <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mt-6 transform hover:-translate-y-1 transition-transform duration-300 delay-200">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">能力认证</h3>
                      <p className="text-xs text-slate-500">直达就业推荐</p>
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