// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
const divWrap = document.createElement("div");
divWrap.classList.add("wrap");
document.body.appendChild(divWrap);

const diwWrap = document.createElement("div");
diwWrap.classList.add("wrapBlock");
divWrap.appendChild(diwWrap);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value => {

        for (const time of value) {
            const {id,name} = time;
            const divBloc = document.createElement("div");
            divBloc.classList.add("block");
            divBloc.innerHTML = `<h2>ID : ${id}</h2>
                                 <p> <strong>Name : ${name}</strong></p>`;

            const button = document.createElement("button");
             button.innerText = "Click";
             button.style.height = "30px";

            button.onclick = function (){
             window.location.href = 'user-details.html'
            localStorage.setItem("user",JSON.stringify(time));
            };

            divBloc.appendChild(button);

            diwWrap.appendChild(divBloc);
        };
    });



