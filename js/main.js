import {locationSvg, phoneSvg, emailSvg, webPageSvg, closeSvg, cameraSvg} from './svg.js'
import { $articleWrapper } from './articles.js';
import { $containerOperators } from './operators.js';
import { $functionsContainer } from './functions.js';
import { $loopsContainer } from './loops.js';
import { $formContainer } from './regForm.js';
import { $eventsContainer } from './events.js';
import { $selectContainer } from './sort.js';

const TODAY = new Date();
const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
const CURENTYEAR = TODAY.getFullYear();

//se formeaza structura paginii
const $content = document.createElement("main");
const $contentContainer = document.createElement("div");
const $footer = document.createElement("footer");
const $footerContainer = document.createElement("div");

//container pentru vizualizarea imaginilor
const $showImage = document.createElement("div");
const $bigImgWrapper = document.createElement("div");
const $bigImg = document.createElement("img");
const $closeImg = document.createElement("button");



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
//aplicatia cmc
const $cmcWrapper = document.createElement("div");
const $cmcTitle = document.createElement("h3");
const $cmcShow = document.createElement("button");

//main content
const $mainContent = document.createElement("div");
const $mainContentHeader = document.createElement("div");
const $title = document.createElement("h1");
const $registrBtn = document.createElement("button");
const $titleInfo = document.createElement("h2");
const $about = document.createElement("p");
const $articlesContainer = document.createElement("div");

//foter
const $footerTitle = document.createElement("h3");
const swipperContainer = document.createElement("div");
const swipperWrapper = document.createElement("div");
const swipperEl1 = document.createElement("div");
const swipperEl2 = document.createElement("div");
const swipperEl3 = document.createElement("div");
const swipperEl4 = document.createElement("div");
const swipperEl5 = document.createElement("div");
const swipperEl6 = document.createElement("div");

//proiecte realizate
const $projectOneLogo = document.createElement("img");
const $projectTwoLogo = document.createElement("img");
const $projectThreeLogo = document.createElement("img");
const $projectFourLogo = document.createElement("img");
const $projectFiveLogo = document.createElement("img");
const $projectSixLogo = document.createElement("img");

//cursurie efectuate
const $coursesDegree = document.createElement("div");
const $coursesDegreeTitle = document.createElement("h3");
const $courseDegreeImgWrapper = document.createElement("div");
const $coursesDegreeOne = document.createElement("img");
const $coursesDegreeTwo = document.createElement("img");
const $coursesDegreeThree = document.createElement("img");

//footer info
const $footerInfo = document.createElement("div");
const $footerYear = document.createElement("span");
const $footerPerson = document.createElement("span");

$projectOneLogo.src = "img/galery.png";
$projectTwoLogo.src = "img/lagoona.png";
$projectThreeLogo.src = "img/lionic.png";
$projectFourLogo.src = "img/radio.png";
$projectFiveLogo.src = "img/rumtibet.png";
$projectSixLogo.src = "img/spital.png";

$projectOneLogo.alt = "Blanchard Galery";
$projectTwoLogo.alt = "Lagoona Hotels";
$projectThreeLogo.alt = "Lionic Constructor";
$projectFourLogo.alt = "W-wave Radio";
$projectFiveLogo.alt = "Rumtibet Travel";
$projectSixLogo.alt = "Spitalul raional Cimislia";

$coursesDegreeTitle.textContent = "Cursuri finisate";
$closeImg.innerHTML = closeSvg;

$coursesDegreeOne.src = "img/degree/frontend.jpg";
$coursesDegreeTwo.src = "img/degree/typescript.jpg";
$coursesDegreeThree.src = "img/degree/NodeJS.jpg";

$coursesDegreeOne.alt = "Frontend";
$coursesDegreeTwo.alt = "Type Script";
$coursesDegreeThree.alt = "NodeJS";

$contentContainer.classList.add("container");

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
$cmcWrapper.classList.add("left__sidebar-cmc");
$cmcTitle.classList.add("left__sidebar-title");
$cmcShow.classList.add("left__sidebar-showCmc");

//clase bloc informatii principal
$mainContent.classList.add("main__content");
$showImage.classList.add("show__image");
$bigImg.classList.add("full__img");
$mainContentHeader.classList.add("main__content-header");
$registrBtn.classList.add("btn");
$title.classList.add("main__content-title");
$titleInfo.classList.add("main__content-info");
$about.classList.add("main__content-about");
$articlesContainer.classList.add("experience__container")


//clase footer
$footerContainer.classList.add("footer__container");
swipperContainer.classList.add("swiper", "promo__swiper");
swipperWrapper.classList.add("swiper-wrapper", "footer__projects-wrapper");
$coursesDegree.classList.add("footer__courses");
$courseDegreeImgWrapper.classList.add("degree__img-wrapper");
$footerInfo.classList.add("footer__info");

swipperEl1.classList.add("swiper-slide")
swipperEl2.classList.add("swiper-slide")
swipperEl3.classList.add("swiper-slide")
swipperEl4.classList.add("swiper-slide")
swipperEl5.classList.add("swiper-slide")
swipperEl6.classList.add("swiper-slide")

$coursesDegreeOne.classList.add("course__one", "course");
$coursesDegreeTwo.classList.add("course__two", "course");
$coursesDegreeThree.classList.add("course__three", "course");
$closeImg.classList.add("close__img");


//continut main
$title.textContent = "Traci Serghei";
$registrBtn.textContent = "Inregistreaza-te";
$titleInfo.textContent = "Front-End Developer";
$about.textContent = "Un Front-End Developer este persoana care implementează diverse web designuri folosind diverse limbaje de programare. La orice site te-ai uita, aproape tot ce vezi ține de partea de front end development: de la așezarea în pagină, la meniurile prin care navighezi, toate acestea au fost dezvoltate de către un Front-End Developer. Un Front-End Developer va folosi în principal ca limbaje de bază HTML, CSS și JavaScript.";


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
$cmcTitle.textContent = "CMC";
$cmcShow.textContent = "Deschide Aplicatie";

//continut footer
$footerTitle.textContent = "Proiecte Realizate";
$footerYear.textContent = CURENTYEAR;
$footerPerson.textContent = "Traci Serghei";

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

//data si ora din sidebar
getFullDate(TODAY);
setInterval(getTime, 1000);


//butonul afiseaza lista studentilor
$studentsShowList.addEventListener("click", () => {
    window.location.href= `/finalWork/content/students.html`;
})

//butonul deschide aplicatia CMC
$cmcShow.addEventListener("click", () => {
    window.location.assign('https://straciweb.github.io/cmc/');
})

//footer projects actions
$projectOneLogo.addEventListener("click", () => {
    window.location.assign('https://straciweb.github.io/Blanchard/');
})
$projectTwoLogo.addEventListener("click", () => {
    window.location.assign('https://straciweb.github.io/Lagoona/');
})
$projectThreeLogo.addEventListener("click", () => {
    window.location.assign('https://straciweb.github.io/Lionic/');
})
$projectFourLogo.addEventListener("click", () => {
    window.location.assign('https://straciweb.github.io/Radio/');
})
$projectFiveLogo.addEventListener("click", () => {
    window.location.assign('https://straciweb.github.io/Rumtibet/');
})
$projectSixLogo.addEventListener("click", () => {
    window.location.assign('http://srcimislia.md/');
})


//left sidebar content
$cmcWrapper.append($cmcTitle, $cmcShow);
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
$leftSidebar.append($imgWrapper, $contactsWrapper, $educationWrapper, $studentsWrapper, $cmcWrapper, $dateTimekWrapper);

//main content

$articlesContainer.prepend($articleWrapper);
$mainContentHeader.append($title, $registrBtn, $formContainer);
$bigImgWrapper.append($bigImg, $closeImg);
$showImage.append($bigImgWrapper);
$mainContent.append($mainContentHeader, $titleInfo, $about, $articlesContainer);
$contentContainer.append($leftSidebar, $mainContent);
$content.append($contentContainer)

//footer
swipperEl1.append($projectOneLogo);
swipperEl2.append($projectTwoLogo);
swipperEl3.append($projectThreeLogo);
swipperEl4.append($projectFourLogo);
swipperEl5.append($projectFiveLogo);
swipperEl6.append($projectSixLogo);

swipperWrapper.append(swipperEl1, swipperEl2, swipperEl3, swipperEl4, swipperEl5, swipperEl6);
swipperContainer.append(swipperWrapper);

$courseDegreeImgWrapper.append($coursesDegreeOne, $coursesDegreeTwo, $coursesDegreeThree)
$coursesDegree.append($coursesDegreeTitle, $courseDegreeImgWrapper);


$footerInfo.append($footerYear, $footerPerson);
$footerContainer.append($footerTitle, swipperContainer, $coursesDegree, $footerInfo);
$footer.append($footerContainer);

document.body.append($content, $footer, $showImage);

//extragere butoane
let buttons = Array.from(document.querySelectorAll('.btn__more')).reverse();
//extragere articole intreg
let articles = Array.from(document.querySelectorAll(".article__wrapper")).reverse();


//actiune butoane mai mult.

//articol sortarea elementelor
buttons[4].addEventListener("click", ()=> {
    articles[4].append($selectContainer);
    const filterProduct = document.querySelectorAll(".product");
    const $navElements = document.querySelectorAll(".products__nav-item");
    console.log($navElements);

    const filterGoods = filterClass => {
    $navElements.forEach(item => item.classList.remove("active"));
    const active = document.querySelector(`[data-f="${filterClass}"]`);
    if(active) active.classList.add("active");

    filterProduct.forEach(item => {
        item.classList.remove("hide");
        if(!item.classList.contains(filterClass) && filterClass !== "all") {
            item.classList.add("hide");
        }
    })
}

document.querySelector(".products__nav").addEventListener("click", event => {
        if(event.target.tagName !== "LI") return;

        let filterClass = event.target.dataset['f'];
        filterGoods(filterClass);
})

    if($selectContainer.classList.contains("display__none")){
        $selectContainer.classList.add("display__block");
        $selectContainer.classList.remove("display__none");
        buttons[4].textContent = "Ascunde";
    }else {
        $selectContainer.classList.add("display__none");
        $selectContainer.classList.remove("display__block");
        buttons[4].textContent = "Mai mult";
    }
})

//articol operatori
buttons[3].addEventListener("click", ()=> {
    articles[3].append($containerOperators);
    if($containerOperators.classList.contains("display__none")){
        $containerOperators.classList.add("display__block");
        $containerOperators.classList.remove("display__none");
        buttons[3].textContent = "Ascunde";
    }else {
        $containerOperators.classList.add("display__none");
        $containerOperators.classList.remove("display__block");
        buttons[3].textContent = "Mai mult";
    }
})
buttons[2].addEventListener("click", ()=> {
    articles[2].append($functionsContainer);
    if($functionsContainer.classList.contains("display__none")){
        $functionsContainer.classList.add("display__block");
        $functionsContainer.classList.remove("display__none");
        buttons[2].textContent = "Ascunde";
    }else {
        $functionsContainer.classList.add("display__none");
        $functionsContainer.classList.remove("display__block");
        buttons[2].textContent = "Mai mult";
    }
})
buttons[1].addEventListener("click", () => {
    articles[1].append($loopsContainer);
    if($loopsContainer.classList.contains("display__none")){
        $loopsContainer.classList.add("display__block");
        $loopsContainer.classList.remove("display__none");
        buttons[1].textContent = "Ascunde";
    }else {
        $loopsContainer.classList.add("display__none");
        $loopsContainer.classList.remove("display__block");
        buttons[1].textContent = "Mai mult";
    }
})

buttons[0].addEventListener("click", () => {
    articles[0].append($eventsContainer);
    if($eventsContainer.classList.contains("display__none")){
        $eventsContainer.classList.add("display__block");
        $eventsContainer.classList.remove("display__none");
        buttons[0].textContent = "Ascunde";
    }else {
        $eventsContainer.classList.add("display__none");
        $eventsContainer.classList.remove("display__block");
        buttons[0].textContent = "Mai mult";
    }
})

// slider

  let swiper = new Swiper(".promo__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    //   1200: {
    //     slidesPerView: 5,
    //     spaceBetween: 20,
    //   },
    },
  });

// imagine cursuri efectuate 100%
 
function fullImage (src) {
    $bigImg.src = src;
    $showImage.classList.add("open");
}

document.querySelectorAll('.course').forEach((item) => {
    console.log(item.getAttribute('src'))
    item.addEventListener("click", () => {
        fullImage(item.getAttribute('src'))
    })
})

$closeImg.addEventListener("click", () => {
    $showImage.classList.remove("open");
})
window.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') $showImage.classList.remove("open");
})

$showImage.addEventListener("click", () => {
    $showImage.classList.remove("open");
})

//finisare imagine 100% pentru cursuri finisate

  