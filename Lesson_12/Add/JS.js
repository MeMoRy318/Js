// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

const divWrap = document.createElement("div");
divWrap.classList.add("x")
document.body.appendChild(divWrap)
 fetch("https://jsonplaceholder.typicode.com/users")
     .then(value => value.json())
     .then(value => {

         for (const time of value) {

             const divElement = document.createElement("div");
             divElement.classList.add("c");
             divWrap.append(divElement);

             const button = document.createElement("button");
             button.innerText = "posts";

             const buttonComments = document.createElement("button");
             buttonComments.innerText = "comments";

             button.onclick = function (){

                 const div = document.createElement("div");
                 divElement.appendChild(div);

               fetch("https://jsonplaceholder.typicode.com/posts")
                   .then(value1 => value1.json())
                   .then(value1 =>{

                       for (const posts of value1) {

                           if (posts.userId === time.id){

                               for (const postKey in posts) {

                                   const pElement = document.createElement("p");
                                   pElement.innerText = `${postKey} - ${posts[postKey]}`;

                                   div.appendChild(pElement);

                               };
                           };
                       };
                   });
             };
             buttonComments.onclick = function (){

                 const div = document.createElement("div");
                 divElement.appendChild(div);

               fetch("https://jsonplaceholder.typicode.com/comments")
                   .then(value2 => value2.json())
                   .then(value2 =>{

                       for (const posts of value2) {

                           if (posts.postId === time.id){

                               for (const postKey in posts) {

                                   const pElement = document.createElement("p");
                                   pElement.innerText = `${postKey} - ${posts[postKey]}`;
                                   div.appendChild(pElement);

                               };
                           };
                       };
                   });
             };

             function recession (startElement) {

                 for (const key in startElement) {

                     if (typeof startElement[key] !== "object"){

                       const pElement = document.createElement("p");
                       pElement.innerText = `${key} - ${startElement[key]}`;
                         divElement.appendChild(pElement);

                     }else {

                         const pElement = document.createElement("p");
                         pElement.innerText = `${key}`;
                         divElement.appendChild(pElement);

                         recession(startElement[key]);
                     };
                 };

             };

             recession(time);

             divElement.append(button,buttonComments);
         };

     });

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(value => value.json())
    .then(value => {
        for (const time of value) {
            const elementDiv = document.createElement("div");
            elementDiv.classList.add("c")

            const button = document.createElement("button")
            button.innerText = "comments"

            button.onclick = function () {
                fetch("https://jsonplaceholder.typicode.com/comments")
                    .then(value1 => value1.json())
                    .then(value1 => {
                        const div_element = document.createElement("div");
                        elementDiv.appendChild(div_element)
                        for (const time1 of value1) {
                            if (time1.postId === time.id){
                                for (const time1Element in time1) {
                                    const p_element = document.createElement("p")
                                    p_element.innerText = ` ${time1Element} - ${time1[time1Element]}`
                                    div_element.appendChild(p_element)
                                }
                            }
                        }
                    })
            }
            divWrap.appendChild(elementDiv);
            for (const key in time) {
             const p = document.createElement("p")
                p.innerText = `${key} - ${time[key]}`
             elementDiv.appendChild(p)
            }
            elementDiv.appendChild(button)
        };
    });



// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


const buttonSave = document.getElementById("xxx");


buttonSave.onclick = function (e) {
e.preventDefault();

    const form = document.forms.form1;
    const product = form.nameProduct.value;
    const quantity = form.quantityProduct.value;
    const price = form.price.value;
    const img = form.img.value;

if (!localStorage.getItem("prductList")){
    const prductList = [];
    prductList.push({product,quantity,price,img});
 localStorage.setItem("prductList",JSON.stringify(prductList));
}else {
  const prductList = JSON.parse(localStorage.getItem("prductList"));
    prductList.push({product,quantity,price,img});
    localStorage.setItem("prductList",JSON.stringify(prductList));
};
};
