export {$loopsContainer};

const $loopsContainer = document.createElement("div");

$loopsContainer.classList.add("loops__container", "display__none");

//formarea masivului - elemente
const getNumberWrapper = document.createElement("div");
const getNumberTitle = document.createElement("h2");
const inputNumber = document.createElement("input");
const getnumber = document.createElement("button");
const getNumberList = document.createElement("ul");

getNumberWrapper.classList.add("get__number");
getnumber.classList.add("btn");
getNumberList.classList.add("list");

getNumberTitle.textContent = "Formarea masivului";
getnumber.textContent = "Formeaza masivul";

//eliminarea elementelor ce se dubleaza
const checkDoubleValueWrapper = document.createElement("div");
const checkDoubleValueTitle = document.createElement("h2");
const checkDoubleValueBtn = document.createElement("button");
const checkDoubleValueList = document.createElement("ul");

checkDoubleValueWrapper.classList.add("unic__elements");
checkDoubleValueBtn.classList.add("btn");
checkDoubleValueList.classList.add("list");

checkDoubleValueTitle.textContent = "Eliminarea elementelor ce se dubleaza";
checkDoubleValueBtn.textContent = "Elemente unice";

//calcularea elementelor de cite ori se repeta

const countElementsWrapper = document.createElement("div");
const countElementsTitle = document.createElement("h2");
const calcElementsBtn = document.createElement("button");
const calcElementsList = document.createElement("ul");
const doubleElementList = document.createElement("ul");
const maxNum = document.createElement("p");
const minNum = document.createElement("p");

countElementsWrapper.classList.add("count__elements");
calcElementsBtn.classList.add("btn");
calcElementsList.classList.add("special__list");
doubleElementList.classList.add("special__list");
maxNum.classList.add("special__number");
minNum.classList.add("special__number");

countElementsTitle.textContent = "Informatie referitor la dublarea elementelor in masiv";
calcElementsBtn.textContent = "Numara elemente Unice";


//lista elementelor din masiv introduse din input
const inputElementsWrapper = document.createElement("div");
const inputElementsTitle = document.createElement("h2");
const inputElement = document.createElement("input");
const addElement = document.createElement("button");
const elementsList = document.createElement("ul");
const showBtn = document.createElement("button");

inputElementsWrapper.classList.add("elements__list-wrapper");
elementsList.classList.add("special__list");
addElement.classList.add("btn");
showBtn.classList.add("btn");

inputElementsTitle.textContent = "Creare lista cu elemente introduse in masiv";
addElement.textContent = "Trimite";
showBtn.textContent = "Afiseaza Lista";

//crearea structurii pentru afisare elementelor introduse manual din input
inputElementsWrapper.append(inputElementsTitle, inputElement, addElement, elementsList, showBtn);

//crearea structurii pentru afisarea elelemtelor care se dubleaza
countElementsWrapper.append(countElementsTitle, calcElementsBtn, calcElementsList, doubleElementList, maxNum, minNum);

//crearea masivului cu elemente, eliminarea elementelor ce se dubleaza
getNumberWrapper.append(getNumberTitle, inputNumber, getnumber, getNumberList);
checkDoubleValueWrapper.append(checkDoubleValueTitle, checkDoubleValueBtn, 
checkDoubleValueList)

$loopsContainer.append(getNumberWrapper, checkDoubleValueWrapper, countElementsWrapper, inputElementsWrapper);

let numbers = [];

//crearea elementelor pentru masiv
function getNumbers() {
    getNumberList.innerHTML = "";
    let getNumber = inputNumber.value;
    for (let i = 0; i < getNumber; i++) {
        const numberItem = document.createElement("li");
        let number = Math.floor(Math.random() * getNumber);
        numbers.push(number);
        numberItem.textContent = number;
        getNumberList.append(numberItem);
    }
}

getnumber.addEventListener("click",  getNumbers);


//verificarea elementelor la dublare


checkDoubleValueBtn.addEventListener("click" , () => {
    checkDoubleValueList.innerHTML = "";
    let newNumbers = numbers.filter((number, index) => {
        return numbers.indexOf(number) === index;
    });
    newNumbers.forEach((number) => {
        const numberItem = document.createElement("li");
        numberItem.textContent = number;
        checkDoubleValueList.append(numberItem);
    })
})

//dublarea elementelor din masiv (afisare de cite ore se dubleaza)
function count_duplicate(){
    calcElementsList.innerHTML = "";
    doubleElementList.innerHTML = "";
    let arr = [...numbers];
    let counts = {};
    let props = [];
    let maxNumber = arr.reduce((a, b) => {return a > b ? a : b})
    let minNumber = arr.reduce((a, b) => {return a < b ? a : b})
    maxNum.textContent = `Cifra cea mai mare este ${maxNumber}`;
    minNum.textContent = "Cifra cea mai mica este " + minNumber;
   
    for(let i = 0; i < arr.length; i++){ 
        if (counts[arr[i]]){
        counts[arr[i]] += 1
        } else {
        counts[arr[i]] = 1
        }
       }  
       for (let prop in counts){
                const numberItem = document.createElement("li");
                if(counts[prop] === 1) {
                    numberItem.textContent = "elementul " + prop + " se contine " + counts[prop] + " data";
                }else {
                    numberItem.textContent = "elementul " + prop + " se contine de " + counts[prop] + " ori";
                }
                calcElementsList.append(numberItem);
            props.push(counts[prop]);
       }

        let maxProps = props.reduce((a, b) => {return a > b ? a : b});

       for (let prop in counts) {
        if(counts[prop] === maxProps) {
            const mostGetElement = document.createElement("li");
            mostGetElement.textContent = "cel mai des element intilnit este " + prop + " si este in continut de "  + counts[prop] + " ori";
            doubleElementList.append(mostGetElement);
        }
       }
   }
   
   calcElementsBtn.addEventListener("click", count_duplicate);

   //formarea masiv cu elemente introduse din input
   let elements = [];

   function addElements() {
        let element = inputElement.value;
        elements.push(element);
        inputElement.value = "";
   }

   addElement.addEventListener("click", addElements);

   //afisarea listei cu elementele din masiv creat
   function getList (arr) {
        elementsList.innerHTML = "";
        return arr.forEach((element, index) => {
        const listItem = document.createElement("li")
        listItem.textContent = `elementul cu index: ${index} este: ${element}`;
        elementsList.append(listItem);
     } )
   }
   
showBtn.addEventListener("click", () => {
    getList(elements);
});