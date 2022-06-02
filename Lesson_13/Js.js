function myWork(days) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (days > 0 ){
                resolve(1000 * days)
            }else {
                reject("you didn't work no money")
            }
        },500)
    })

}
function buyCars(myMoney,priceCar) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (myMoney > priceCar){
                const result = myMoney - priceCar
                resolve(result)
            }else {
                reject("not enough money for a car")
            }
        },300)
    })
}

 // myWork(10)
//     .then(value => {
//         console.log(`you have money - ${value}`)
// return buyCars(value,5000)
//     })
//     .then(value => {
//         console.log(`congratulations on your purchase, you money ${value}`)
//     })
//     .catch(reason => console.log(reason))


 async function foo (){
     try {
         const myMoney = await myWork(1)
         console.log(`you money - ${myMoney}`)

        const myMoneyAfter = await buyCars(myMoney,1000)
         console.log(`you money after - ${myMoneyAfter}`)

     }catch (e) {
         console.log(e)

     }
 }
foo()