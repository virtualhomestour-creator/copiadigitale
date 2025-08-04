import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/80 via-digital-purple/70 to-digital-cyan/80 z-10"></div>
        <div className="w-full h-full bg-gradient-radial from-digital-purple/20 to-navy-deep animate-pulse-glow"></div>
      </div>


      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-space-grotesk text-white mb-6 animate-fade-in">
            Diamo vita digitale
            <span className="block bg-gradient-neon bg-clip-text text-transparent">
              ai tuoi spazi
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Virtual Tour 3D immersivi, siti web moderni e presenza digitale completa. 
            Portiamo i tuoi ambienti online, in modo spettacolare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <Button onClick={() => scrollToSection('#portfolio')} size="lg" className="group bg-gradient-digital hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Guarda un Virtual Tour
            </Button>
            
            <Button onClick={() => scrollToSection('#contatti')} size="lg" variant="outline" className="group border-white/50 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold text-[#0066ff]">
              Contattaci
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Tour Creati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Tasso di Soddisfazione</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-300">Consegna Media</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;