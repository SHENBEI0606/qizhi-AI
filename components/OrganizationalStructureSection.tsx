import React from 'react';

interface DeptData {
  title: string;
  subtitle?: string;
  items: string[];
  theme: 'teal' | 'indigo' | 'pink' | 'rose';
}

const structureData: DeptData[] = [
  {
    title: "商务产品中心",
    items: ["市场商务部", "产品策划部", "秘书管理处"],
    theme: "teal"
  },
  {
    title: "技术培训中心",
    subtitle: "(比赛中心)",
    items: ["视频", "AI应用", "建模", "编程"],
    theme: "indigo"
  },
  {
    title: "项目工作中心",
    items: ["3D打印工作坊", "视频绘本工作坊", "精品课程工作组", "系统开发工作组", "教育网站工作组", "机器人研发小队"],
    theme: "pink"
  },
  {
    title: "创业孵化器",
    items: ["创意科技公司", "更多公司 ..."],
    theme: "rose"
  }
];

const ThemeStyles = {
  teal: {
    header: "bg-teal-100 text-teal-800 border-teal-200",
    item: "hover:border-teal-300 hover:text-teal-700",
    line: "bg-teal-200"
  },
  indigo: {
    header: "bg-indigo-100 text-indigo-800 border-indigo-200",
    item: "hover:border-indigo-300 hover:text-indigo-700",
    line: "bg-indigo-200"
  },
  pink: {
    header: "bg-pink-100 text-pink-800 border-pink-200",
    item: "hover:border-pink-300 hover:text-pink-700",
    line: "bg-pink-200"
  },
  rose: {
    header: "bg-rose-100 text-rose-800 border-rose-200",
    item: "hover:border-rose-300 hover:text-rose-700",
    line: "bg-rose-200"
  }
};

export const OrganizationalStructureSection: React.FC = () => {
  return (
    <section id="structure" className="py-20 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">组织架构</h2>
          <div className="w-24 h-1 bg-cnnu-blue mx-auto rounded-full"></div>
        </div>

        {/* --- Root Node (Studio) --- */}
        <div className="flex flex-col items-center justify-center relative z-20 mb-8 lg:mb-16">
          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 text-red-900 px-8 py-4 rounded-xl shadow-lg font-bold text-xl md:text-2xl relative">
            启智双创工作室
            {/* Desktop Vertical Line Down from Root */}
            <div className="absolute left-1/2 -bottom-16 w-0.5 h-16 bg-slate-300 transform -translate-x-1/2 hidden lg:block"></div>
          </div>
        </div>

        {/* --- Desktop Tree Lines Connector --- */}
        {/* This container sits between Root and the Grid to draw the horizontal bracket line */}
        {/* Adjusted width to 75% to better match the center points of the 4 columns */}
        <div className="relative w-[75%] mx-auto h-8 hidden lg:block mb-8">
           {/* The horizontal line across all children */}
           <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-300 rounded-full"></div>
           
           {/* Vertical connectors touching the horizontal line are drawn in the grid items below */}
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto relative z-10">
          
          {structureData.map((dept, index) => {
            const styles = ThemeStyles[dept.theme];
            
            return (
              <div key={index} className="flex flex-col relative group">
                
                {/* Desktop: Vertical Line Up from Card to Horizontal Bar */}
                <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-slate-300 transform -translate-x-1/2 hidden lg:block group-hover:bg-slate-400 transition-colors"></div>
                
                {/* Desktop: Little Dot at connection point */}
                <div className="absolute left-1/2 -top-8 w-2 h-2 bg-slate-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block group-hover:bg-slate-400 transition-colors"></div>

                {/* Center Header Card */}
                <div className={`
                  ${styles.header} border-2 rounded-t-xl p-4 text-center shadow-md relative z-10
                  flex flex-col items-center justify-center min-h-[5rem] transition-transform hover:-translate-y-1 duration-300
                `}>
                  <h3 className="font-bold text-lg leading-tight">{dept.title}</h3>
                  {dept.subtitle && <span className="text-xs opacity-80 mt-1 font-medium">{dept.subtitle}</span>}
                </div>

                {/* Department Items List */}
                <div className="bg-slate-50 border-x-2 border-b-2 border-slate-100 rounded-b-xl p-4 space-y-3 shadow-sm flex-grow">
                  {dept.items.map((item, i) => (
                    <div 
                      key={i} 
                      className={`
                        bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-600 font-medium text-center shadow-sm
                        transition-all duration-200 cursor-default
                        ${styles.item}
                      `}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View Visual Guide */}
        <div className="mt-8 text-center lg:hidden">
          <div className="inline-block px-4 py-2 bg-slate-50 rounded-full text-xs text-slate-400">
            上下滑动查看完整架构
          </div>
        </div>

      </div>
    </section>
  );
};