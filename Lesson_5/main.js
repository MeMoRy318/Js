// Все стірлочними!!!!!!!!!
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr = (arey) =>{
    let result = 0
    for (const areyElement of arey) {
        result = areyElement + result
    }
    return result / arey.length
}
let x = [11,12,13,14,15]
console.log(arr(x))
// - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let namber = (...arr) =>{
    let time = arr[0]
    let time1 = arr[0]
    for (const arrElement of arr) {
        if (time > arrElement){
          time = arrElement
        }
        if (time < arrElement){
          time1 = arrElement
        }
    }
    console.log(time)
    return time1
}
console.log(namber(12,21,43))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomNamber = (max,limit)=>{
    let arr = []
    for (let i = 0; i < max; i++) {
        arr.push(Math.round(Math.random()*limit))
    }
    return arr
}
console.log(randomNamber(10,100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let rewers = (arr) => {
    let rArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        rArr.push(arr[i])
    }
    return rArr
}
// - створити функцію яка приймає масив та виводить кожен його елемент
let getArr = (arr) =>{
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let getArrr = (arr) =>{
    let arrObject = []
    arrObject[0] = arr[1]
    arrObject[1] = arr[0]
    return arrObject
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let creatorParagraf = (text)=>{
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatorUl = (text)=>{
    document.write(`<ul>`)
    document.write(`<li> ${text}</li>`)
    document.write(`<li> ${text}</li>`)
    document.write(`<li> ${text}</li>`)
    document.write(`</ul>`)

}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creatoLi = (text,max)=>{
    document.write(`<ul>`)
    for (let i = 0; i < max; i++) {
    document.write(`<li>${max}</li>`)
    }
    document.write(`</ul>`)

}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let foo = (arr)=>{
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let creatorBlock = (arr)=>{
    for (const arrElement of arr) {
        for (const arrElementElement in arrElement) {
            document.write(`<div>${arrElementElement} - ${arrElement[arrElementElement]}</div>`)
        }

    }
}
creatorBlock(users)

// - створити функцію яка повертає найменьше число з масиву
let lower = (arr)=>{
    let x = arr[0];
    let a = arr[0];
    for (const arrElement of arr) {
        arrElement < x ? x = arrElement : a = arrElement
    }
    console.log(a)
    return x
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let calc = (arr)=>{
    let x = 0
    for (const arrElement of arr) {
        x = arr + x
    }
    return x
}






