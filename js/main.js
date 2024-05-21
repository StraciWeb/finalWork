import {locationSvg, phoneSvg, emailSvg, webPageSvg, circleSvg} from './svg.js'

//se formeaza structura paginii
const $container = document.createElement("div");
//leftsidebar
const $leftSidebar = document.createElement("div");
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

//main content
const $mainContent = document.createElement("div");
const $personalFoto = document.createElement("img");
const $title = document.createElement("h1");
const $titleInfo = document.createElement("h2");
const $about = document.createElement("p");
const $workExperienceContainer = document.createElement("div");
const $workExperienceTitle = document.createElement("h3");
const $workExperienceWorkOne = document.createElement("div");
const $workExperienceWorkOneTitle = document.createElement("h3");
const $workExperienceWorkOneDescr = document.createElement("p");
const $workExperienceWorkOneYears = document.createElement("p");
const $workExperienceWorkOneCircle = document.createElement("span");
const $workExperienceWorkTwo = document.createElement("div");
const $workExperienceWorkTwoTitle = document.createElement("h3");
const $workExperienceWorkTwoDescr = document.createElement("p");
const $workExperienceWorkTwoYears = document.createElement("p");
const $workExperienceWorkTwoCircle = document.createElement("span");
const $workExperienceWorkThree = document.createElement("div");
const $workExperienceWorkThreeTitle = document.createElement("h3");
const $workExperienceWorkThreeDescr = document.createElement("p");
const $workExperienceWorkThreeYears = document.createElement("p");
const $workExperienceWorkThreeCircle = document.createElement("span");

$container.classList.add("container");

//clase bloc informatii stinga
$leftSidebar.classList.add("left__sidebar");
$personalFoto.classList.add("left__sidebar-img");
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

//clase bloc informatii principal
$mainContent.classList.add("main__content");
$title.classList.add("main__content-title");
$titleInfo.classList.add("main__content-info");
$about.classList.add("main__content-about");
$workExperienceContainer.classList.add("experience__container")
$workExperienceTitle.classList.add("experience__title");
$workExperienceWorkOne.classList.add("work__experience-box");
$workExperienceWorkOneTitle.classList.add("work__experience-title");
$workExperienceWorkOneDescr.classList.add("work__experience-descr");
$workExperienceWorkOneYears.classList.add("work__experience-years");
$workExperienceWorkOneCircle.classList.add("work__one-circle");
$workExperienceWorkTwo.classList.add("work__experience-box");
$workExperienceWorkTwoTitle.classList.add("work__experience-title");
$workExperienceWorkTwoDescr.classList.add("work__experience-descr");
$workExperienceWorkTwoYears.classList.add("work__experience-years");
$workExperienceWorkTwoCircle.classList.add("work__one-circle");
$workExperienceWorkThree.classList.add("work__experience-box");
$workExperienceWorkThreeTitle.classList.add("work__experience-title");
$workExperienceWorkThreeDescr.classList.add("work__experience-descr");
$workExperienceWorkThreeYears.classList.add("work__experience-years");
$workExperienceWorkThreeCircle.classList.add("work__one-circle");

//continut main
$title.textContent = "Traci Serghei";
$titleInfo.textContent = "Front-End Developer";
$about.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi.";
$workExperienceTitle.textContent = "Experienta in serviciu";
$workExperienceWorkOneTitle.textContent = "Lorem, ipsum dolor sit amet consectetur";
$workExperienceWorkOneYears.textContent = "Din 2008 pina in 2010";
$workExperienceWorkOneDescr.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi.";
$workExperienceWorkOneCircle.innerHTML = circleSvg;
$workExperienceWorkTwoTitle.textContent = "Lorem, ipsum dolor sit amet consectetur";
$workExperienceWorkTwoYears.textContent = "Din 2008 pina in 2010";
$workExperienceWorkTwoDescr.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
$workExperienceWorkTwoCircle.innerHTML = circleSvg;
$workExperienceWorkThreeTitle.textContent = "Lorem, ipsum dolor sit amet consectetur";
$workExperienceWorkThreeYears.textContent = "Din 2008 pina in 2010";
$workExperienceWorkThreeDescr.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur facere perspiciatis deleniti error animi qui nulla cupiditate quasi totam omnis incidunt, inventore saepe, officiis ullam! Pariatur velit ipsum eligendi.";
$workExperienceWorkThreeCircle.innerHTML = circleSvg;


//continut left sidebar
$contacts.textContent = "Contacte";
$personalFoto.src = "img/personal.png";
$locationIcon.innerHTML = locationSvg;
$locationText.textContent = "Or. Cimislia, str. Cimislia nr. 27";
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

//left sidebar content
$educationLocationUniversity.append($university, $universityDescr);
$educationLocationHighScool.append($highScool, $highScoolDescr);
$educationLocationScool.append($scool, $scoolDescr);
$educationWrapper.append($education, $educationLocationScool, $educationLocationHighScool, $educationLocationUniversity);
$webWrapper.append($webIcon, $webText);
$emailWrapper.append($emailIcon, $emailText);
$phoneWrapper.append($phoneIcon, $phoneText);
$locationWrapper.append($locationIcon, $locationText);
$contactsWrapper.append($contacts, $locationWrapper, $phoneWrapper, $emailWrapper, $webWrapper);
$leftSidebar.append($personalFoto, $contactsWrapper, $educationWrapper);

//main content

$workExperienceWorkThree.append($workExperienceWorkThreeTitle, $workExperienceWorkThreeYears,$workExperienceWorkThreeDescr, $workExperienceWorkThreeCircle);
$workExperienceWorkTwo.append($workExperienceWorkTwoTitle, $workExperienceWorkTwoYears,$workExperienceWorkTwoDescr, $workExperienceWorkTwoCircle);
$workExperienceWorkOne.append($workExperienceWorkOneTitle, $workExperienceWorkOneYears,$workExperienceWorkOneDescr, $workExperienceWorkOneCircle);
$workExperienceContainer.append($workExperienceWorkOne, $workExperienceWorkTwo, $workExperienceWorkThree);
$mainContent.append($title, $titleInfo, $about, $workExperienceTitle, $workExperienceContainer);
$container.append($leftSidebar, $mainContent);

document.body.append($container);