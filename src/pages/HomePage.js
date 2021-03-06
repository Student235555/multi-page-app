import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Wojna trojańska",
        text: "Według Homera i antycznych historyków dziesięcioletnie oblężenie Troi przez Achajów. Mitycznym powodem konfliktu było porwanie Heleny, żony króla Sparty – Menelaosa, przez trojańskiego księcia Parysa, syna króla Priama. Menelaos odwołał się do pomocy swego brata Agamemnona, króla Argos i Myken oraz wszystkich książąt achajskich. Na leżącą w Anatolii i dotąd niezdobytą Troję na 1185 okrętach wyruszyli wojownicy achajscy. Część wieloletnich zmagań o Troję opisał Homer w Iliadzie.",
        source: "https://pl.wikipedia.org/wiki/Wojna_troja%C5%84ska",
    },
    {
        id: 2,
        title: "Miecz Damoklesa",
        text: "Przenośne wyrażenie przysłowiowe, nawiązujące do popularnej anegdoty o syrakuzańskim tyranie Dionizjuszu. Chcąc lepiej uprzytomnić swój los schlebiającemu mu zawistnemu dworzaninowi Damoklesowi, który nazywał go najszczęśliwszym ze śmiertelników, tyran zaproponował mu, ażeby na jeden dzień wszedł w jego rolę i znalazł się w jego sytuacji. Pozwolił mu nawet zająć swe złote łoże w przepysznie urządzonej komnacie i ucztować do woli. Zarazem jednak nakazał zawiesić nad Damoklesem ostry miecz na cienkim końskim włosie. W ten sposób unaocznił mu niebezpieczeństwo grożące ze strony wrogów i nieprzyjaciół każdemu panującemu wśród pozornych luksusów i dobrodziejstw władzy. ",
        source: 'https://pl.wikipedia.org/wiki/Miecz_Damoklesa',
    },
    {
        id: 3,
        title: "Męki Tantala",
        text: "Męki Tantala to cierpienie, które polega na niemożności zaspokojenia pragnienia czegoś, przy czym możliwość tego znajduje się blisko, ale jest jednocześnie nieosiągalna. Określenie nawiązuje do mitologii greckiej, w której król Tantal został skazany przez bogów na wieczne męki głodu i pragnienia. Stał zanurzony w wodzie, a nad głową miał najpiękniejsze owoce, nie mógł jednak się napić, bo woda opadała, ani zaspokoić głodu, bo owoce ulatywały w górę.",
        source: "https://www.ortograf.pl/slownik/meki-tantala",
    },
    {
        id: 4,
        title: "Jabłko niezgody",
        text: "W mitologii greckiej złote jabłko z napisem: <dla najpiękniejszej> rzucone przez boginię Eris podczas wesela Tetydy i Peleusa. Stało się ono przyczyną sporu pomiędzy Herą, Afrodytą i Ateną. Konkurs piękności z polecenia Zeusa rozstrzygnął Parys. Każda z bogiń obiecała mu zapłatę za przyznanie jabłka: Hera – władzę, Atena – mądrość i sławę, Afrodyta – najpiękniejszą kobietę za żonę. Wygrała Afrodyta, która obiecała mu żonę króla Sparty Menelaosa, Helenę. Uprowadzenie Heleny przez Parysa było powodem rozpoczęcia wojny trojańskiej.",
        source: "https://pl.wikipedia.org/wiki/Jab%C5%82ko_niezgody",
    },
    {
        id: 5,
        title: "Puszka Pandory",
        text: "Oznacza źródło niekończących się nieszczęść, trudności, kłopotów. Pandora została stworzona przez Zeusa jako kara za czyny Prometeusza. Otrzymała w prezencie od bogów puszkę, której nie wolno było otwierać. Ciekawska Pandora nie posłuchała ich rady i puszkę otworzyła, wypuszczając na świat nieszczęście, a zatrzaskując w środku skrzydlatą nadzieję.",
        source: "https://www.powiedztopogrecku.pl/wyrazenia-mitologiczne-1/",
    },
    {
        id: 6,
        title: "Syzyfowa praca",
        text: "Praca bezcelowa, bezsensowna, nie przynosząca żadnych efektów. Syzyf król Koryntu, po śmierci został skazany przez bogów na wieczną pracę. Polegała ona na wtaczaniu pod góre wielkiego głazu, który wymykał mu się z rąk i staczał w dół. Wtedy Syzyf musiał rozpoczynać pracę od początku.",
        source: "https://www.powiedztopogrecku.pl/wyrazenia-mitologiczne-1/",
    },
    {
        id: 7,
        title: "Nić Ariadny",
        text: "Oznacza pomoc, podpowiedź, wskazówkę w rozwiązaniu jakiegoś problemu, sposób wybrnięcia ze skomplikowanej sytuacji. Według mitu Ariadna pomogła Tezeuszowi zabić Minotaura - potwora o ciele człowieka i głowie byka mieszkającego na Krecie. Wręczyła Tezeuszowi kłębek nici i kazała jeden koniec przymocować u wejścia do labiryntu. Dzięki temu Tezeusz po zabiciu Minotaura mógł bezpiecznie się stamtąd wydostać.",
        source: "https://www.powiedztopogrecku.pl/wyrazenia-mitologiczne-1/",
    },
    {
        id: 8,
        title: "Stajnia Augiasza",
        text: "Oznacza miejsce szczegłolnie zaniedbane, zanieczyszczone. Augiasz, jeden z Argonautów, miał najbogatsze na świecie trzody i stada koni. Nie dbał jednak o swoje stajnie, więc zarosły one brudem. Oczyszczenie tych stajni zostało zlecone Heraklesowi w ramach jego dwunastu prac.",
        source: "https://www.powiedztopogrecku.pl/wyrazenia-mitologiczne-1/",
    },
]

const HomePage = () => {

    const artList = articles.map(item => (
        <Article key={articles.id} {...item}/>
    ))

    return ( 
        <div className="home">
            <h1>Słynne mity oraz wyrażenia, które się z nich wywodzą.</h1>
            {artList}
        </div>
     );
}
 
export default HomePage;