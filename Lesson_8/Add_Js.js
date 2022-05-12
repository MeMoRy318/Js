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