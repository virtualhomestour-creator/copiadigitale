import { Users, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const values = [{
    icon: <Target className="h-8 w-8" />,
    title: "Innovazione",
    description: "Utilizziamo le tecnologie più avanzate per creare esperienze digitali che superano le aspettative."
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Collaborazione",
    description: "Lavoriamo a stretto contatto con i nostri clienti per comprendere e realizzare la loro visione."
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Qualità",
    description: "Ogni progetto viene realizzato con la massima attenzione ai dettagli e standard professionali."
  }, {
    icon: <Zap className="h-8 w-8" />,
    title: "Velocità",
    description: "Tempi di consegna rapidi senza compromettere la qualità del risultato finale."
  }];
  return <section id="chi-siamo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk text-navy-deep mb-6">
                Chi siamo
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Siamo <strong>pionieri della realtà digitale</strong> per aziende, agenzie e professionisti. 
                Crediamo che ogni spazio meriti di essere vissuto anche online, trasformando ambienti 
                fisici in esperienze digitali coinvolgenti.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Il nostro team combina expertise tecnica, creatività e passione per l'innovazione. 
                Trasformiamo la visione dei nostri clienti in realtà digitale, 
                creando soluzioni che generano risultati concreti.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-digital-blue/10 to-digital-purple/10 p-6 rounded-xl border-l-4 border-digital-blue">
              <h3 className="text-xl font-space-grotesk font-semibold text-navy-deep mb-3">
                La nostra missione
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Democratizzare l'accesso alle tecnologie immersive, permettendo a ogni azienda 
                di competere nel mercato digitale con strumenti professionali e soluzioni innovative.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space-grotesk font-bold text-navy-deep mb-8 text-center">
                I nostri valori
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-digital-blue to-digital-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {value.icon}
                        </div>
                      </div>
                      <h4 className="font-space-grotesk font-semibold text-navy-deep mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Team Stats */}
            <div className="bg-gradient-digital p-6 rounded-xl text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">5+</div>
                  <div className="text-sm opacity-90">Anni di esperienza</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">5+</div>
                  <div className="text-sm opacity-90">Specialisti</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-90">Settori serviti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;