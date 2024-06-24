export {$eventsContainer};

const $eventsContainer = document.createElement("div");
//buton contor
const countBtnWrapper = document.createElement("div");
const countBtnTitle = document.createElement("h2");
const clickBtn = document.createElement("button");

//eveniment pentru butoane de la keyboard
const keypressWrapper = document.createElement("div");
const keypressTitle = document.createElement("h2");
const keyOneImg = document.createElement("img");
const keyTwoImg = document.createElement("img");
const keyThreeImg = document.createElement("img");
const keyFourImg = document.createElement("img");
const keypressInfo = document.createElement("p");
const keypressResult = document.createElement("p");

//clase buton contor
$eventsContainer.classList.add("event__container", "display__none");
countBtnWrapper.classList.add("count__btn-wrapper");
countBtnTitle.classList.add("count__btn-title");
clickBtn.classList.add("count__btn");
clickBtn.type = "button";

countBtnTitle.textContent = "Buton Contor";

//content keypress
keypressTitle.textContent = "Eveniment keypress";
keyOneImg.src = "img/letter-a.png";
keyTwoImg.src = "img/letter-b.png";
keyThreeImg.src = "img/letter-c.png";
keyFourImg.src = "img/letter-d.png";
keypressInfo.textContent = "Accesati de la tastatură una din litere din imagine";


keyOneImg.alt = "litera a";
keyTwoImg.alt = "litera b";
keyThreeImg.alt = "litera c";
keyFourImg.alt = "litera d";


//butonul contor - functia
clickBtn.textContent = "Click";
let count = 0;
function click() {
    count++;
    clickBtn.textContent = "Click: " + " (" + count + ")";
}

clickBtn.addEventListener("click", click);

//keypress function
//eveniment la apasarea butonului din imagine
document.addEventListener("keypress", (event) => {
    const keyName = event.key;
    switch(keyName) {
        case "a": keypressResult.textContent = "A fost accesat butonul: A";
        break;
        case "b": keypressResult.textContent = "A fost accesat butonul: B";
        break;
        case "c": keypressResult.textContent = "A fost accesat butonul: C";
        break;
        case "d": keypressResult.textContent = "A fost accesat butonul: D";
        break;
        default: keypressResult.textContent = "Nu a fost accesat litera corespunzatoare";
    }
  });



keypressWrapper.append(keypressTitle, keyOneImg, keyTwoImg, keyThreeImg, keyFourImg, keypressInfo, keypressResult);
countBtnWrapper.append(countBtnTitle, clickBtn);
$eventsContainer.append(countBtnWrapper, keypressWrapper);
