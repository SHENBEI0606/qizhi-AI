import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '简介', href: '#introduction' },
    { name: '组织架构', href: '#structure' },
    { name: '培养模式', href: '#cultivation' },
    { name: '工作方向', href: '#direction' },
    { name: '孵化机制', href: '#mechanism' },
    { name: '在研项目', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-cnnu-blue text-white' : 'bg-white text-cnnu-blue'}`}>
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg md:text-xl tracking-tight leading-none ${isScrolled ? 'text-cnnu-blue' : 'text-white'}`}>
                启智双创工作室
              </span>
              <span className={`text-[10px] uppercase tracking-wider ${isScrolled ? 'text-slate-500' : 'text-blue-100'}`}>
                长春师范大学教育学院
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-innovation-gold ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#footer" className="bg-innovation-gold hover:bg-amber-600 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm">
              加入我们
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-cnnu-blue rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a href="#footer" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center mt-2 bg-innovation-gold text-white px-5 py-3 rounded-lg font-medium">
              加入我们
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
