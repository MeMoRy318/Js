// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let elementList = [];

 function scraper (startElement)  {
     if (elementList.length === 0) {

         const buttonBefore = document.createElement("button");
         buttonBefore.innerText = "Before";

         const buttonAfter = document.createElement("button");
         buttonAfter.innerText = "After";

          document.body.append(buttonBefore,buttonAfter);


         let i = 0;

         buttonBefore.onclick = function () {
             if (elementList[i]){
                 console.log(elementList[i]);
                 i++
             };

         };
         buttonAfter.onclick = function (){
             if (i > 0) {
                 i--
                 if (elementList[i]) {
                     console.log(elementList[i]);
                 };

             };
         };

     };

     let children = startElement.children;
     for (let childrens of children) {
             elementList.push(childrens);

         scraper(childrens,2);
     };
 };
 scraper(document.body);

