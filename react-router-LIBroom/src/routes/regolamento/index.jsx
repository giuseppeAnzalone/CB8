import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";

export default function Regolamento() {
  return (
    <div>
      <NavBar />
      <div className={styles.Regolamento}>
        <h1>Regolamento della Biblioteca Virtuale</h1>
        <p>
          Benvenuto nella nostra Biblioteca Virtuale, uno spazio digitale
          dedicato alla conoscenza, all'apprendimento e alla condivisione
          culturale. Affinché tu possa godere appieno dell'esperienza offerta
          dalla nostra piattaforma, ti preghiamo di leggere attentamente e
          rispettare le seguenti regole:
        </p>
        <h4>Accesso e Account:</h4>
        <ul>
          <li>
            Per accedere ai servizi della Biblioteca Virtuale, è necessario
            creare un account personale.
          </li>
          <li>
            L'account è personale e non può essere condiviso con terzi. Sei
            responsabile di tutte le attività svolte con il tuo account.
          </li>
        </ul>
        <h4>Utilizzo Responsabile:</h4>
        <ul>
          <li>
            L'uso della biblioteca è finalizzato all'arricchimento culturale e
            all'apprendimento. L'utente si impegna a utilizzare la piattaforma
            in modo responsabile e rispettoso.
          </li>
        </ul>
        <h4>Pubblicazioni e Contenuti:</h4>
        <ul>
          <li>
            La Biblioteca Virtuale offre una vasta gamma di pubblicazioni,
            rispettando i diritti d'autore. Gli utenti sono tenuti a rispettare
            tali diritti e a non condividere o distribuire materiali in
            violazione delle leggi sulla proprietà intellettuale.
          </li>
        </ul>
        <h4>Riservatezza e Privacy:</h4>
        <ul>
          <li>
            Tutte le informazioni personali fornite durante la registrazione e
            l'utilizzo della biblioteca sono trattate con la massima
            riservatezza. La tua privacy è importante per noi.
          </li>
        </ul>
        <h4>Rispetto delle Leggi:</h4>
        <ul>
          <li>
            Gli utenti devono rispettare tutte le leggi e i regolamenti
            applicabili durante l'utilizzo della piattaforma, inclusi quelli
            relativi alla proprietà intellettuale, alla privacy e alla sicurezza
            informatica.
          </li>
        </ul>
        <h4>Comunicazione Rispettosa:</h4>
        <ul>
          <li>
            Ogni forma di comunicazione all'interno della biblioteca, inclusi
            commenti e recensioni, deve essere rispettosa e costruttiva. Non
            sono tollerati comportamenti offensivi o minacciosi.
          </li>
        </ul>
        <h4>Manutenzione del Sistema:</h4>
        <ul>
          <li>
            Per garantire un'esperienza ottimale, potremmo effettuare
            aggiornamenti e manutenzioni periodiche. Gli utenti saranno
            informati tempestivamente di eventuali interruzioni di servizio.
          </li>
        </ul>
        <h4>Segnalazione di Problemi:</h4>
        <ul>
          <li>
            Gli utenti sono incoraggiati a segnalare qualsiasi problema o
            comportamento sospetto per garantire la sicurezza e la qualità del
            servizio.
          </li>
        </ul>
        <p>
          Violare questi regolamenti potrebbe comportare la sospensione o la
          chiusura dell'account. Grazie per il tuo impegno nel mantenere la
          nostra Biblioteca Virtuale un luogo accogliente e arricchente per
          tutti gli appassionati di conoscenza.
        </p>
        <p>Buona esplorazione!</p>
      </div>
      <Footer />
    </div>
  );
}
