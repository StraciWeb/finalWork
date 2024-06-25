export {$functionsContainer};

const $functionsContainer = document.createElement("div");

//formarea unui unghi
const angle = document.createElement("div");
const angleTitle = document.createElement("h2");
const angleInput = document.createElement("input");
const angleBtn = document.createElement("button");
const angleDescr = document.createElement("p");
const angleBox = document.createElement("div");
const angleLine = document.createElement("span");

$functionsContainer.classList.add("functions__container", "display__none");
angle.classList.add("box", "angle");
angleTitle.classList.add("box__title");
angleInput.classList.add("input__number");
angleBtn.classList.add("btn");
angleDescr.classList.add("angle__descr");
angleBox.classList.add("angle__box");
angleLine.classList.add("angle__line");

angleTitle.textContent = "Crearea unui unghi";
angleBtn.textContent = "Afiseaza";
angleDescr.textContent = "Unghiul din imagine are 0 grade";

angleInput.placeholder = "Introduceti valoarea unghiului";

//cautare tara dupa cod
const country = document.createElement("div");
const countryTitle = document.createElement("h2");
const countryInput = document.createElement("input");
const countryBtn = document.createElement("button");
const countryDescr = document.createElement("p");

country.classList.add("box", "country");
countryTitle.classList.add("box__title");
countryInput.classList.add("country__input", "input__number");
countryBtn.classList.add("btn");
countryDescr.classList.add("country__text");

countryTitle.textContent = "Cauta tara dupa Cod-Tara";
countryBtn.textContent = "Cauta";

countryInput.placeholder = "Introduceti cod tara";

//elaborarea unghiului
let getUngle = function () {
    const ungleValue = angleInput.value;
    if(ungleValue < 90) {
        angleLine.style.transform = "rotate(" + ungleValue +"deg)";
        angleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi ascutit."
    }else if (ungleValue == 90) {
        angleLine.style.transform = "rotate(" + ungleValue +"deg)";
        angleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi drept."
    }else if (ungleValue > 90 && ungleValue < 180) {
        angleLine.style.transform = "rotate(" + ungleValue +"deg)";
        angleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi optuz."
    }else if (ungleValue == 180) {
        angleLine.style.transform = "rotate(" + ungleValue +"deg)";
        angleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade, si este unghi alungit."
    }
    else if (ungleValue == 0) {
        angleLine.style.transform = "rotate(" + ungleValue +"deg)";
        angleDescr.textContent = "Unghiul din imagine are " + ungleValue + " grade."
    }else {
        angleDescr.textContent = "Ati introdus o valoare mai mare de 180 grade -  " + ungleValue + " grade."
    }
} 

angleBtn.addEventListener("click", getUngle);

// //cautare tara dupa cod

let getCountry = () => {
    let countryCod = countryInput.value.toLowerCase();
    switch(countryCod) {
        case "md":  
            countryDescr.textContent = "Republica Moldova, Prefix telefon: 373";
        break;
        case "ro": 
            countryDescr.textContent = "Romania, Prefix telefon: 40";
        break;
        case "ua": 
            countryDescr.textContent = "Ucraina, Prefix telefon: 380";
        break;
        case "gb": 
            countryDescr.textContent = "Marea Britanie, Prefix telefon: 44";
        break;
        case "us": 
            countryDescr.textContent = "Statele Unite ale Americii, Prefix telefon: 1";
        break;
        case "es": 
            countryDescr.textContent = "Spania, Prefix telefon: 34";
        break;
        case "pt": 
            countryDescr.textContent = "Portugalia, Prefix telefon: 351";
        break;
        case "pa": 
            countryDescr.textContent = "Panama, Prefix telefon: 507";
        break;
        case "np": 
            countryDescr.textContent = "Nepal, Prefix telefon: 977";
        break;
        case "mx": 
            countryDescr.textContent = "Mexico, Prefix telefon: 52";
        break;
        default: 
            countryDescr.textContent = "Introduceti codul tarii";
    }
}

countryBtn.addEventListener("click", getCountry);

country.append(countryTitle, countryInput, countryBtn, countryDescr)

angleBox.append(angleLine);
angle.append(angleTitle, angleInput, angleBtn, angleDescr, angleBox);
$functionsContainer.append(angle, country);