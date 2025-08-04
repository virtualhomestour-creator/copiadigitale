import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <Phone className="h-6 w-6" />,
    title: "Telefono",
    value: "+39 02 1234 5678",
    action: "tel:+390212345678"
  }, {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "info@copiadigitale.it",
    action: "mailto:info@copiadigitale.it"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Sede",
    value: "Roma, Italia",
    action: null
  }, {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    value: "+39 333 123 4567",
    action: "https://wa.me/393331234567"
  }];
  return <section id="contatti" className="py-20 bg-navy-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-space-grotesk text-white mb-6">
            Iniziamo il tuo progetto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto a trasformare i tuoi spazi in esperienze digitali coinvolgenti? 
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Parliamo del tuo progetto
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Siamo qui per rispondere a tutte le tue domande e guidarti nella scelta 
                della soluzione migliore per la tua attività. Ogni consulenza è gratuita 
                e senza impegno.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => <Card key={index} className="bg-navy-light border-gray-700 hover:bg-navy-light/80 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-digital p-3 rounded-lg">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        {info.action ? <a href={info.action} className="text-gray-300 hover:text-white transition-colors duration-300">
                            {info.value}
                          </a> : <span className="text-gray-300">{info.value}</span>}
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-space-grotesk font-semibold text-white">
                Azioni rapide
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white hover:bg-white transition-colors duration-300 text-[#0066ff]"
                  onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30oqvcrjnUVoud_eU8TAFRYH_89_THDfmcNthVKLtnu_Xbp7UDWztday_zNmzXJIPq4cORSU2v', '_blank')}
                >
                  Prenota una Video Call
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-space-grotesk text-navy-deep">
                Richiedi un preventivo gratuito
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input type="text" name="name" placeholder="Nome e Cognome *" value={formData.name} onChange={handleChange} required className="border-gray-300 focus:border-digital-blue" />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="border-gray-300 focus:border-digital-blue" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input type="tel" name="phone" placeholder="Telefono" value={formData.phone} onChange={handleChange} className="border-gray-300 focus:border-digital-blue" />
                  </div>
                  <div>
                    <Input type="text" name="company" placeholder="Azienda" value={formData.company} onChange={handleChange} className="border-gray-300 focus:border-digital-blue" />
                  </div>
                </div>

                <div>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-digital-blue focus:border-transparent">
                    <option value="">Seleziona un servizio</option>
                    <option value="virtual-tour">Virtual Tour 360°</option>
                    <option value="sito-web">Sviluppo Sito Web</option>
                    <option value="fotografia">Fotografia Professionale</option>
                    <option value="google-maps">Google Maps & Street View</option>
                    <option value="immobiliare">Servizi Immobiliari</option>
                    <option value="nautica">Servizi Nautici</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <Textarea name="message" placeholder="Descrivi il tuo progetto..." value={formData.message} onChange={handleChange} rows={4} className="border-gray-300 focus:border-digital-blue" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-digital hover:opacity-90 transition-opacity duration-300">
                  <Send className="mr-2 h-5 w-5" />
                  Invia Richiesta
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Risponderemo entro 24 ore. I tuoi dati sono protetti e non verranno condivisi.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;