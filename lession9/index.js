/* function animal (name){
    this.name = name;
    this.sayHi = function(){
        console.log('i am', this.name)
    }
}
const cow = new animal('cow');
cow.sayHi(); */

/* function calculator() {
  this.sum = function () {
    console.log(this.x + this.y);
  };

  this.red = function (x, y) {
    this.x = x;
    this.y = y;
  };

  this.mul = function () {
    console.log(this.x * this.y);
  };
}
const calc = new calculator();
calc.red(2, 4);
calc.mul();
calc.sum();
 */

/* class user {
    constructor (name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name)
    }
} */

/* class ClassName {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  mul() {
    console.log(this.x * this.y);
  }
  sum() {
    console.log(this.x + this.y);
  }
}
const Chisla = new ClassName(3, 3);
Chisla.mul();
Chisla.sum(); */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class TodoList {
  constructor([]) {
    this.todo = [{ text: "lol", date: Date.now(), id: 1 }];
  }
  /* render(){    //сначало все очистить и перерисовать

} */

  addToList(text) {
    /*  const text = prompt("vvesti text") */
    const obj = { text: text, date: Date.now(), id: getRandomInt(40) };
    this.todo.push(obj);
    console.log(this.todo);
  }

  RemoveFromList(id) {
    for (let i = this.todo.length; i--; ) {
      if (this.todo[i].id === id) {
        this.todo.splice(i, 1);
      }
    }
  }

  sort() {
    this.todo.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
  }

  clear() {
    this.todo = [];
  }
}
let todoNew = new TodoList([]);
todoNew.addToList("Hi");
todoNew.addToList("Batman");
todoNew.RemoveFromList(1);
todoNew.sort();
todoNew.clear();

/* todo.addToList({task: 'Do the job', date: Date.now()}) //добавить тодушку в массив
todo.RemoveFromList({id: 1}) //удалить тодо по id
todo.sort(); // время создания от большего к меньшему
todo.clear(); // удалить все тодо из массива */
