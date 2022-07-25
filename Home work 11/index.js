/* Домашка 11(до 22.07. 00-00)

Дописываем дату вниз страницы ((с) - 2022 год), также текущую дату и время и методы.
1. Метод средней оценки ревью (по всем ревью)
2. 2 Метода сортировки от большего к меньшему и наоборот

Прислать в личку в телеграм архив с заданием */
const button_add = document.getElementById("button_add");
const button_mean = document.getElementById("button_mean");
const ul = document.getElementById("ul");
const p = document.getElementById("p");

var d = new Date();

p.textContent = (d.toString());
const revyu = [
    { name: "Witya", text: "GOOD", grade: 10 },
    { name: "Kolya", text: "GOOD", grade: 9 },
    { name: "Nastya", text: "NOT GOOD", grade: 4 },
    { name: "Lena", text: "NOT GOOD", grade: 3 },
    { name: "Pasha", text: "GOOD", grade: 9 }];


    class List {
        constructor() {
        }

    mean(){
let SumMean = 0;
    let sum = 0;
     for (let i = 0; i < revyu.length; i++) {
    let object = revyu[i]
    let value = object.grade;
    sum = sum + value
    
 }
 SumMean = sum / revyu.length
console.log(SumMean)
}


sort() {
    revyu.sort(function (a, b) {
      if (a.grade > b.grade) {
        return 1;
      }
      if (a.grade < b.grade) {
        return -1;
      }
      return 0;
    });

}

renderElement() {
      ul.innerHTML = "";
      for (let i = 0; i < revyu.length; i++) {
      let object = revyu[i];
      let txtName = object.name;
      let text = object.text;
      let grade = object.grade;
      ul.innerText += ` \n Имя:  ${txtName},  Текст:   ${text}, Оценка:   ${grade}`;
    }
  }

  addToList(name, text, grade) {
    const obj = { name: name, text: text, grade: grade };
    revyu.push(obj);
  }
  
    }
let newList = new List();
newList.sort();
newList.renderElement();
newList.mean();

button_add.addEventListener("click", function (event) {
    const name = prompt("vvesti name");
    const text = prompt("vvesti text");
    const grade = prompt("vvesti ball");
    newList.addToList(name, text, grade);
    newList.renderElement();
  });

  button_mean.addEventListener("click", function (event) {
    newList.mean();
    newList.renderElement();
  });