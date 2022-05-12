// написати рекурсивну функцію, яка збирає всі назви класів з файлу
// rules.html в окремий масив. масив вивести в консоль
function scr () {
    let arr = []
    return {
        arey: () => {
            return arr.join(",").replaceAll(","," ").split(" ")
        },
        scrap: function scraper (startElement)  {
            let children = startElement.children
            for (let childrens of children) {
                if (childrens.classList.value) {
                    arr.push(childrens.classList.value)
                }
                scraper(childrens)
            }
        }
    }
}

let s = scr()
s.scrap(document.body)
console.log(s.arey())

//=================================Card============================================
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
            if (card.balance >= credit && card.transactionLimit >= credit){
                credit = credit + credit * 0.5 / 100;
                card.balance -= credit;
               cards.getCardOptions().balance+=credit;

            }else {
                console.error("error")
            }


        },
    }

}
let card = userCard(1)
let card1 = userCard(3)
card.putCredits(200)
card.setTransactionLimit(200)
card.takeCredits(110)
card.transferCredits(100,card1)
console.log(card.getCardOptions())
console.log(card1.getCardOptions())