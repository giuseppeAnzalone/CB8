import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import style from "./index.module.scss";

export default function () {
  return (
    <div>
      <NavBar />
      <div className={style.Copyright}>
        <h1>Copyright e Diritti d'Autore</h1>
        <p>
          Benvenuto nella pagina dedicata ai diritti d'autore della nostra
          Biblioteca Virtuale. La protezione dei diritti di proprietà
          intellettuale è fondamentale per noi, e ci impegniamo a rispettare e
          far rispettare le leggi in materia di copyright. Di seguito sono
          riportati i principi e le linee guida relativi al copyright
          all'interno della nostra piattaforma:
        </p>
        <h4>Pubblicazioni Protette da Copyright:</h4>
        <ul>
          <li>
            La maggior parte delle pubblicazioni presenti nella Biblioteca
            Virtuale sono protette da copyright. Gli utenti sono tenuti a
            rispettare i diritti d'autore e a utilizzare i materiali
            conformemente alle leggi applicabili.
          </li>
        </ul>
        <h4>Utilizzo Personale:</h4>
        <ul>
          <li>
            Gli utenti possono utilizzare le pubblicazioni presenti nella
            biblioteca a scopo personale, di studio o di ricerca, nel rispetto
            delle leggi sul copyright.
          </li>
        </ul>
        <h4>Vietata la Pirateria:</h4>
        <ul>
          <li>
            La copia, la distribuzione non autorizzata, la condivisione pubblica
            e ogni altra forma di pirateria sono strettamente proibite. Si prega
            di rispettare i diritti degli autori e degli editori.
          </li>
        </ul>
        <h4>Segnalazione di Violazioni:</h4>
        <ul>
          <li>
            In caso di presunte violazioni del copyright, gli utenti sono
            incoraggiati a segnalarle tempestivamente. Adotteremo misure
            appropriate per affrontare le violazioni e garantire il rispetto dei
            diritti d'autore.
          </li>
        </ul>
        <h4>Proprietà Intellettuale dei Utenti:</h4>
        <ul>
          <li>
            Gli utenti mantengono i diritti di proprietà intellettuale sul
            contenuto da loro creato e condiviso nella Biblioteca Virtuale.
            Tuttavia, concedono automaticamente una licenza per l'uso, la
            distribuzione e la visualizzazione di tali contenuti all'interno
            della piattaforma.
          </li>
        </ul>
        <h4>Procedure DMCA:</h4>
        <ul>
          <li>
            Rispettiamo la legge statunitense Digital Millennium Copyright Act
            (DMCA) e adotteremo le adeguate procedure di notifica e takedown in
            risposta a segnalazioni di violazione del copyright.
          </li>
        </ul>
        <h4>Aggiornamenti alle Politiche:</h4>
        <ul>
          <li>
            Le politiche relative al copyright possono essere soggette ad
            aggiornamenti. Gli utenti saranno informati tempestivamente di
            eventuali modifiche attraverso i canali di comunicazione della
            piattaforma.
          </li>
        </ul>
        <p>
          La violazione delle politiche di copyright potrebbe comportare la
          sospensione o la chiusura dell'account dell'utente. Grazie per il tuo
          impegno nel rispettare i diritti d'autore e contribuire a mantenere un
          ambiente di apprendimento etico e legale all'interno della nostra
          Biblioteca Virtuale.
        </p>
      </div>
      <Footer />
    </div>
  );
}
