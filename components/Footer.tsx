import React from 'react';
import { QrCode } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-cnnu-light mr-3 rounded-sm"></span>
              启智双创工作室
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              长春师范大学教育学院<br/>
              致力于培养创新型教育人才，打造优质双创平台。<br/>
              以技术赋能教育，以创新引领未来。
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-6">联系我们</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>地址：长春师范大学教育学院楼</p>
              <p>邮箱：contact@qizhi-studio.edu.cn</p>
            </div>
          </div>

          {/* Join Us (QR Code) */}
          <div className="md:col-span-1 flex flex-col items-start md:items-end">
             <div className="bg-white p-4 rounded-xl text-center">
                <div className="w-32 h-32 bg-slate-200 mb-2 flex items-center justify-center rounded-lg border-2 border-slate-100">
                   {/* Placeholder for QR Code */}
                   <QrCode size={64} className="text-slate-400" />
                </div>
                <p className="text-slate-900 font-bold text-sm">微信扫码加入</p>
             </div>
             <p className="text-xs text-slate-500 mt-4 max-w-[10rem] text-center md:text-right">
               扫码关注公众号或加入招新群，获取最新资讯
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