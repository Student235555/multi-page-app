import React from 'react';
import '../styles/Character.css';

const Character = (props) => {

    const chooseCharDesc = () => {
        switch(props.id) {

        case 'Achilles':
        return <p>Syn nimfy wodnej Tetydy i króla Ftyi, Peleusa. Największy wojownik swojego pokolenia , najszybszy i najpiękniejszy. Jako nastolatek postawiony przed wyborem, czy chce mieć długie życie i pozostać nieznany, czy krótkie w sławie, wybrał to drugie. Pożeglował z Grekami do Troi. Jednak dziewiątego roku wojny pokłócił się z Agamemnonem i odmówił dalszego wojowania. Na pole bitwy powrócił dopiero po śmierci kochanka, Patroklesa, zabitego przez Hektora. W gniewie zabił wielkiego trojańskiego wojownika, po czym sam stracił życie z ręki Parysa wspomaganego przez Apolla.</p>;

        case 'Agamemnon':
        return <p>Brat Menelaosa, władał Mykenami, największym królestwem Grecji, i był naczelnym wodzem wyprawy Greków pod Troję. Podczas wojny często toczył spory z Achillesem, który podważał prawo Agamemnona do komanderowania nim. Po powrocie do domu z wojny został zamordowany przez swą żonę Klitajmestrę.</p>;

        case 'Ajas':
        return <p>Władca Salaminy i potomek Zeusa, znany ze swej ogromnej postury i siły. Był największym po Achillesie greckim wojownikiem i godnie dotrzymywał pola Trojanom, podczas gdy Achilles wstrzymywał się od walki. Kiedy Agamemnon po śmierci Achillesa uhonorował Odyseusza jako najdzielniejszego z Greków, oszałały z żalu i złości Ajas odebrał sobie życie.</p>;

        case 'Bryzeida':
        return <p>Pojmana przez Greków w wypadzie na obóz Trojan, dostała się Achillesowi jako trofeum wojenne. Kiedy Achilles przeciwstawił się Agamemnonowi, ten za karę odebrał mu brankę. Bryzeida została zwrócona po śmierci Patroklosa.</p>;

        case 'Dedal':
        return <p>Mistrz rzemiosł, znany wynalazca i artysta. Stworzył krąg taneczny Ariadny i wielki labirynt, więzienie Minotaura. Więziony na Krecie razem z synem, Ikarem, wymyślił plan ucieczki: skonstruował dwie pary skrzydeł z piór połączonych woskiem. Uciekł z synem, lecz Ikar podfrunął zbyt blisko słońca i wosk się roztopił. Chłopiec spadł do morza i utonął.</p>;

        case 'Diomedes':
        return <p>Król Argos. Znany zarówno ze swej przenikliwości, jak i siły, był jednym z najbardziej cenionych wojowników w greckiej armii. Tak jak Odyseusz był ulubieńcem Ateny, która w księdzie V <span>Iliady</span> wspiera go w boju, obdarzając nadprzyrodzoną siła.</p>;

        case 'Hektor':
        return <p>Najstarszy syn Priama, trojański następca tronu znany ze swego męstwa, szlachetności i cnót rodzinnych. W czasie wojny trojańskiej zabił Patroklosa (myślał, że to Achilles, którego zbroję miał na sobie Patroklos), za co w odwecie zginął z ręki Achillesa pod murami Troi.</p>;

        case 'Helena':
        return <p>Legendarna piękność świata. Była księżniczką Sparty, córką królowej Ledy i boga Zeusa. Wielu zalotników ubiegało się o nią i wszyscy przysięgli, że bez względu na to, kto otrzyma jej ręke, będą stać na straży tego związku. Poślubiła króla Sparty, Menelaosa, lecz wkrótce zbiegła z księciem trojańskim Parysem, wywołując wojnę trojańską. Po wojnie wróciła z Menelaosem do Sparty.</p>;

        case 'Jazon':
        return <p>Książe Jolkos. Pozbawiony tronu przez stryja, Peliasa, postanowił się wykazać, wyruszając po złote runo należące do króla Kolchidy, Ajetesa. Z pomocą swojej patronki, Hery, pozyskał okręt, sławne <span>Argo</span>, i załogę złożoną z bohaterów zwanych Argonautami. Gdy przybył do Kolchidy, Ajetes poddał go kilku próbom - na przykład kazał mu obłaskawić parę ziejących ogniem wołów. Jazon nie przeszedłby tych prób bez pomocy zakochanej w nim córki Ajetesa, Medei, z którą uciekł, zabierając runo.</p>;

        case 'Menelaos':
        return <p>Brat Agamemnona; zaślubiwszy Helenę został królem Sparty. Po uprowadzeniu Heleny przez Parysa powołał się na przysięgę złożoną przez wszystkich jej zalotników i wspólnie ze swym bratem poprowadził greckie wojsko na wyprawę do Troi. W księdzie III <span>Iliady</span> toczy pojedynek z Parysem o Helenę i Parys ulega. ale ratuje go Afrodyta, porywając z placu boju. Po wojnie Menelaos i Helena wrócili do Sparty.</p>;

        case 'Odyseusz':
        return <p>Sprytny król Itaki, ulubieniec bogini Ateny, mąż Penelopy, ojciec Telemacha. Podczas wojny trojańskiej jeden z głównych doradców Agamemnona. Wymyślił fortel, dzięki któremu Grecy wygrali wojnę. Jego powrót do ojczyzny trwał dziesięć lat i jest tematem <span>Odysei</span> Homera, opisującej sławne przygody z cylopem Polifemem, czarownicą Kirke, potworami Scyllą i Charybdą oraz syrenami.</p>;

        case 'Parys':
        return <p>Syn Priama, który został sędzią w sławnym konkursie piękności między Herą, Ateną i Afrodytą, ze złotym jabłkiem jako nagrodą. Wszystkie trzy boginie próbowału go przekupić: Hera obiecywała mu władzę, Atena mądrość, Afrodyta najpiękniejszą kobietę świata. Parys przyznał jabłko Afrodycie, która w zamian pomogła mu uprowadzić Helenę, żonę Menelaosa, co stało się powodem wojny trojańskiej. Znany z biegłości w łucznictwie Parys za pomocą Apollina zabił mężnego Achillesa. Raniony przez Filokteta udał się w góry Ida, do swojej żony, Ojnone, gdyż tylko ona, według przepowiedni, mogła uleczyć Parysa. Urażona zdradą odmówiła jednak pomocy. Parys powrócił do Troi i wkrótce potem zmarł. </p>;

        case 'Patroklos':
        return <p>Syn króla Menojtiosa. W młodości został wygnany z domu za nieumyślne zabicie innego chłopca i znalazł schronienie na dworze Peleusa, gdzie wychował się z Achillesem. W <span>Iliadzie</span> jest postacią drugoplanową, ale jego brzemienna decyzja by ratować Greków (przywdziewając zbroję Achillesa), daje początek ostatniemu aktowi całej historii. Kiedy Patroklos ginie z ręki Hektora, Achilles wpada w rozpacz i bierze brutalny odwet na Trojanach.</p>;

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
            {chooseCharDesc()}
        </article>
     );
}
 
export default Character;