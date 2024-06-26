export {$formContainer};
import { closeSvg } from "./svg.js";

//elementele pentru input forma
const $formContainer = document.createElement("div");
const formWrapper = document.createElement("div");
const closeForm = document.createElement("button");
const formTitle = document.createElement("h2");
const regForm = document.createElement("form");
const inputName = document.createElement("input");
const inputAge = document.createElement("input");
const inputEmail = document.createElement("input");
const selectCurs = document.createElement("select"); 
const selectCursOption1 = document.createElement("option");
const selectCursOption2 = document.createElement("option");
const selectCursOption3 = document.createElement("option");
const selectCursOption4 = document.createElement("option");
const submitBtn = document.createElement("button");
const succesBox = document.createElement("div");
const succesImg = document.createElement("img");
const succesText = document.createElement("p");
//elemente pentru span/error forma
const errorName = document.createElement("span");
const errorAge = document.createElement("span");
const errorEmail = document.createElement("span");
const errorCurs = document.createElement("span");

//clase elemente forma
$formContainer.classList.add("form__container");
formWrapper.classList.add("form__wrapper");
closeForm.classList.add("form__close");
regForm.classList.add("form");
inputName.classList.add("input");
inputAge.classList.add("input");
inputEmail.classList.add("input");
selectCurs.classList.add("input");
submitBtn.classList.add("submit__btn");
succesBox.classList.add("succes", "none");
succesImg.classList.add("succes__img");
succesText.classList.add("succes__text");

//clase elemente error
errorName.classList.add("error");
errorAge.classList.add("error");
errorEmail.classList.add("error");
errorCurs.classList.add("error");

//placeholder inputs
inputName.placeholder = "Numele, prenumele";
inputAge.placeholder = "Virsta";
inputEmail.placeholder = "Email";
closeForm.innerHTML = closeSvg;

formTitle.textContent = "Inregistrare la curs";
selectCursOption1.textContent = "Alege un curs";
selectCursOption2.textContent = "Applied AI Tools For Business";
selectCursOption3.textContent = "Python + Mini Project With AI";
selectCursOption4.textContent = "Front-End Development";
selectCursOption1.selected;
selectCursOption1.value = "";
selectCursOption2.value = "ai for busines";
selectCursOption3.value = "python";
selectCursOption4.value = "front-end";
submitBtn.textContent = "Inregistreaza";
succesImg.src = "./img/succes.png";
succesText.textContent = "Succes, ati fost inregistrat";

//actiune click butonul de inchidere fereastra modal
closeForm.addEventListener("click", () => {
    $formContainer.classList.remove("open");
})

window.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
        $formContainer.classList.remove("open");
    }
})

  //eveniment la trimiterea informatiei din forma, cu verificare la completarea cimpurilor

  function checkInputs () {
    let flag = true;
    let selectedIndex = selectCurs.selectedIndex; 
    let selectedOption = selectCurs.options[selectedIndex].value; 
    if(selectedOption === "") {
        errorCurs.style.display = "block";
        selectCurs.classList.add("error__border");
        errorCurs.textContent = "Selectati un curs";
        flag = false;
    }else {
        errorCurs.style.display = "none";
        selectCurs.classList.remove("error__border");
    }
    if(inputName.value === "") {
        errorName.style.display = "block";
        inputName.classList.add("error__border");
        errorName.textContent = "Introduceti Numele, prenumele";
        flag = false;
    }
    else{
        errorName.style.display = "none";
        inputName.classList.remove("error__border");
    }
    if(inputAge.value === "") {
        errorAge.style.display = "block";
        inputAge.classList.add("error__border");
        errorAge.textContent = "Introduceti Virsta";
        flag = false;
    }
    else{
        errorAge.style.display = "none";
        inputAge.classList.remove("error__border");
  
    }
    if(inputEmail.value === "") {
        errorEmail.style.display = "block";
        inputEmail.classList.add("error__border");
        errorEmail.textContent = "Introduceti email";
        flag = false;
    }
    else {
        errorEmail.style.display = "none";
        inputEmail.classList.remove("error__border");
    }

    return flag
  }
  
  submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
        if(checkInputs() === true) {
            succesBox.classList.remove("none");
        }
  })

succesBox.append(succesImg, succesText);

selectCurs.append(selectCursOption1, selectCursOption2, selectCursOption3, selectCursOption4);

regForm.append(inputName, errorName, inputAge, errorAge, inputEmail, errorEmail, selectCurs, errorCurs, submitBtn, succesBox);
formWrapper.append(formTitle, closeForm, regForm);
$formContainer.append(formWrapper);