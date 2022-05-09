// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let text = 'hello world'
let text1 = 'lorem ipsum'
let text2 = 'javascript is cool'
let str = ' dirty string   '
console.log(text.length,text1.length,text2.length)
console.log(text.toUpperCase(),text1.toUpperCase(),text2.toUpperCase())
console.log(text.toUpperCase().toLowerCase(),text1.toUpperCase().toLowerCase(),text2.toUpperCase().toLowerCase())
console.log(str.trim())
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні'
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToarray = (str) => str.split(" ")
console.log(stringToarray(str1))



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі
// об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0]
console.log(arr.map(value =>value + "" ))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (nums,direction)=> direction === "ascending"
    ? nums.sort((a,b) => a - b ): nums.sort((a,b) => b - a)
// {
//     if(direction === "ascending"){
//        return  nums.sort((a,b) => a - b )
//     }else if (direction ==="descending" ){
//         return  nums.sort((a,b) => b - a)
//     }
// }
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))

// - є масив
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.sort((a,b)=> b.monthDuration - a.monthDuration))
console.log(coursesAndDurationArray.filter(value =>value.monthDuration > 5 ))


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let createCard = (cardSuit,color)=>{
    let cards = []
    let card = [6,7,8,9,10,'ace','jack','queen','king','joker']
    for (const cardElement of card) {
        cards.push({value:cardElement, color: color,cardSuit:cardSuit })
    }
 return cards
}
let x = createCard('spade',"black").concat(createCard('diamond',"red"),
    createCard("heart","red"),createCard("clubs",'black'))
console.log(x)

console.log(x.find(value => value.value === "ace" && value.cardSuit === "spade"))
console.log(x.filter(value => value.value === 6 ))
console.log(x.filter(value => value.cardSuit === "diamond" ))
console.log(x.filter(value => value.value > 8 && value.cardSuit ==="clubs" ||
    typeof value.value === "string" && value.cardSuit === "clubs"))