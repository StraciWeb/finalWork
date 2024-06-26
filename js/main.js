import {locationSvg, phoneSvg, emailSvg, webPageSvg, circleSvg, closeSvg, cameraSvg, moreSvg} from './svg.js'
import { $containerOperators } from './operators.js';
import { $functionsContainer } from './functions.js';
import { $loopsContainer } from './loops.js';
import { $formContainer } from './regForm.js';
import { $eventsContainer } from './events.js';

const TODAY = new Date();
const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
const preUrl = "finalWork/";

//se formeaza structura paginii
const $container = document.createElement("div");
//leftsidebar
const $leftSidebar = document.createElement("div");
const $imgWrapper = document.createElement("div");
const $personalFoto = document.createElement("img");
const $noFoto = document.createElement("span");
const $hideImg = document.createElement("span");
//contacts
const $contactsWrapper = document.createElement("div");
const $contacts = document.createElement("h3");
const $locationWrapper = document.createElement("div");
const $locationIcon = document.createElement("span");
const $locationText = document.createElement("p");
const $phoneWrapper = document.createElement("div");
const $phoneIcon = document.createElement("span");
const $phoneText = document.createElement("p");
const $emailWrapper = document.createElement("div");
const $emailIcon = document.createElement("span");
const $emailText = document.createElement("p");
const $webWrapper = document.createElement("div");
const $webIcon = document.createElement("span");
const $webText = document.createElement("p");
//education
const $educationWrapper = document.createElement("div");
const $education = document.createElement("h3");
const $educationLocationScool = document.createElement("div");
const $scool = document.createElement("p");
const $scoolDescr = document.createElement("p");
const $educationLocationHighScool = document.createElement("div");
const $highScool = document.createElement("p");
const $highScoolDescr = document.createElement("p");
const $educationLocationUniversity = document.createElement("div");
const $university = document.createElement("p");
const $universityDescr = document.createElement("p");
//date and time
const $dateTimekWrapper = document.createElement("div");
const $fullDate = document.createElement("p");
const $fullTime = document.createElement("p");
//lista studentilor
const $studentsWrapper = document.createElement("div");
const $studentsTitle = document.createElement("h3");
const $studentsShowList = document.createElement("button");

//main content
const $mainContent = document.createElement("div");
const $mainContentHeader = document.createElement("div");
const $title = document.createElement("h1");
const $registrBtn = document.createElement("button");
const $titleInfo = document.createElement("h2");
const $about = document.createElement("p");
const $workExperienceContainer = document.createElement("div");
const $workExperienceTitle = document.createElement("h3");
//primul articol
const $workExperienceWorkOne = document.createElement("div");
const $workExperienceWorkOneTitle = document.createElement("h3");
const $workExperienceWorkOneDescr = document.createElement("p");
const $workExperienceWorkOneYears = document.createElement("p");
const $workExperienceWorkOneCircle = document.createElement("span");
const $workExperienceWorkOneBtn = document.createElement("button");
//al doilea articol
const $workExperienceWorkTwo = document.createElement("div");
const $workExperienceWorkTwoTitle = document.createElement("h3");
const $workExperienceWorkTwoDescr = document.createElement("p");
const $workExperienceWorkTwoYears = document.createElement("p");
const $workExperienceWorkTwoBtn = document.createElement("button");
const $workExperienceWorkTwoCircle = document.createElement("span");
//al treilea articol
const $workExperienceWorkThree = document.createElement("div");
const $workExperienceWorkThreeTitle = document.createElement("h3");
const $workExperienceWorkThreeDescr = document.createElement("p");
const $workExperienceWorkThreeYears = document.createElement("p");
const $workExperienceWorkThreeCircle = document.createElement("span");
const $workExperienceWorkThreeBtn = document.createElement("button");
//al patrulea articol
const $workExperienceWorkFour = document.createElement("div");
const $workExperienceWorkFourTitle = document.createElement("h3");
const $workExperienceWorkFourDescr = document.createElement("p");
const $workExperienceWorkFourYears = document.createElement("p");
const $workExperienceWorkFourCircle = document.createElement("span");
const $workExperienceWorkFourBtn = document.createElement("button");
//al cincilea articol
const $workExperienceWorkFive = document.createElement("div");
const $workExperienceWorkFiveTitle = document.createElement("h3");
const $workExperienceWorkFiveDescr = document.createElement("p");
const $workExperienceWorkFiveYears = document.createElement("p");
const $workExperienceWorkFiveCircle = document.createElement("span");
const $workExperienceWorkFiveBtn = document.createElement("button");

$container.classList.add("container");

//clase bloc informatii stinga
$leftSidebar.classList.add("left__sidebar");
$imgWrapper.classList.add("left__sidebar-foto-wrapper")
$personalFoto.classList.add("left__sidebar-img");
$noFoto.classList.add("left__sidebar-noFoto");
$hideImg.classList.add("left__sidebar-hide-img");
$contacts.classList.add("left__sidebar-title");
$locationIcon.classList.add("contacts__icon");
$locationWrapper.classList.add("contact__wrapper");
$locationText.classList.add("contact__text");
$phoneWrapper.classList.add("contact__wrapper");
$phoneIcon.classList.add("contacts__icon");
$phoneText.classList.add("contact__text");
$emailWrapper.classList.add("contact__wrapper");
$emailIcon.classList.add("contacts__icon");
$emailText.classList.add("contact__text");
$webWrapper.classList.add("contact__wrapper");
$webIcon.classList.add("contacts__icon");
$webText.classList.add("contact__text");
$educationWrapper.classList.add("education__wrapper");
$education.classList.add("left__sidebar-title");
$scool.classList.add("education__location");
$scoolDescr.classList.add("education__descr");
$highScool.classList.add("education__location");
$highScoolDescr.classList.add("education__descr");
$university.classList.add("education__location");
$universityDescr.classList.add("education__descr");
$dateTimekWrapper.classList.add("left__sidebar-dateTime")
$fullDate.classList.add("left__sidebar-date");
$fullTime.classList.add("left__sidebar-time");
$studentsWrapper.classList.add("left__sidebar-students");
$studentsTitle.classList.add("left__sidebar-title");
$studentsShowList.classList.add("left__sidebar-showList");

//clase bloc informatii principal
$mainContent.classList.add("main__content");
$mainContentHeader.classList.add("main__content-header");
$registrBtn.classList.add("btn");
$title.classList.add("main__content-title");
$titleInfo.classList.add("main__content-info");
$about.classList.add("main__content-about");
$workExperienceContainer.classList.add("experience__container")
$workExperienceTitle.classList.add("experience__title");
//clase primul articol
$workExperienceWorkOne.classList.add("work__experience-box");
$workExperienceWorkOneTitle.classList.add("work__experience-title");
$workExperienceWorkOneDescr.classList.add("work__experience-descr");
$workExperienceWorkOneYears.classList.add("work__experience-years");
$workExperienceWorkOneCircle.classList.add("work__one-circle");
$workExperienceWorkOneBtn.classList.add("btn__more");
//clase al doilea articol
$workExperienceWorkTwo.classList.add("work__experience-box");
$workExperienceWorkTwoTitle.classList.add("work__experience-title");
$workExperienceWorkTwoDescr.classList.add("work__experience-descr");
$workExperienceWorkTwoYears.classList.add("work__experience-years");
$workExperienceWorkTwoCircle.classList.add("work__one-circle");
$workExperienceWorkTwoBtn.classList.add("btn__more");
//clase al treilea articol
$workExperienceWorkThree.classList.add("work__experience-box");
$workExperienceWorkThreeTitle.classList.add("work__experience-title");
$workExperienceWorkThreeDescr.classList.add("work__experience-descr");
$workExperienceWorkThreeYears.classList.add("work__experience-years");
$workExperienceWorkThreeCircle.classList.add("work__one-circle");
$workExperienceWorkThreeBtn.classList.add("btn__more");
//clase al patrulea articol
$workExperienceWorkFour.classList.add("work__experience-box");
$workExperienceWorkFourTitle.classList.add("work__experience-title");
$workExperienceWorkFourDescr.classList.add("work__experience-descr");
$workExperienceWorkFourYears.classList.add("work__experience-years");
$workExperienceWorkFourCircle.classList.add("work__one-circle");
$workExperienceWorkFourBtn.classList.add("btn__more");

//continut main
$title.textContent = "Traci Serghei";
$registrBtn.textContent = "Inregistreaza-te";
$titleInfo.textContent = "Front-End Developer";
$about.textContent = "Un Front-End Developer este persoana care implementează diverse web designuri folosind diverse limbaje de programare. La orice site te-ai uita, aproape tot ce vezi ține de partea de front end development: de la așezarea în pagină, la meniurile prin care navighezi, toate acestea au fost dezvoltate de către un Front-End Developer. Un Front-End Developer va folosi în principal ca limbaje de bază HTML, CSS și JavaScript.";

//primul articol
$workExperienceTitle.textContent = "Cunostinte in JavaScript";
$workExperienceWorkOneTitle.textContent = "Operatori in JavaScript";
$workExperienceWorkOneYears.textContent = "10.06.2024";
$workExperienceWorkOneDescr.textContent = "Operatorii se folosesc pentru a manipula, combina si modifica datele dintr-un program sau script. Operatori aritmetici, operatori de atribuire, operatori de comparare, operatori logici (booleeni)";
$workExperienceWorkOneCircle.innerHTML = circleSvg;
$workExperienceWorkOneBtn.textContent = "Mai mult";

//al doilea articol
$workExperienceWorkTwoTitle.textContent = "Ce este Funcția în JavaScript?";
$workExperienceWorkTwoYears.textContent = "12.06.2024";
$workExperienceWorkTwoDescr.textContent = "Funcțiile sunt foarte importante și utile în orice limbaj de programare, deoarece fac codul reutilizabil. O funcție este un bloc de cod care va fi executat numai dacă este apelat. Dacă aveți câteva linii de cod care trebuie folosite de mai multe ori, puteți crea o funcție care să includă liniile de cod care se repetă și apoi apelați funcția oriunde doriți.";
$workExperienceWorkTwoCircle.innerHTML = circleSvg;
$workExperienceWorkTwoBtn.textContent = "Mai mult";

//al treilea articol
$workExperienceWorkThreeTitle.textContent = "Instructiuni ciclice - repetitive";
$workExperienceWorkThreeYears.textContent = "14.06.2024";
$workExperienceWorkThreeDescr.textContent = "Instructiunile repetitive se folosesc atunci cand se doreste efectuarea unei comenzi de mai multe ori.";
$workExperienceWorkThreeCircle.innerHTML = circleSvg;
$workExperienceWorkThreeBtn.textContent = "Mai mult";

//al patrulea articol
$workExperienceWorkFourTitle.textContent = "Evenimente JavaScript";
$workExperienceWorkFourYears.textContent = "17.06.2024";
$workExperienceWorkFourDescr.textContent = "Atât evenimentele cât şi tratarea evenimentelor sunt actiuni declanşate de către utilizatori şi pot fi interpretate cu ajutorul functiilor JavaScript. Evenimentele declanşate de către utilizatori, cum sunt: click-stânga de mouse, mişcarea mouse-ului, operatia drag-anddrop sau operatii ale sistemului, cum sunt: încărcarea unui document sau a unei imagini, sunt incidente comune.";
$workExperienceWorkFourCircle.innerHTML = circleSvg;
$workExperienceWorkFourBtn.textContent = "Mai mult";


//continut left sidebar
$contacts.textContent = "Contacte";
$personalFoto.src = "img/personal.png";
$hideImg.innerHTML = closeSvg;
$noFoto.innerHTML = cameraSvg;
$locationIcon.innerHTML = locationSvg;
$locationText.textContent = "Or. Cimislia";
$phoneIcon.innerHTML = phoneSvg;
$phoneText.textContent = "+373 69062838";
$emailIcon.innerHTML = emailSvg;
$emailText.textContent = "traciserii@gmail.com";
$webIcon.innerHTML = webPageSvg;
$webText.textContent = "www.personalpage.md";
$education.textContent = "Educatie";
$scool.textContent = "Scoala medie";
$scoolDescr.textContent = "Nr. 1, Ion Creanga, or. Cimislia, 1999 - 2001";
$highScool.textContent = "Liceu";
$highScoolDescr.textContent = "Liceul Teoretic Mihai Viteazul, or. Cimislia, 2001 - 2004";
$university.textContent = "Studii Superioare";
$universityDescr.textContent = "Academia de Studii Economice, Chisinau, 2004 - 2008";
$studentsTitle.textContent = "Lista Studentilor";
$studentsShowList.textContent = "Afiseaza Lista";

//actiune butonul inregistreaza
$registrBtn.addEventListener("click", () => {
    $formContainer.classList.add("open");
})

//ascundere / afisare butonul x pentru ascundere imagine principala
$imgWrapper.addEventListener("mouseover", () => $hideImg.classList.add("opacity"));
$imgWrapper.addEventListener("mouseout", () => $hideImg.classList.remove("opacity"));

//actiune butonul x pentru ascundere imagine
$hideImg.addEventListener("click", ()=> {
    $personalFoto.remove();
    $noFoto.style.display = "block";
    $hideImg.remove();
    $imgWrapper.append($noFoto);
})

//actiune pentru imagine noFoto pentru afisare imagine peronala
$noFoto.addEventListener("click", () =>  {
    $imgWrapper.append($personalFoto, $hideImg);
    $noFoto.remove();
});

//formarea datei si ora
//formarea datei
function getFullDate(date) {
    let monthIndex = date.getMonth();
    let monthName = months[monthIndex];
    let day = date.getDate();
    let year = date.getFullYear();
    $fullDate.textContent = day + " " + monthName + ", " + year; 
}

//formarea orei
function getTime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    } 
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    $fullTime.textContent = hour + " : " + minutes + " : " +seconds;
}

getFullDate(TODAY);
setInterval(getTime, 1000);

//butonul prima tema studiata
$workExperienceWorkOneBtn.addEventListener("click", ()=> {
    if($containerOperators.classList.contains("display__none")){
        $containerOperators.classList.add("display__block");
        $containerOperators.classList.remove("display__none");
        $workExperienceWorkOneBtn.textContent = "Ascunde";
    }else {
        $containerOperators.classList.add("display__none");
        $containerOperators.classList.remove("display__block");
        $workExperienceWorkOneBtn.textContent = "Mai mult";
    }
    
})

//butonul a doua tema studiata
$workExperienceWorkTwoBtn.addEventListener("click", () => {
    if($functionsContainer.classList.contains("display__none")){
        $functionsContainer.classList.add("display__block");
        $functionsContainer.classList.remove("display__none");
        $workExperienceWorkTwoBtn.textContent = "Ascunde";
    }else {
        $functionsContainer.classList.add("display__none");
        $functionsContainer.classList.remove("display__block");
        $workExperienceWorkTwoBtn.textContent = "Mai mult";
    }
})

//butonul al treilea tema studiata
$workExperienceWorkThreeBtn.addEventListener("click", () => {
    if($loopsContainer.classList.contains("display__none")){
        $loopsContainer.classList.add("display__block");
        $loopsContainer.classList.remove("display__none");
        $workExperienceWorkThreeBtn.textContent = "Ascunde";
    }else {
        $loopsContainer.classList.add("display__none");
        $loopsContainer.classList.remove("display__block");
        $workExperienceWorkThreeBtn.textContent = "Mai mult";
    }
})
//butonul al patrulea tema studiata
$workExperienceWorkFourBtn.addEventListener("click", () => {
    if($eventsContainer.classList.contains("display__none")){
        $eventsContainer.classList.add("display__block");
        $eventsContainer.classList.remove("display__none");
        $workExperienceWorkFourBtn.textContent = "Ascunde";
    }else {
        $eventsContainer.classList.add("display__none");
        $eventsContainer.classList.remove("display__block");
        $workExperienceWorkFourBtn.textContent = "Mai mult";
    }
})

//butonul afiseaza lista studentilor
$studentsShowList.addEventListener("click", () => {
    window.location.href= `/content/students.html`;
})

//left sidebar content
$studentsWrapper.append($studentsTitle, $studentsShowList);
$dateTimekWrapper.append($fullDate, $fullTime);
$educationLocationUniversity.append($university, $universityDescr);
$educationLocationHighScool.append($highScool, $highScoolDescr);
$educationLocationScool.append($scool, $scoolDescr);
$educationWrapper.append($education, $educationLocationScool, $educationLocationHighScool, $educationLocationUniversity);
$webWrapper.append($webIcon, $webText);
$emailWrapper.append($emailIcon, $emailText);
$phoneWrapper.append($phoneIcon, $phoneText);
$locationWrapper.append($locationIcon, $locationText);
$contactsWrapper.append($contacts, $locationWrapper, $phoneWrapper, $emailWrapper, $webWrapper);
$imgWrapper.append($personalFoto, $hideImg, $noFoto);
//left sidebar
$leftSidebar.append($imgWrapper, $contactsWrapper, $educationWrapper, $studentsWrapper, $dateTimekWrapper);

//main content

//al patrulea articol
$workExperienceWorkFour.append($workExperienceWorkFourTitle, $workExperienceWorkFourYears,$workExperienceWorkFourDescr, $workExperienceWorkFourCircle, $workExperienceWorkFourBtn, $eventsContainer);
//al treilea articol
$workExperienceWorkThree.append($workExperienceWorkThreeTitle, $workExperienceWorkThreeYears,$workExperienceWorkThreeDescr, $workExperienceWorkThreeCircle, $workExperienceWorkThreeBtn, $loopsContainer);
//al doilea articol
$workExperienceWorkTwo.append($workExperienceWorkTwoTitle, $workExperienceWorkTwoYears,$workExperienceWorkTwoDescr, $workExperienceWorkTwoCircle, $workExperienceWorkTwoBtn, $functionsContainer);
//primul articol
$workExperienceWorkOne.append($workExperienceWorkOneTitle, $workExperienceWorkOneYears,$workExperienceWorkOneDescr, $workExperienceWorkOneCircle, $workExperienceWorkOneBtn, $containerOperators);

$workExperienceContainer.append($workExperienceWorkOne, $workExperienceWorkTwo, $workExperienceWorkThree, $workExperienceWorkFour);
$mainContentHeader.append($title, $registrBtn, $formContainer);
$mainContent.append($mainContentHeader, $titleInfo, $about, $workExperienceTitle, $workExperienceContainer);
$container.append($leftSidebar, $mainContent);

document.body.append($container);