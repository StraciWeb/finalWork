export {$articleWrapper};
import { circleSvg } from "./svg.js";

const $articleWrapper = document.createElement('div');


const articlesArray = [
    {
        articleTitle: "Evenimente JavaScript",
        articleDescr: "Atât evenimentele cât şi tratarea evenimentelor sunt actiuni declanşate de către utilizatori şi pot fi interpretate cu ajutorul functiilor JavaScript. Evenimentele declanşate de către utilizatori, cum sunt: click-stânga de mouse, mişcarea mouse-ului, operatia drag-anddrop sau operatii ale sistemului, cum sunt: încărcarea unui document sau a unei imagini, sunt incidente comune.",
        articleDate: "17.06.2024",
    },
    {
        articleTitle: "Instructiuni ciclice - repetitive",
        articleDescr: "Instructiunile repetitive se folosesc atunci cand se doreste efectuarea unei comenzi de mai multe ori.",
        articleDate: "14.06.2024",
    },
    {
        articleTitle: "Ce este Funcția în JavaScript?",
        articleDescr: "Funcțiile sunt foarte importante și utile în orice limbaj de programare, deoarece fac codul reutilizabil. O funcție este un bloc de cod care va fi executat numai dacă este apelat. Dacă aveți câteva linii de cod care trebuie folosite de mai multe ori, puteți crea o funcție care să includă liniile de cod care se repetă și apoi apelați funcția oriunde doriți.",
        articleDate: "12.06.2024",
    },
    {
        articleTitle: "Operatori in JavaScript",
        articleDescr: "Operatorii se folosesc pentru a manipula, combina si modifica datele dintr-un program sau script. Operatori aritmetici, operatori de atribuire, operatori de comparare, operatori logici (booleeni)",
        articleDate: "10.06.2024",
    },
    {
        articleTitle: "Sortare cu ajutorul JavaScript",
        articleDescr: "Sortarea produselor in JavaScript. Sortarea nu este altceva decât aranjarea elementelor în ordinea pe care o dorim.",
        articleDate: "25.07.2024",
    },
    {
        articleTitle: "Aplicatie tip 'Store', realizat cu ajutorul biblioteca React.js",
        articleDescr: "Afisarea produselor pe prima pagina extrase direct din API 'https://fakestoreapi.com/products', cu posibilitate de filtrare a produselor, adaugare produs in cosul de cumparaturi, modificare cantitate produse in cos sau eliminarea produselor din cos.",
        articleDate: "29.01.2025",
    },
    {
        articleTitle: "Aplicatie tip 'Store v.02', realizat cu ajutorul biblioteca React.js",
        articleDescr: "Proiect realizat cu ajutorul biblioteca React.js, inclusiv Tehnologia Redux, Redux Toolkit",
        articleDate: "04.03.2025",
    },
    {
        articleTitle: "Aplicatie CMC realizata pentru inregistrarea si evidenta persoanelor la anumite investigatii in institutii republicane",
        articleDescr: "Proiect realizat cu ajutorul NodeJs, autentificare, cu trasnmiterea informatiei in baza de date si generarea raporatelor",
        articleDate: "30.03.2025",
    },
    {
        articleTitle: "Aplicatie tip 'Store v.03', realizat cu ajutorul framework Express, Bootstrap, MySQL, phpMyAdmin",
        articleDescr: "Proiect realizat cu ajutorul framework Express, Bootstrap. Se extrage informatie despre produs din baza de date, salvare comanda in baza de date cu ajutorul SQL query",
        articleDate: "15.04.2025",
    },
    {
        articleTitle: "Baza de date pe internet, cu informații despre filme cu pagini detaliate și structurate despre fiecare, realizat cu ajutorul framework Express, React, Tailwind, MySQL, phpMyAdmin",
        articleDescr: "Proiect realizat cu ajutorul framework Express, React, Tailwind. Vizualizarea informatiei ce se extrage din Baza de date despre fiecare film cu sortare dupa categorie, gen, pagina de login cu verificare date de logare inregistrare in baza de date cu acces la pagina de adugare film nou",
        articleDate: "05.05.2025",
    }
]

const getArticle = (array) => {
    
    array.reverse().forEach(element => {
        let article = document.createElement("div");
        let title = document.createElement("h3");
        let descr = document.createElement("p");
        let date = document.createElement("p");
        let circle = document.createElement("span");
        let moreBtn = document.createElement("button");

        article.classList.add("article__wrapper");
        title.classList.add("article__title");
        descr.classList.add("article__descr");
        date.classList.add("article__date");
        circle.classList.add("article__circle");
        moreBtn.classList.add("btn__more");


        title.textContent = element.articleTitle;
        descr.textContent = element.articleDescr;
        date.textContent = element.articleDate;
        circle.innerHTML = circleSvg;
        moreBtn.textContent = "Mai mult";
        article.append(title, descr, date, circle, moreBtn);
        $articleWrapper.append(article);
    });
    return $articleWrapper;
   
}

getArticle(articlesArray);



