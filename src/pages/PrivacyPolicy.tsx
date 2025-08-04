import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-navy-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-digital-cyan hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Torna al sito</span>
            </Link>
            
            <h1 className="text-4xl font-bold font-space-grotesk bg-gradient-neon bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p>
              Ai sensi dell'articolo 13 del Regolamento (UE) 2016/679 (GDPR), desideriamo informare gli utenti che i dati personali forniti tramite il modulo di contatto saranno trattati da <strong>Copia Digitale Immobiliare S.R.L.S.</strong>, con sede legale in Via Marsala 29H, 00185 Roma (RM), P.IVA 18180011001, in qualità di Titolare del trattamento.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Dati Raccolti</h2>
            <p>
              I dati raccolti includono nome, cognome, indirizzo email, numero di telefono, eventuali preferenze sul servizio richiesto e, solo in caso di esplicito consenso, la volontà di ricevere comunicazioni promozionali tramite newsletter.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Finalità del Trattamento</h2>
            <p>
              La finalità del trattamento è quella di rispondere alle richieste dell'utente e fornire informazioni sui servizi offerti. Inoltre, se l'utente ha selezionato l'apposita casella, i dati saranno utilizzati anche per l'invio di newsletter e comunicazioni promozionali.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Base Giuridica</h2>
            <p>
              La base giuridica del trattamento è rappresentata dall'art. 6, par. 1, lett. b del GDPR (esecuzione di misure precontrattuali su richiesta dell'interessato) per la gestione delle richieste di contatto, e dall'art. 6, par. 1, lett. a del GDPR (consenso) per l'invio di comunicazioni promozionali.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Modalità di Trattamento</h2>
            <p>
              Il trattamento dei dati avviene con strumenti informatici e/o telematici, nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione e riservatezza. Sono adottate misure tecniche e organizzative adeguate a garantire un livello di sicurezza conforme al rischio.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Conservazione dei Dati</h2>
            <p>
              I dati saranno conservati per il tempo necessario a gestire la richiesta di contatto e, in caso di iscrizione alla newsletter, fino a revoca del consenso. È sempre possibile disiscriversi dalle comunicazioni promozionali cliccando il link in fondo alle email ricevute.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Comunicazione dei Dati</h2>
            <p>
              I dati non saranno oggetto di diffusione. Tuttavia, potranno essere trattati da soggetti debitamente autorizzati dal Titolare, nonché da responsabili esterni incaricati da Copia Digitale Immobiliare S.R.L.S., ad esempio per la gestione tecnica del sito o del modulo di contatto. L'elenco completo dei responsabili del trattamento può essere richiesto in qualsiasi momento inviando una email all'indirizzo PEC: <a href="mailto:copiadigitaleimmobiliaresrls@pecimprese.it" className="text-digital-cyan hover:text-white transition-colors">copiadigitaleimmobiliaresrls@pecimprese.it</a>
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Diritti dell'Interessato</h2>
            <p>
              L'utente ha il diritto di accedere ai propri dati personali, di chiederne la rettifica, la cancellazione, la limitazione del trattamento, la portabilità o di opporsi al trattamento. Può inoltre proporre reclamo al Garante per la protezione dei dati personali.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Conferimento dei Dati</h2>
            <p>
              Il conferimento dei dati contrassegnati come obbligatori è necessario per poter gestire correttamente la richiesta. Il mancato conferimento comporta l'impossibilità di procedere. Il consenso all'invio della newsletter è facoltativo e il suo mancato rilascio non pregiudica la possibilità di essere contattati per altre finalità.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contatti</h2>
            <p>
              Per qualsiasi dubbio o esercizio dei diritti, è possibile scrivere all'indirizzo PEC: <a href="mailto:copiadigitaleimmobiliaresrls@pecimprese.it" className="text-digital-cyan hover:text-white transition-colors">copiadigitaleimmobiliaresrls@pecimprese.it</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;