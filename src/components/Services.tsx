import { Camera, Cog, Eye, Shield, Building, Zap, Globe, MapPin, Monitor, FileText, Video, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Services = () => {
  const coreServices = [{
    icon: <Globe className="h-8 w-8" />,
    title: "Virtual Tour e Digitalizzazione degli Spazi",
    description: "Creiamo esperienze immersive in 3D che trasformano luoghi reali in ambienti esplorabili online. Ideale per immobili, showroom, hotel, ristoranti, musei, cantieri e ambienti nautici.",
    gradient: "from-digital-blue to-digital-cyan"
  }, {
    icon: <MapPin className="h-8 w-8" />,
    title: "Google Maps & Posizionamento Online",
    description: "Inseriamo le attività su Google Maps e Street View, con ottimizzazione local SEO per migliorare la visibilità e attrarre clienti reali.",
    gradient: "from-digital-purple to-digital-blue"
  }, {
    icon: <Monitor className="h-8 w-8" />,
    title: "Siti Web Moderni per la Tua Attività",
    description: "Realizziamo siti web veloci, belli e ottimizzati per la conversione. Soluzioni su misura per immobili, agenzie, hotel, cantieri nautici.",
    gradient: "from-digital-cyan to-neon-green"
  }, {
    icon: <FileText className="h-8 w-8" />,
    title: "Presenza su Portali Immobiliari e Nautici",
    description: "Gestiamo la tua visibilità su portali come Immobiliare.it, Idealista, YachtWorld e altri. Dalla pubblicazione alla strategia di vendita.",
    gradient: "from-neon-green to-digital-blue"
  }];
  const enhancedServices = [{
    icon: <Camera className="h-8 w-8" />,
    title: "Fotografia & Motion Graphics per Aziende",
    description: "Servizi fotografici professionali, motion graphics e contenuti visual per rafforzare la tua immagine aziendale.",
    gradient: "from-digital-purple to-digital-cyan"
  }, {
    icon: <Video className="h-8 w-8" />,
    title: "Storytelling Visivo Corporate",
    description: "Contenuti narrativi che semplificano temi complessi come la sostenibilità, le risorse naturali e le operazioni industriali. Ideale per aziende con una storia da raccontare.",
    gradient: "from-digital-blue to-digital-purple"
  }, {
    icon: <Plane className="h-8 w-8" />,
    title: "Ispezioni con Droni & Raccolta Dati",
    description: "Utilizziamo droni avanzati (DJI Mavic 3 Enterprise RTK, Skydio X10) per effettuare rilievi e modellazioni 3D in ambienti industriali, anche pericolosi o difficili da raggiungere.",
    gradient: "from-digital-cyan to-neon-green"
  }, {
    icon: <Building className="h-8 w-8" />,
    title: "Digital Twin (Gemelli Digitali)",
    description: "Creazione di modelli digitali realistici per monitoraggio continuo, manutenzione predittiva e supporto alle decisioni operative.",
    gradient: "from-neon-green to-digital-blue"
  }];
  return <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk text-navy-deep mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diamo vita digitale ai tuoi spazi attraverso soluzioni innovative e personalizzate
          </p>
        </div>

        {/* Servizi Principali */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-space-grotesk text-navy-deep mb-4"> Servizi Principali</h3>
            <p className="text-lg text-gray-600">
              Il cuore di Copiadigitale - le nostre specializzazioni principali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-space-grotesk text-navy-deep group-hover:text-digital-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Servizi di Potenziamento */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-space-grotesk text-navy-deep mb-4"> Servizi Visivi di Potenziamento</h3>
            <p className="text-lg text-gray-600">
              Valore aggiunto che rende Copiadigitale una realtà completa e all'avanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {enhancedServices.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-space-grotesk text-navy-deep group-hover:text-digital-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-digital rounded-full">
            <span className="text-white font-semibold">
              Trasformiamo la tua visione in realtà digitale. Contattaci per una consulenza gratuita.
            </span>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;