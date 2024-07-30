export {$selectContainer};

const $selectContainer = document.createElement("div");
const $productsBox = document.createElement("div");
const $productsNavigation = document.createElement("nav");

const $navigationList = document.createElement("ul");
const $navigationItemAll = document.createElement("li")
const $navigationItemPc = document.createElement("li")
const $navigationItemPhone = document.createElement("li")
const $navigationItemElectro = document.createElement("li")
const $navigationItemOffice = document.createElement("li")
const $navigationItemResort = document.createElement("li")

$selectContainer.classList.add("select__container", "display__none");
$productsBox.classList.add("products__box");
$productsNavigation.classList.add("products__nav");
$navigationList.classList.add("products__nav-list");
$navigationItemAll.classList.add("products__nav-item");
$navigationItemPc.classList.add("products__nav-item");
$navigationItemPhone.classList.add("products__nav-item");
$navigationItemElectro.classList.add("products__nav-item");
$navigationItemOffice.classList.add("products__nav-item");
$navigationItemResort.classList.add("products__nav-item");

$navigationItemAll.setAttribute("data-f", "all");
$navigationItemPc.setAttribute("data-f", "pc");
$navigationItemPhone.setAttribute("data-f", "telefon");
$navigationItemElectro.setAttribute("data-f", "electrocasnic");
$navigationItemOffice.setAttribute("data-f", "birou");
$navigationItemResort.setAttribute("data-f", "resort");

$navigationItemAll.textContent = "Toate";
$navigationItemPc.textContent = "Calculatoare";
$navigationItemPhone.textContent = "Telefoane";
$navigationItemElectro.textContent = "Electrocasnice";
$navigationItemOffice.textContent = "Tehnica de birou";
$navigationItemResort.textContent = "Odihna si sport";

$navigationList.append($navigationItemAll, $navigationItemPc, $navigationItemPhone,$navigationItemElectro, $navigationItemOffice, $navigationItemResort);
$productsNavigation.append($navigationList);

$selectContainer.append($productsNavigation);

let data = {
    pc: {
        pc1 : {
            type: "pc",
            img : "img/sort/pc-1.webp",
            title: "Calculator nr.1",
            price: 5600
        },
        pc2: {
            type: "pc",
            img: "img/sort/pc-2.webp",
            title: "Calculator nr.2",
            price: 7600
        },
        pc3: {
            type: "pc",
            img: "img/sort/pc-3.webp",
            title: "Calculator nr.3",
            price: 10600
        },
        pc4: {
            type: "pc",
            img: "img/sort/pc-4.webp",
            title: "Calculator nr.4",
            price: 8600
        },
        pc5: {
            type: "pc",
            img: "img/sort/pc-5.webp",
            title: "Calculator nr.5",
            price: 5500
        }
    },
    phone: {
        ph1: {
            type: "telefon",
            img: "img/sort/telefon-1.webp",
            title: "Telefon nr. 1",
            price: 3200
        },
        ph2: {
            type: "telefon",
            img: "img/sort/telefon-2.webp",
            title: "Telefon nr. 2",
            price: 6700
        },
        ph3: {
            type: "telefon",
            img: "img/sort/telefon-3.webp",
            title: "Telefon nr. 3",
            price: 5500
        },
        ph4: {
            type: "telefon",
            img: "img/sort/telefon-4.webp",
            title: "Telefon nr. 4",
            price: 7800
        },
        ph5: {
            type: "telefon",
            img: "img/sort/telefon-5.webp",
            title: "Telefon nr. 5",
            price: 10500
        }
    },
    electro: {
        el1: {
            type: "electrocasnic",
            img: "img/sort/electrocasnic-1.webp",
            title: "Electrocasnic nr. 1",
            price: 11200
        },
        el2: {
            type: "electrocasnic",
            img: "img/sort/electrocasnic-2.webp",
            title: "Electrocasnic nr. 2",
            price: 15200
        },
        el3: {
            type: "electrocasnic",
            img: "img/sort/electrocasnic-3.webp",
            title: "Electrocasnic nr. 3",
            price: 11800
        },
        el4: {
            type: "electrocasnic",
            img: "img/sort/electrocasnic-4.webp",
            title: "Electrocasnic nr. 4",
            price: 15000
        },
        el5: {
            type: "electrocasnic",
            img: "img/sort/electrocasnic-5.webp",
            title: "Electrocasnic nr. 5",
            price: 25300
        }
    },
    office: {
        office1: {
            type: "birou",
            img: "img/sort/tehnica-birou-1.webp",
            title: "Tehnica de birou nr.1",
            price: 2500
        },
        office2: {
            type: "birou",
            img: "img/sort/tehnica-birou-2.webp",
            title: "Tehnica de birou nr.2",
            price: 3500
        },
        office3: {
            type: "birou",
            img: "img/sort/tehnica-birou-3.webp",
            title: "Tehnica de birou nr.3",
            price: 8500
        },
        office4: {
            type: "birou",
            img: "img/sort/tehnica-birou-4.webp",
            title: "Tehnica de birou nr.4",
            price: 9500
        },
        office5: {
            type: "birou",
            img: "img/sort/tehnica-birou-5.webp",
            title: "Tehnica de birou nr.5",
            price: 3500
        }
    },
    resort:{
        resort1: {
            type: "resort",
            img: "img/sort/resort-1.webp",
            title: "Resort si sport nr.1",
            price: 2500
        },
        resort2: {
            type: "resort",
            img: "img/sort/resort-2.webp",
            title: "Resort si sport nr.2",
            price: 7500
        },   
        resort3: {
            type: "resort",
            img: "img/sort/resort-3.webp",
            title: "Resort si sport nr.3",
            price: 8500
        },
        resort4: {
            type: "resort",
            img: "img/sort/resort-4.webp",
            title: "Resort si sport nr.4",
            price: 12500
        },
        resort5: {
            type: "resort",
            img: "img/sort/resort-5.webp",
            title: "Resort si sport nr.5",
            price: 15500
        },
    }
}

let newData = [];

//se extrag datele din obiect prin trasnformare in array
function getproductsArray (obj) {
    const keys = Object.values(obj);
for (const key in keys) {
    if (Object.hasOwnProperty.call(keys, key)) {
        const element = keys[key];
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                const elem = element[key];
                    newData.push(elem);
                }
            }
        }
    }
    return newData;
}
getproductsArray(data);

//se amesteca array extras din obiect
let shuffleArray = newData.sort(() => Math.random() - 0.5);

//se extrag datele din array si se formeaza produsele
function getProducts (array) {
   for (const iterator of array) {
            let product = document.createElement("div");
            let productImg = document.createElement("img");
            let productTitle = document.createElement("h4");
            let productPrice = document.createElement("p");
            productImg.classList.add("product__img");
            productTitle.classList.add("product__title");
            productPrice.classList.add("product__price");
            product.classList.add("product", `${iterator.type}`)
            productImg.src = iterator.img;
            productTitle.textContent = iterator.title;
            productPrice.textContent = iterator.price + " lei";
            product.append(productImg, productTitle, productPrice);
            $productsBox.append(product);
     }
     $selectContainer.append($productsBox);
   }
   
getProducts(newData);
