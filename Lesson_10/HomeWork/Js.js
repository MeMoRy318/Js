// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
const divElement = document.createElement("div");
divElement.setAttribute("id","text");
divElement.innerText = "hello";

 const button = document.createElement("button");
button.innerText = "Click";

document.body.append(button,divElement);

button.onclick = function ()  {
    divElement.style.display = "none";
};
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

const input = document.createElement("input");
input.type = "number";
input.placeholder = "age";

const button1 = document.createElement("button");
button1.innerText = "Click1";

document.body.append(input,button1);

button1.addEventListener("click",function () {
    input.value >= 18 ? alert("Hello"):alert("Goodbye")
});



// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const button2 = document.createElement("button");
button2.innerText = "Click2";

document.body.appendChild(button2);

button2.addEventListener("click",function () {
    const form = document.forms;
   const input1 = form.form1.input1.value;
   const input2 = form.form1.input2.value;
   const input3 = form.form2.input3.value;
   const input4 = form.form2.input4.value;
    console.log(input1,input2,input3,input4);

});
// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)

const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "tr";

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "td";

const input3 = document.createElement("input");
input3.type = "text";
input3.placeholder = "text";


const button3 = document.createElement("button");
button3.innerText = "Creator table";

const br = document.createElement("br");

document.body.append(br,input1,input2,input3,button3);

button3.onclick = function () {
    const table = document.createElement("table");
    document.body.appendChild(table);
    for (let i = 0; i < input1.value; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);

        for (let j = 0; j < input2.value; j++) {
            const td = document.createElement("td");
            td.innerText = input3.value;
            tr.appendChild(td);
        };
    };

};