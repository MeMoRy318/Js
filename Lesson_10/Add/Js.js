const br = document.createElement("br")
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const arrey = ["dac","gich"]
const input = document.createElement("input");
input.type = "text";

const button = document.createElement("button");
button.innerText = "Click";

document.body.append(input,button);
button.onclick = function () {
    for (const time of arrey) {
if (input.value.toUpperCase().toLowerCase().includes(time)){
    alert("ALERT")
}
    }

}



// - Создайте меню, которое раскрывается/сворачивается при клике


const button1 = document.createElement("button");
button1.innerText ="Click";

const divElement = document.createElement("div");
divElement.classList.add("test")
divElement.setAttribute("id","z")
divElement.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, suscipit?";

document.body.append(br,divElement,button1,br);

button1.addEventListener("click",function () {
    divElement.classList.toggle("xxx");

});
//Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.
const div = document.createElement("div");
document.body.append(div);

const inputUserName = document.createElement("input");
inputUserName.type = "text";
inputUserName.placeholder = "Enter your name";

const inputUserComent = document.createElement("input");
inputUserComent.type = "text";
inputUserComent.placeholder = "Enter your coment";

const button2 = document.createElement("button");
button2.innerText = "Send";
document.body.append(inputUserName,br,inputUserComent,button2);
document.body.append(button2);

button2.addEventListener("click",function () {
    const divElement = document.createElement("div");
    div.appendChild(divElement)

    const h1 = document.createElement("h1");
    h1.innerText = inputUserName.value;

    const pElement = document.createElement("p");
    pElement.innerText = inputUserComent.value;

    const button = document.createElement("button");
    button.innerText = "Click";


    button.onclick = function () {
divElement.classList.toggle("xxx");
    }

    divElement.append(h1,pElement);
    div.appendChild(button);


});


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

const button3 = document.createElement("button");
button3.innerText = "Click";
button3.onclick = function (e) {
    this.classList.toggle("xxx");

};
document.body.appendChild(button3);


document.body.onclick = function (e){
    console.log(e);
};
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.body.onclick = function (e) {
    const localName = e.path[0].localName;
    const classList = e.path[0].classList.value;
    const id = e.path[0].id;
    const height = e.path[0].offsetHeight;
    const width = e.path[0].clientWidth;
    const divElement = document.createElement("div");

    divElement.innerHTML = `localName - ${localName} <br> classList - ${classList} <br> id - ${id}<br> height - ${height}<br> width - ${width}`;
    divElement.style.border = "1px solid red";
    document.body.appendChild(divElement);

console.log(localName,classList,id,height,width);
};

// -- взять массив пользователей
 let usersWithAddress = [
     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
 ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const label = document.createElement("label");
label.innerText = "Users status folse";
const inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.name = "users_filter";
label.appendChild(inputElement);


const label2 = document.createElement("label");
label2.innerText = "Users over 29 years old";
const inputElement2 = document.createElement("input");
inputElement2.type = "checkbox";
inputElement2.name = "users_filter";
label2.appendChild(inputElement2);



const label3 = document.createElement("label");
label3.innerText = "Users city Kyiv";
const inputElement3 = document.createElement("input");
inputElement3.type = "checkbox";
inputElement3.name = "users_filter";
label3.appendChild(inputElement3);


document.body.append(br,label,label2,label3);

const divElement1 = document.createElement("div");
document.body.appendChild(divElement1);

inputElement.onclick = function (){
    if (inputElement.checked) {
        divElement1.innerText = "";
        for (const time of usersWithAddress) {
            if (!time.status) {
                for (const key in time) {
                    const address = time[key]

                     if (typeof address !== "object") {

                         const pElement = document.createElement("p");
                         pElement.innerText = `${key} - ${time[key]}`;
                         divElement1.appendChild(pElement);
                     };


                    if (key === "address"){
                        for (const key in address) {
                            const pElement = document.createElement("p");
                            pElement.innerText = `${key} - ${address[key]}`;
                            divElement1.appendChild(pElement);
                        };
                    };
                };
            };
        };
    }else if (!inputElement.checked){
        divElement1.innerText = "";
    };

};
inputElement2.onclick = function (){

    if (inputElement2.checked) {
        divElement1.innerText = "";
        for (const time of usersWithAddress) {
            if (time.age >= 29) {
                for (const key in time) {
                    const address = time[key]

                     if (typeof address !== "object") {

                         const pElement = document.createElement("p");
                         pElement.innerText = `${key} - ${time[key]}`;
                         divElement1.appendChild(pElement);
                     };


                    if (key === "address"){
                        for (const key in address) {
                            const pElement = document.createElement("p");
                            pElement.innerText = `${key} - ${address[key]}`;
                            divElement1.appendChild(pElement);
                        };
                    };
                };
            };
        };
    }else if (!inputElement.checked){
        divElement1.innerText = "";
    };

};
inputElement3.onclick = function (){

    if (inputElement3.checked) {
        divElement1.innerText = "";
        for (const time of usersWithAddress) {
            if (time.address.city === "Kyiv") {
                for (const key in time) {
                    const address = time[key]

                     if (typeof address !== "object") {

                         const pElement = document.createElement("p");
                         pElement.innerText = `${key} - ${time[key]}`;
                         divElement1.appendChild(pElement);
                     };


                    if (key === "address"){
                        for (const key in address) {
                            const pElement = document.createElement("p");
                            pElement.innerText = `${key} - ${address[key]}`;
                            divElement1.appendChild(pElement);
                        };
                    };
                };
            };
        };
    }else if (!inputElement.checked){
        divElement1.innerText = "";
    };

};



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/
// або якось іншим способом змінює свій стан
document.body.onmouseup = function (ev) {
    const select = window.getSelection().toString();
    const text = ev.path[0].innerText
    const text1 = ev.path[0]
    if (text1.localName === "p" || text1.localName === "div") {
        text1.innerHTML = text.replaceAll(select, `<strong>${select}</strong>`)
    }
}
