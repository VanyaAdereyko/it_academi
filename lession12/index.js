// встроенные классы js
/* Math.max();  //макс значение
Math.min();  // мин значение
Math.round();  // округление к ближайшему
Math.ceil();  // округление к наивысшему
Math.floor();  // округление к наименьшему
Math.sqrt();
Math.pow();
Math.random();


Number.MAX_VALUE
Number.MIN_VALUE
Number.isNaN();
Number(1,233333).toFixed(3) // округлил 3 числа после запятой 1,233


//строки
const string = 'hi bro'
 string.length() // длина строки
string[0];

string.split(", ") // превращает в массив
string.join(); // превращает массив в троку
string.toLowerCase();
string.toUpperCase();

string.replace();
string.trim();       // удаляет пробелы


//массивы

const array = [1, 2, 3]   //проверяет все элементы если все входят то true
const result = array.every((item) => {
  return item === 1
})

  
const resultsom = array.some((item) => { //проверяет все элементы если хотя бы один входить то true
  return item === 1
})

//.split().reverse().join();

//Data.now();

new Date("").getTime();
new Date("").getDate(); //получает 0-6 где 0=понедельник 6=воскресенье
new Date("").toLocaleDateString(); //дата в текущих настройках даты


const obj = {name: 'Ivan', age: 12};
const {name: fio, age = 18} = obj // деструктуризация

const array2 = ['Ivan', 30]
const  [name2, age2] = array;

const newObj = {    //создание копии объекта и изменение его
  ...obj,
  age: 30,
  name: 'Kolya',
}


const newArray = [...array, 1, 123] */

/* setInterval(() => {
const p = document.getElementById("p");
let summ = Number(p.innerText);
summ ++;
p.innerText = summ;
}, 1000); */
/* 
const id = setInterval(() => {
  const p = document.getElementById("p");
  const date = new Date().toLocaleDateString();
  p.textContent = date;
}, 1000);

clearInterval(id);  *///удалить интервал

/* const p = document.getElementById("p");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let summ = Number(p.innerText);

plus.addEventListener("click", function (event) {
  summ++
  p.innerText = summ
});

minus.addEventListener("click", function (event) {
  summ--
  p.innerText = summ
}); */

//расширить встроенный класс можно с помощь prototype

/* String.prototype.getLover("Привет"); */
/* 
class abc {


  getLover(){
  let schetchik = 0;
   let text = "Привет"
   text.toLowerCase();
   
   const GlasnArray = ['а', 'е', 'ё', 'и', 'у', "о", "э", "я", "ю", "ы"] 
  }
}


const abcd = new abc
abcd.getLover(); */

