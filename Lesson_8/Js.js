// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
console.log(document.getElementById("content").innerText)
// -- отримує текст з блоку з id "rules"
console.log(document.getElementById("rules").innerText)
// -- замініть текст параграфа з id rules на будь-який інший
document.getElementById("rules").innerText = "Hello Word"
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let child = document.body.children
for (const childElement of child) {
    childElement.style.backgroundColor = "red"
    childElement.style.color = "blue"
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById("rules").classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let getClassFc_rules = document.getElementsByClassName("fc_rules")
for (const classFcRule of getClassFc_rules) {
    classFcRule.style.color = "red"
}



