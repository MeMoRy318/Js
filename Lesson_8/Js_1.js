// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById("main_header").classList.add("march_2022")
// b) робить шириниу елементу ul 400px
let tagUl = document.getElementsByTagName("ul")[0]
tagUl.style.width = "400px"
tagUl.style.border = "1px solid blue"
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// e) отримує всі елементи li та змінює ім колір фону на сірий
for (const tagUlElement of tagUl.children) {
    tagUlElement.style.width = "50%"
    tagUlElement.style.backgroundColor = "gray"
}
// d) отримує текст який зберігається в елементі з класом listElement2
console.log(document.getElementsByClassName("listElement2")[0].innerText)
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// f) отримує всі елементи 'a' та додає їм клас anchor
for (const tagA of document.getElementsByTagName("a")) {
    tagA.classList.add("anchor")
    tagA.classList.add(`element_${tagA.innerText}`)
    if (tagA.innerText ==="link3"){
        tagA.style.fontSize = "40px"
    }
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const classSubHeader of document.getElementsByClassName("sub-header")) {
    classSubHeader.style.backgroundColor = prompt("color")
    if (classSubHeader.innerText === "content 2 segment"){
        classSubHeader.style.color = prompt("color")
    }
    
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName("content_1")[0].innerText = prompt("text")
// l) отримати елементи p та змінити їм padding на 20px
for (const elment_p of document.getElementsByTagName("p")) {
    elment_p.style.padding = "20px"
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
document.getElementsByClassName("text2")[0].innerText = "Hello Okten"
