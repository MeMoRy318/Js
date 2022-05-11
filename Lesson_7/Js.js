// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let areyUsers = [
    new User(1,"Vasya","pupkin","sada@gmail.com",Math.round(Math.random()*100000000)),
    new User(2,"Vasya","Ivanov","sadsaa@gmail.com",Math.round(Math.random()*100000000)),
    new User(3,"Ivan","Ivanov","dsaa@gmail.com",Math.round(Math.random()*100000000)),
    new User(4,"Igor","Pupkin","aa@gmail.com",Math.round(Math.random()*100000000)),
    new User(5,"Igor","Kokos","asasa@gmail.com",Math.round(Math.random()*100000000)),
    new User(6,"Stapan","Banan","asasa@gmail.com",Math.round(Math.random()*100000000)),
    new User(7,"Yuriy","Kaptun","asa@gmail.com",Math.round(Math.random()*100000000)),
    new User(8,"Yuriy","Kaptun","asa@gmail.com",Math.round(Math.random()*100000000)),
    new User(9,"Viktor","Jum","asa@gmail.com",Math.round(Math.random()*100000000)),
    new User(10,"Taras","Pupkin","asa@gmail.com",Math.round(Math.random()*100000000)),
]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//     залишивши тільки об'єкти з парними id (filter)
let arr = areyUsers.filter(value => value.id % 2 === 0 )
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
areyUsers.sort((a, b) => b.id - a.id )
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order' +
// ' (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в
// полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, ...order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let areyClient = [
    new Client(1,"ivan","pupkin","asd@gmail.com",Math.round(Math.random()*100000000),"Phone"),
    new Client(2,"ivan","kokos","asad@gmail.com",Math.round(Math.random()*100000000),"Tv","phone"),
    new Client(3,"Vasya","kokos","asaaad@gmail.com",Math.round(Math.random()*100000000),"velo","Tv","phone"),
    new Client(4,"Vasya","Ivanov","azzzd@gmail.com",Math.round(Math.random()*100000000),"Radio","velo","Tv","phone"),
    new Client(5,"taras","Ivanov","azzzd@gmail.com",Math.round(Math.random()*100000000),"loptop","Radio","velo","Tv","phone"),
    new Client(6,"Igor","Ivanov","azzzd@gmail.com",Math.round(Math.random()*100000000),"loptop","loptop","Radio","velo","Tv","phone"),
    new Client(7,"Yuriu","Ivanov","sszzd@gmail.com",Math.round(Math.random()*100000000),"tv","loptop","loptop","Radio","velo","Tv","phone"),
    new Client(8,"Andriy","Ivanov","sszzd@gmail.com",Math.round(Math.random()*100000000),"phone","tv","loptop","loptop","Radio","velo","Tv","phone"),
    new Client(9,"Vitya","Ivanov","sszzd@gmail.com",Math.round(Math.random()*100000000),"volo","phone","tv","loptop","loptop","Radio","velo","Tv","phone"),
    new Client(10,"Yuriu","Ivanov","sszzd@gmail.com",Math.round(Math.random()*100000000),"Moto","volo","phone","tv","loptop","loptop","Radio","velo","Tv","phone"),
]
areyClient.sort((a,b)=> a.order.length - b.order.length)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, ' +
// 'виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, ' +
// 'і додає його в поточний об'єкт car
function Car(produser,year,maxSpid,engine ) {
this.produser = produser
    this.year = year
    this.maxSpid = maxSpid
    this.engine = engine
    this.addDriver = function (driver) {
        return    this.driver = driver
    }
    this.drive = function (){
    console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`)
    }
    this.info = function (){
    console.log(` ${this.produser} - ${this.year} - ${this.maxSpid} - ${this.engine} `)
    }
    this.increaseMaxSpeed = function (newSpeed) {
         return this.maxSpid = this.maxSpid + newSpeed
    }
    this.changeYear = function (newValue) {
    return this.year = this.year + newValue

    }
}
let car = new Car("Tesla","2014",210,"electro")
car.drive()
car.info()
car.addDriver("Ivan")
console.log(car)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,' +
// ' рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,' +
// ' і додає його в поточний об'єкт car
class Car1 {
    constructor(produser, year, maxSpid, engine) {
        this.produser = produser;
        this.year = year;
        this.maxSpid = maxSpid;
        this.engine = engine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`)
    }
    info (){
        console.log(`${this.produser} - ${this.year} - ${this.maxSpid} - ${this.engine} `)
    }
    increaseMaxSpeed (newSpeed){
       return  this.maxSpid = this.maxSpid + newSpeed
    }
    changeYear (newValue){
    return this.year = newValue
    }
    addDriver (driver) {
      return   this.driver = driver
    }
}
let car1 = new Car1("Tesla","2014",210,"electro")

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.' +
// ' Створити масив з 10 попелюшок.
function Prinches(name,old,footSize) {
this.name = name
this.old = old
this.footSize =  footSize
}
let prinches = [
    new Prinches("Sveta",21,38),
    new Prinches("Dasha",23,35),
    new Prinches("Olga",26,36),
    new Prinches("Vika",22,34),
    new Prinches("Nata",21,32),
    new Prinches("Nastya",29,39),
    new Prinches("Vasuluna",29,39),
    new Prinches("Ira",29,39),
    new Prinches("Ira",23,37),
    new Prinches("Ira",25,35),

]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}
let prince = [
    new Prince("Igor",21,38),
    new Prince("Taras",21,37) ,
    new Prince("Anton",21,34),
    new Prince("Ivan",21,36),
    new Prince("Styopa",21,32),
    new Prince("Kristof",21,33),
    new Prince("Oleg",21,31),
    new Prince("Yura",21,39),
    new Prince("Vasuly",21,42),
    new Prince("Sergey",21,40),
]
     // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 for (let i = 0; i < prince.length; i++) {
     if (prince[i].findShose === prinches[i].footSize ){
         console.log(`${prince[i].name} - ${prinches[i].name} `)
     }
 }
//  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = prince.find(value => value.findShose === prinches[0].footSize)
console.log(find)
//================================================ additional===============================================

function userCard(namber) {
    let stamp = Date.now()
    let time = new Date(stamp)
    let card = {
        balance:100,
        transactionLimit:100,
        historyLogs: [],
        key: namber,
    }
    return{
        getCardOptions: function (){
            return card;
        },
        putCredits:function (balans) {
            card.balance = card.balance + balans
            let transaction = {
                operationType: 'Received credits',
                credits: balans,
                operationTime: `${time}`
            }
            card.historyLogs.push(transaction);
        },
        takeCredits:function (balans1) {
            if (card.balance >= balans1 && card.transactionLimit >= balans1){
                card.balance = card.balance - balans1
            }else {
                console.error("error")
            }
            let transaction = {
                operationType:  'Withdrawal of credits',
                credits: balans1,
                operationTime: `${time}`
            }
            card.historyLogs.push(transaction);

        },
        setTransactionLimit:function (balans3) {
            card.transactionLimit = balans3
            let transaction = {
                operationType:  'Transaction Limit change',
                credits: balans3,
                operationTime: `${time}`
            }
            card.historyLogs.push(transaction);
        },
        transferCredits: function (credit, cards) {
            cards.getCardOptions().balance+=credit;
            credit = credit + credit * 0.5 / 100;
            card.balance -= credit;
        },
    }

}