
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Virtual Tour 360°',
    'Sviluppo Siti Web',
    'Fotografia Professionale',
    'Google Maps & Street View',
    'Servizi Immobiliari',
    'Servizi Nautici'
  ];

  const quickLinks = [
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contatti', href: '#contatti' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/copia_digitale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/copia-digitale/posts/?feedView=all', label: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-space-grotesk bg-gradient-neon bg-clip-text text-transparent mb-4">
                  Copiadigitale
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Diamo vita digitale ai tuoi spazi con virtual tour immersivi, 
                  siti web moderni e presenza digitale completa.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-digital-cyan" />
                  <span className="text-gray-300">Milano, Italia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-digital-cyan" />
                  <a href="tel:+390212345678" className="text-gray-300 hover:text-white transition-colors">
                    +39 02 1234 5678
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-digital-cyan" />
                  <a href="mailto:info@copiadigitale.it" className="text-gray-300 hover:text-white transition-colors">
                    info@copiadigitale.it
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-space-grotesk font-semibold mb-6">
                Servizi
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#servizi"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#servizi');
                      }}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-space-grotesk font-semibold mb-6">
                Link Rapidi
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-space-grotesk font-semibold mb-4">
                  Rimani aggiornato
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Iscriviti alla nostra newsletter per ricevere le ultime novità e consigli.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="flex-1 px-4 py-2 bg-navy-light border border-gray-600 rounded-l-lg focus:outline-none focus:border-digital-blue text-white"
                  />
                  <button className="bg-gradient-digital px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4">Seguici</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-navy-light p-3 rounded-lg hover:bg-gradient-digital transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Copiadigitale. Tutti i diritti riservati.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Termini di Servizio
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-gray-700 py-4">
          <div className="text-center text-gray-400 text-xs space-y-1">
            <div>© 2025 Copia Digitale Immobiliare S.R.L.S.</div>
            <div>P.IVA: 18180011001</div>
            <div>Sede legale: Via Marsala 29H, 00185 Roma (RM)</div>
            <div>Email PEC: copiadigitaleimmobiliaresrls@pecimprese.it</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
