// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
const user = JSON.parse(localStorage.getItem("user"));

const divWrap = document.createElement("div");
divWrap.classList.add("wrap");
document.body.appendChild(divWrap);

const divBlock = document.createElement("div");
divBlock.classList.add("block");

const divBlockTitle = document.createElement("div");
divBlockTitle.classList.add("blockTitle");
divWrap.append(divBlock,divBlockTitle);


const button = document.createElement("button");
button.innerText = "post of current user";


const recursion = (startElement) =>{

    for (const key in startElement) {

        if(typeof startElement[key] === "object"){

            const pElement = document.createElement("p");
            pElement.innerHTML = `<strong>${key}</strong>`;
            divBlock.appendChild(pElement);

            recursion(startElement[key]);
        }else {
            const pElement = document.createElement("p");
            pElement.innerHTML = `<strong>${key}</strong> - ${startElement[key]}`;
            divBlock.appendChild(pElement);
        };
    };
};
recursion(user)

 button.onclick = function (){
     fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
         .then(value => value.json())
         .then(value =>{
             for (const time of value) {
                 const divTitle = document.createElement("div");
                 divTitle.classList.add("postBlock")

                 divTitle.innerHTML = `<p>${time.title}</p>`;
                 divBlockTitle.append(divTitle);

                 const buttonPost = document.createElement("button");
                 buttonPost.innerText = "Click";
                 buttonPost.onclick = function (){
                     window.location.href = 'post-details.html'
                     localStorage.setItem("user_Post",JSON.stringify(time));
                 };

                 divTitle.append(buttonPost);
             };
         });
 };
divBlock.appendChild(button);




