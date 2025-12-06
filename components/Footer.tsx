import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Brand Info */}
          <div className="max-w-2xl">
            <h3 className="text-white text-xl font-bold mb-6 flex items-center justify-center">
              <span className="w-2 h-6 bg-cnnu-light mr-3 rounded-sm"></span>
              启智双创工作室
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              长春师范大学教育学院<br/>
              致力于培养创新型教育人才，打造优质双创平台。<br/>
              以技术赋能教育，以创新引领未来。
            </p>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-600">
          <p className="mb-2">长春师范大学 教育学院</p>
          &copy; {new Date().getFullYear()} 启智双创工作室 版权所有
        </div>
      </div>
    </footer>
  );
};