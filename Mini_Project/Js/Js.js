// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
const diwWrap = document.createElement("div");
document.body.appendChild(diwWrap);
fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value => {
        for (const time of value) {
            const {id,name} = time;
            const divBloc = document.createElement("div");
            divBloc.innerHTML = `<h2>ID : ${id}</h2>
                                 <p> <strong>Name : ${name}</strong></p>`;

            const button = document.createElement("button");
             button.innerHTML = `<a href="user-details.html" style="text-decoration: none">Click</a>`

            button.onclick = function (){
            localStorage.setItem("user",JSON.stringify(time));
            };

            divBloc.appendChild(button);

            diwWrap.appendChild(divBloc);
        };
    });

//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
