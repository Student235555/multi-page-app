import React from 'react';
import '../styles/Character.css';

const Character = (props) => {

    const chooseDesc = () => {
        switch(props.id) {

        case 'Odyseusz':
        return <p>Sprytny król Itaki, ulubieniec bogini Ateny, mąż Penelopy, ojciec Telemacha. Podczas wojny trojańskiej jeden z głównych doradców Agamemnona. Wymyślił fortel, dzięki któremu Grecy wygrali wojnę. Jego powrót do ojczyzny trwał dziesięć lat i jest tematem <span>Odysei</span> Homera, opisującej sławne przygody z cylopem Polifemem, czarownicą Kirke, potworami Scyllą i Charybdą oraz syrenami.</p>;

        case 'Dedal':
        return <p>Mistrz rzemiosł, znany wynalazca i artysta. Stworzył krąg taneczny Ariadny i wielki labirynt, więzienie Minotaura. Więziony na Krecie razem z synem, Ikarem, wymyślił plan ucieczki: skonstruował dwie pary skrzydeł z piór połączonych woskiem. Uciekł z synem, lecz Ikar podfrunął zbyt blisko słońca i wosk się roztopił. Chłopiec spadł do morza i utonął.</p>;

        case 'Achilles':
        return <p>Syn nimfy wodnej Tetydy i króla Ftyi, Peleusa. Największy wojownik swojego pokolenia , najszybszy i najpiękniejszy. Jako nastolatek postawiony przed wyborem, czy chce mieć długie życie i pozostać nieznany, czy krótkie w sławie, wybrał to drugie. Pożeglował z Grekami do Troi. Jednak dziewiątego roku wojny pokłócił się z Agamemnonem i odmówił dalszego wojowania. Na pole bitwy powrócił dopiero po śmierci kochanka, Patroklesa, zabitego przez Hektora. W gniewie zabił wielkiego trojańskiego wojownika, po czym sam stracił życie z ręki Parysa wspomaganego przez Apolla.</p>;

        case 'Telemach':
        return <p>Jedyny syn Penelopy i Odyseusza, książę Itaki. W <span>Odysei</span> Homer przypisuje mu pomoc ojcu i zemstę na zalotnikach oblegających ich dom.</p>;

        case 'Telegonos':
        return <p>Syn Odyseusza i Kirke, mityczny założyciel miast Tusculum i Praeneste w Italii.</p>;

        default:
        return <p>Brak opisu w bazie</p>;
        }
      }

    return ( 
        <article className="character">
            <h1>{props.id}</h1>
            {chooseDesc()}
        </article>
     );
}
 
export default Character;