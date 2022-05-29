// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
const button = document.getElementById("button");
const usersList = [];

button.onclick = function (e) {

    e.preventDefault();

    const form1 = document.forms.form1;
    const login = form1.login.value;
    const password = form1.password.value;

    usersList.push({login,password});

    localStorage.setItem("usersListLogin",JSON.stringify(usersList));
};


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


const button1 = document.getElementById("button1");

button1.onclick = function (ev) {

    ev.preventDefault();

    if (!localStorage.getItem("avtoList")) {

        const avtoList = [];

        localStorage.setItem("avtoList",JSON.stringify(avtoList));

    };

    const form2 = document.forms.form2;
    const model = form2.model.value;
    const type = form2.type.value;
    const volume = form2.volume.value;

     const avtoList = JSON.parse(localStorage.getItem("avtoList"));

      avtoList.push({model,type,volume});

      localStorage.setItem("avtoList",JSON.stringify(avtoList));

};
//=========================================== ADD===================================================================
const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const diwWrap = document.createElement("div");
document.body.appendChild(diwWrap);
const foo = (startElement)=>{
    const divUserBlock = document.createElement("div");

    const button = document.createElement("button")
    button.innerText = "Click"

    button.onclick = function () {
        if (!localStorage.getItem("users")){
            const users = [];
            localStorage.setItem("users",JSON.stringify(users))
        };
        const users = JSON.parse(localStorage.getItem("users"))
        users.push(startElement)

        localStorage.setItem("users",JSON.stringify(users))
    };

    diwWrap.append(divUserBlock,button)

    for (const key in startElement) {
const h2Element = document.createElement("h2")
        h2Element.innerText = key;

const pElement = document.createElement("p");
        pElement.innerText = startElement[key];

        divUserBlock.append(h2Element,pElement)

    };
};
users.forEach(value => foo(value))

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест
// в документ всіх обраних на попередньому етапі.



