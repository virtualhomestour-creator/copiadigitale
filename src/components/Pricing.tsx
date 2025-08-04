import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Pricing = () => {
  const packages = [{
    name: "Starter",
    description: "Perfetto per piccole attività che vogliono iniziare",
    features: ["Virtual Tour 360° fino a 10 punti", "Galleria fotografica (20 foto)", "Integrazione Google Maps", "Condivisione sui social", "Supporto base per 3 mesi"],
    popular: false,
    gradient: "from-digital-blue to-digital-cyan"
  }, {
    name: "Professional",
    description: "La scelta ideale per aziende in crescita",
    features: ["Virtual Tour 360° fino a 25 punti", "Galleria fotografica (50 foto)", "Sito web responsive incluso", "SEO base e Google My Business", "Inserimento su 2 portali specializzati", "Video promozionale 60 secondi", "Supporto prioritario per 6 mesi"],
    popular: true,
    gradient: "from-digital-purple to-digital-blue"
  }, {
    name: "Enterprise",
    description: "Soluzione completa per grandi progetti",
    features: ["Virtual Tour 360° illimitato", "Galleria fotografica illimitata", "Sito web avanzato con CMS", "SEO avanzato e campagne Google Ads", "Inserimento su tutti i portali", "Video promozionale professionale", "App mobile dedicata", "Supporto dedicato per 12 mesi"],
    popular: false,
    gradient: "from-digital-cyan to-neon-green"
  }];
  return <section id="pacchetti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk text-navy-deep mb-6">
            Le Nostre Soluzioni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri le nostre soluzioni digitali complete per trasformare la tua presenza online 
            e portare la tua attività al livello successivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => <Card key={index} className={`relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'border-2 border-digital-blue shadow-xl scale-105' : 'border-gray-200 hover:shadow-lg'}`}>
              {pkg.popular && <div className="absolute top-0 left-0 right-0 bg-gradient-digital py-2">
                  <div className="flex items-center justify-center text-white font-semibold">
                    <Star className="h-4 w-4 mr-1" />
                    Più Popolare
                  </div>
                </div>}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-2xl font-space-grotesk text-navy-deep mb-4">
                  {pkg.name}
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>)}
                </ul>
                
                <Button className={`w-full py-3 ${pkg.popular ? 'bg-gradient-digital hover:opacity-90' : 'bg-gray-800 hover:bg-gray-700'} transition-all duration-300`} size="lg">
                  Scegli {pkg.name}
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Pricing;