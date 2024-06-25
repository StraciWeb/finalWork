export {$containerOperators};
const $containerOperators = document.createElement("div"); //se formeaza container pentru continut
$containerOperators.classList.add("operators__container", "display__none");

const $firstCheck = document.createElement("div");//container pentru prima verificare
$firstCheck.classList.add("first__check");

const $secondCheck = document.createElement("div");//container pentru a doua verificare
$secondCheck.classList.add("second__check");

const $titleFirst = document.createElement("h2");//titlu pentru primul container
$titleFirst.textContent = "Verificare cifra metoda nr. 1";

const $titleSecond = document.createElement("h2");//titlu pentru al doilea container
$titleSecond.textContent = "Verificare cifra metoda nr. 2";

const $titleCalculator = document.createElement("h2");//titlu pentru calculator
$titleCalculator.textContent = "Calculator";

const $input = document.createElement("input"); //imput pentru prima verificare
$input.type = "number";
$input.placeholder = "Introduceti un nr.";
$input.classList.add("input__number");

const $secondInput = document.createElement("input"); //input pentru a doua verificare
$secondInput.type = "number";
$secondInput.placeholder = "Introduceti un nr.";
$secondInput.classList.add("input__number");

const $threeInput = document.createElement("input"); //input pentru a doua verificare
$threeInput.type = "number";
$threeInput.placeholder = "Introduceti un nr.";
$threeInput.classList.add("input__number");

const $resultText = document.createElement("p"); //mesaj la prima verificare
$resultText.textContent = "In rezultat se va obtine un mesaj in depedenta de cifra introdusa";

const $secondResultText = document.createElement("p"); //mesaj la a doua verificare
$secondResultText.textContent = "In rezultat se va obtine un mesaj in depedenta de cifrele introduse";

const $btnFirts = document.createElement("button");//buton pentru prima verificare
$btnFirts.textContent = "Verifica";
$btnFirts.classList.add("btn");

const $btnSecond = document.createElement("button");
$btnSecond.textContent = "Verifica";
$btnSecond.classList.add("btn");


//calculatorul-----------------------------------------------------------

const $calculatorWrapper = document.createElement("div");
const $buttonsWrapper = document.createElement("div");
const result = document.createElement("input");
const clearInput = document.createElement("input");
const resetInput = document.createElement("input");
const percentInput = document.createElement("input");
const deleteInput = document.createElement("input");
const sevenInput = document.createElement("input");
const eigthInput = document.createElement("input");
const nineInput = document.createElement("input");
const divideInput = document.createElement("input");
const fourInput = document.createElement("input");
const fiveInput = document.createElement("input");
const sixInput = document.createElement("input");
const multipleInput = document.createElement("input");
const oneInput = document.createElement("input");
const twoInput = document.createElement("input");
const threeInput = document.createElement("input");
const minusInput = document.createElement("input");
const dotInput = document.createElement("input");
const zeroInput = document.createElement("input");
const egalInput = document.createElement("input");
const summInput = document.createElement("input");

result.type = "text";
clearInput.type = "button";
resetInput.type = "button";
percentInput.type = "button";
deleteInput.type = "button";
sevenInput.type = "button";
eigthInput.type = "button";
nineInput.type = "button";
divideInput.type = "button";
fourInput.type = "button";
fiveInput.type = "button";
sixInput.type = "button";
multipleInput.type = "button";
oneInput.type = "button";
twoInput.type = "button";
threeInput.type = "button";
minusInput.type = "button";
dotInput.type = "button";
zeroInput.type = "button";
egalInput.type = "button";
summInput.type = "button";

clearInput.value = "C";
resetInput.value = "CE";
percentInput.value = "%";
deleteInput.value = "";
sevenInput.value = "7";
eigthInput.value = "8";
nineInput.value = "9";
divideInput.value = "/";
fourInput.value = "4";
fiveInput.value = "5";
sixInput.value = "6";
multipleInput.value = "*";
oneInput.value = "1";
twoInput.value = "2";
threeInput.value = "3";
minusInput.value = "-";
dotInput.value = ".";
zeroInput.value = "0";
egalInput.value = "=";
summInput.value = "+";

$calculatorWrapper.classList.add("calculator__wrapper");
result.classList.add("result");
$buttonsWrapper.classList.add("buttons");
clearInput.classList.add("symbol", "calc__btn");
resetInput.classList.add("symbol", "calc__btn");
percentInput.classList.add("symbol", "calc__btn");
deleteInput.classList.add("symbol", "del", "calc__btn");
sevenInput.classList.add("calc__btn");
eigthInput.classList.add("calc__btn");
nineInput.classList.add("calc__btn");
divideInput.classList.add("symbol", "calc__btn");
fourInput.classList.add("calc__btn");
fiveInput.classList.add("calc__btn");
sixInput.classList.add("calc__btn");
multipleInput.classList.add("calc__btn", "symbol");
oneInput.classList.add("calc__btn");
twoInput.classList.add("calc__btn");
threeInput.classList.add("calc__btn");
minusInput.classList.add("calc__btn", "symbol");
dotInput.classList.add("calc__btn");
zeroInput.classList.add("calc__btn");
egalInput.classList.add("calc__btn");
summInput.classList.add("calc__btn", "symbol");

percentInput.addEventListener("click", () => {
    dis('%')
});
sevenInput.addEventListener("click", () => {
    dis('7')
});
eigthInput.addEventListener("click", () => {
    dis('8')
});
nineInput.addEventListener("click", () => {
    dis('9')
});
divideInput.addEventListener("click", () => {
    dis('/')
});
fourInput.addEventListener("click", () => {
    dis('4')
});
fiveInput.addEventListener("click", () => {
    dis('5')
});
sixInput.addEventListener("click", () => {
    dis('6')
});
multipleInput.addEventListener("click", () => {
    dis('*')
});
oneInput.addEventListener("click", () => {
    dis('1')
});
twoInput.addEventListener("click", () => {
    dis('2')
});
threeInput.addEventListener("click", () => {
    dis('3')
});
minusInput.addEventListener("click", () => {
    dis('-')
});
dotInput.addEventListener("click", () => {
    dis('.')
});
zeroInput.addEventListener("click", () => {
    dis('0')
});
summInput.addEventListener("click", () => {
    dis('+')
});
egalInput.addEventListener("click", () => {
    resolve();
});


//sfirsit calculator------------------------------------------

//functia la prima verificare
$btnFirts.onclick = function checkNumber() {
    let number = $input.value;
    console.log(number);
    if(number > 13) {
        let result = (number - 13) * 2;
        $resultText.textContent = "Cifra introdusa este " + number + " si este mai mare decit 13 si rezultatul final este " + result;
        $resultText.classList.add("big__number");
        $resultText.classList.remove("small__number");
    }else{
        $resultText.textContent = "Cifra introdusa este " + number + " si este mai mica decit 13";
        $resultText.classList.add("small__number")
    }
    $input.value = "";
}

//functie la a doua verificare
$btnSecond.onclick = function checkSecondNumber() {
    let firstNumber = $secondInput.value;
    let secondNumber = $threeInput.value;
    if (firstNumber < 0 || secondNumber < 0) {
        $secondResultText.textContent = "Una din cifrele introduse este negativa, primul nr. este " + firstNumber + " al doilea nr. este " + secondNumber;
    }else {
        $secondResultText.textContent = "Ambele numere sunt pozitive sau egal cu 0, primul nr. este " + firstNumber + " al doilea nr. este " + secondNumber;
    }
    $secondInput.value = "";
    $threeInput.value = "";
}

//calculatorul======================================================\

let regEx = /([\+\-]?\d+\.?\d*[\+\-\*\/]?)/g;
//extragerea datelor introduse cu ajutorul mouse
function dis(val) {
        result.value += val;
        const symbols = ['-', '+', '*', '/'];
        symbols.forEach((symbol) => {  
        let str = result.value;
            (str.includes(symbol + '/') ? result.value = result.value.slice(0, result.value.length - 1) : result.value); 
            (str.includes(symbol + '+') ? result.value = result.value.slice(0, result.value.length - 1) : result.value); 
            (str.includes(symbol + '-') ? result.value = result.value.slice(0, result.value.length - 1) : result.value); 
            (str.includes(symbol + '*') ? result.value = result.value.slice(0, result.value.length - 1) : result.value); 
        })
} 

result.addEventListener("input", () => {
    let exvalue = result.value.match(regEx)
    result.value = exvalue.join('');
})

window.addEventListener("keydown", function (event) { 
            if (event.key === "Enter") { 
                resolve(); 
            } 
    }); 
     
function resolve() { 
        let x = result.value; 
        let y = math.evaluate(x).toFixed(6);
        result.value = y; 
        } 

clearInput.addEventListener("click", () => {
    result.value = "";
})

window.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
        result.value = "";
    }
})

deleteInput.addEventListener("click", ()=> {
 
result.value = result.value.slice(0, result.value.length - 1);
})

window.addEventListener("keydown", (event)=> {
    if(event.key === "Backspace") {
        result.value = result.value.slice(0, result.value.length - 1);
    }
})

//sfirsit calculator======================================================

$calculatorWrapper.append(result, $buttonsWrapper);
$buttonsWrapper.append(clearInput, resetInput, percentInput, deleteInput, sevenInput, eigthInput, nineInput, divideInput, fourInput, fiveInput, sixInput, multipleInput, oneInput, twoInput, threeInput, minusInput, dotInput, zeroInput, egalInput, summInput);

$firstCheck.append($titleFirst, $input, $btnFirts, $resultText);
$secondCheck.append($titleSecond, $secondInput, $threeInput, $btnSecond, $secondResultText);

$containerOperators.append($firstCheck, $secondCheck, $titleCalculator, $calculatorWrapper);





