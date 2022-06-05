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
const postDetails = JSON.parse(localStorage.getItem("user_Post"));

const diwWrap = document.createElement("div");
diwWrap.classList.add("wrap");
document.body.appendChild(diwWrap);

const divBlock = document.createElement("div");
divBlock.classList.add("block");
diwWrap.appendChild(divBlock);

const divBlocComents = document.createElement("div")
divBlocComents.classList.add("blockComents")
diwWrap.appendChild(divBlocComents)

for (const key in postDetails) {

    const divElement = document.createElement("div");
    divElement.innerText = `${key} - ${postDetails[key]}`;
    divBlock.appendChild(divElement);
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails.id}/comments`)
.then(value => value.json())
.then(value =>{

    for (const time of value) {
        const blockDiv = document.createElement("div");
        blockDiv.classList.add("coments")
        divBlocComents.appendChild(blockDiv);

        for (const key in time) {
            const divElement = document.createElement("div");
            divElement.innerHTML = `<strong>${key}</strong> - ${time[key]}`;
            blockDiv.appendChild(divElement);
        };
    };
})