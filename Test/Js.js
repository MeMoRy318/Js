// const body = document.getElementsByTagName("div")[0]

const buttonBefore = document.createElement("button");
buttonBefore.innerText = "Before";

const buttonAfter = document.createElement("button");
buttonAfter.innerText = "After" ;

document.body.append(buttonBefore,buttonAfter);

let elementList = [];

function scraper (startElement)  {
    let children = startElement.children;
    for (let childrens of children) {
        if (childrens) {
            elementList.push(childrens);
        }
        scraper(childrens);
    }
}
scraper(document.body)

let i = 0;
buttonBefore.onclick = function () {
    if (elementList[i]){
        console.log(elementList[i]);
        i++
    }

};
buttonAfter.onclick = function (){
    if (i > 0) {
i--
        if (elementList[i]) {
            console.log(elementList[i]);
        }
        ;
    }
};
