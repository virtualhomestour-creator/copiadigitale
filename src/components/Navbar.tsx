import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    label: 'Servizi',
    href: '#servizi'
  }, {
    label: 'Portfolio',
    href: '#portfolio'
  }, {
    label: 'Chi Siamo',
    href: '#chi-siamo'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-space-grotesk bg-gradient-digital bg-clip-text text-transparent">
              Copiadigitale
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map(item => <a
                  key={item.href} 
                  onClick={() => scrollToSection(item.href)} 
                  className={`transition-colors duration-300 hover:text-digital-blue font-medium cursor-pointer ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.label}
                </a>)}
              <Button onClick={() => scrollToSection('#contatti')} className="text-white transition-colors duration-300 bg-blue-500 hover:bg-blue-400">
                Contattaci
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-700' : 'text-white'} transition-colors duration-300`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="block px-3 py-2 text-gray-700 hover:text-digital-blue transition-colors duration-300 font-medium w-full text-left">
                {item.label}
              </button>)}
            <div className="px-3 py-2">
              <Button onClick={() => scrollToSection('#contatti')} className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300">
                Contattaci
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;