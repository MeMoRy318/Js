// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
const user = JSON.parse(localStorage.getItem("user"));

const divWrap = document.createElement("div");
document.body.appendChild(divWrap);

const divBlock = document.createElement("div");
divWrap.appendChild(divBlock);

const recursion = (startElement) =>{
    for (const key in startElement) {
        if(typeof startElement[key] === "object"){
            const pElement = document.createElement("p");
            pElement.innerHTML = `<strong>${key}</strong>`;
            divBlock.appendChild(pElement);
            recursion(startElement[key])
        }else {
            const pElement = document.createElement("p");
            pElement.innerHTML = `<strong>${key}</strong> - ${startElement[key]}`;
            divBlock.appendChild(pElement);
        }
    }
}
recursion(user)

