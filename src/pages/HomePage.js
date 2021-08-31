import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Miecz Damoklesa",
        source: "https://pl.wikipedia.org/wiki/Miecz_Damoklesa",
        text: "Przenośne wyrażenie przysłowiowe, nawiązujące do popularnej anegdoty o syrakuzańskim tyranie Dionizjuszu. Chcąc lepiej uprzytomnić swój los schlebiającemu mu zawistnemu dworzaninowi Damoklesowi, który nazywał go najszczęśliwszym ze śmiertelników, tyran zaproponował mu, ażeby na jeden dzień wszedł w jego rolę i znalazł się w jego sytuacji. Pozwolił mu nawet zająć swe złote łoże w przepysznie urządzonej komnacie i ucztować do woli. Zarazem jednak nakazał zawiesić nad Damoklesem ostry miecz na cienkim końskim włosie. W ten sposób unaocznił mu niebezpieczeństwo grożące ze strony wrogów i nieprzyjaciół każdemu panującemu wśród pozornych luksusów i dobrodziejstw władzy. ",
    },
    {
        id: 2,
        title: "Męki Tantala",
        source: "https://www.ortograf.pl/slownik/meki-tantala",
        text: "Męki Tantala to cierpienie, które polega na niemożności zaspokojenia pragnienia czegoś, przy czym możliwość tego znajduje się blisko, ale jest jednocześnie nieosiągalna. Określenie nawiązuje do mitologii greckiej, w której król Tantal został skazany przez bogów na wieczne męki głodu i pragnienia. Stał zanurzony w wodzie, a nad głową miał najpiękniejsze owoce, nie mógł jednak się napić, bo woda opadała, ani zaspokoić głodu, bo owoce ulatywały w górę.",
    },
    {
        id: 3,
        title: "Jabłko niezgody",
        source: "https://pl.wikipedia.org/wiki/Jab%C5%82ko_niezgody",
        text: "W mitologii greckiej złote jabłko z napisem: <dla najpiękniejszej> rzucone przez boginię Eris podczas wesela Tetydy i Peleusa. Stało się ono przyczyną sporu pomiędzy Herą, Afrodytą i Ateną. Konkurs piękności z polecenia Zeusa rozstrzygnął Parys. Każda z bogiń obiecała mu zapłatę za przyznanie jabłka: Hera – władzę, Atena – mądrość i sławę, Afrodyta – najpiękniejszą kobietę za żonę. Wygrała Afrodyta, która obiecała mu żonę króla Sparty Menelaosa, Helenę. Uprowadzenie Heleny przez Parysa było powodem rozpoczęcia wojny trojańskiej. ",
    }
]

const HomePage = () => {

    const artList = articles.map(item => (
        <Article key={articles.id} {...item}/>
    ))

    return ( 
        <div className="home">
            <h1>Słynne mity i wyrażenia.</h1>
            {artList}
        </div>
     );
}
 
export default HomePage;