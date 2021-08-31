import React from 'react';
import '../styles/God.css';

const God = (props) => {

    const chooseGodDesc = () => {
        switch(props.id) {

        // Bogowie olimpijscy

        case 'Apollo':
        return <p>Bóg światła, muzyki, przepowiedni i medycyny. Syn Zeusa, brat bliźniak Artemidy i orędownik Trojan podczas wojny z Grekami.</p>;

        case 'Artemida':
        return <p>Bogini łowów, córka Zeusa, siostra Apolla. Według <span>Odysei</span> morderczyni księżniczki Ariadny.</p>;

        case 'Atena':
        return <p>Potężna bogini mądrości, tkactwa i sztuk wojennych. Podczas wojny trojańskiej zwolenniczka Greków, szczególną opiekę roztoczyła nad sprytnym Odyseuszem. Pojawia się w <span>Iliadzie</span> i <span>Odysei</span>. Podobno ulubiona córka Zeusa; urodziła się, wyskakując z jego głowy w pełni ukształtowana i w zbroi.</p>;

        case 'Hermes':
        return <p>Syn Zeusa i nimfy Mai, posłaniec bogów i bóg podróży i oszustw, handlu i granic. Przewodnik dusz zmarłych od świata podziemi. W pewnych opowieściach przodek Odyseusza; w <span>Odysei</span> Hermes doradza mu, jak przeciwdziałać czarom Kirke.</p>;

        case 'Zeus':
        return <p>Król bogów i ludzi, władca całego świata rządzący z góry Olimp. Rozpoczął wojnę przeciwką tytanom, by zemścić się na ojcu, Kronosie, o obalić go. Ojcie wielu bogów i śmiertelników, w tym Ateny, Apolla, Dionizosa, Heraklesa, Heleny i Minosa.</p>;

        // Bogowie z pokolenia tytanów

        case 'Prometeusz':
        return <p>Bóg, który wbrew woli Zeusa pomógł śmiertelnikom, dając im ogień i, według niektórych powieści, inne umiejętności związane z cywilizacją. Zeus ukarał go, przykuwając do skały w górach Kaukazu, gdzie codziennie przylatywał orzeł i wyszarpywał mu wątrobę, która przez noc odrastała.</p>;

        case 'Helios':
        return <p>Bóg słońca. Miał liczne potomstwo, w tym Kirke, Ajestesa, Pazyfae i Persesa. Najczęściej jest przedstawiany na rydwanie zaprzężonym w złote konie, który codziennie przemierza niebo. W <span>Odysei</span> prosi Zeusa, by sprowadził zniszczenie na załogę Odyseusza po tym, jak ta zabiła jego święte krowy.</p>;

        case 'Kirke':
        return <p>Czarownica mieszkająca na wyspie Ajaja, córka Heliosa i nimfy Perseidy. W <span>Odysei</span> zamienia w świnie załogę Odyseusza, ale gdy ten stawia jej czoła, bierze go do łoża, po czym pozwala jemu i jego ludziom zamieszkać na wyspie i pomaga im, gdy znów wyruszają w morze.</p>;

        case 'Pazyfae':
        return <p>Siostra Kirke, potężna czarownica, która wyszła za śmiertelnego syna Zeusa, Minosa, i została królową Krety. Miała z nim wiele dzieci, w tym Ariadnę i Fedrę, a poza tym poczęła ze świętym białym bykiem syna, Minotaura.</p>;

        case 'Selene':
        return <p>Bogini księżyca, ciotka Kirke, siostra Heliosa. Prowadziła po niebie rydwan zaprzężony w srebrne konie; jej mężem był piękny pasterz Endymion, śmiertelnik wprowadzony czarami w wieczny sen.</p>;

        default:
        return <p>Brak opisu w bazie</p>;
        }
      }

    return ( 
        <article className="god">
        <h1>{props.id}</h1>
        {chooseGodDesc()}
    </article>
     );
}
 
export default God;