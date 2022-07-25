                                                                  //Home work #1
/* let yer = Number(prompt("введите год"));

if (yer % 4 == 0 && yer % 100 !== 0) {
  alert("високостный");
} else if (yer % 4 == 0 && yer % 100 == 0 && yer % 400 == 0) {
  alert("високостный");
} else {
  alert(" не високостный или не число");
}

                                                                  //Home work #2

  function checkAge(age) {
    if (age > 18) {
      alert("Вы совершенно летний");
    } else if (age < 18) {
     let i = confirm("A родители разрешили?")
     alert(i);
  }
  
}
alert(checkAge(10)); */

                                                                  //Home work #3

/* let array = [1, 2, null, "", false, 4, undefined, NaN, 5];
let sortArray = [];

function NegativeSortArray([]) {
  for (let i = 0; i < array.length; i++)
    if (array[i]) {
      sortArray.push(array[i]);
    }
}
NegativeSortArray(array);
console.log(sortArray); */


                                                                  //Home work #4
/* const data = {
  a: 1,
  b: 2,
  c: 3,
};

function withoutKey(object, key) {
  delete object[key];

  return object;
}
console.log(withoutKey(data, "b"));
 */
                                                                  //Home work #5

/* const array = ['hi', 'im', null];      V.1

array.splice(2, 2, 'Ivan');
console.log(array); */


/* onst array = ['hi', 'im', null];       V.2
 
for (let i = 0; i < array.length; i++){

  if(array[i] == null){
    array[i] = 'Ivan'
  }
  console.log(array[i])
}
 */

                                                                  //Home work #6
        
 /* let arr = [5, 2, 1, -10, 8];

 arr.sort((a, b) =>{

  if (a > b){
    return -1
  }
  if(a < b){
    return 1
  }
  return 0
})
console.log(arr); */

                                                                  //Home work #7
        
/* let array = [[1,[2]], 4, [5]];

let sum = 0;

array = array.flat(Infinity)

for (let i = 0; i < array.length; i++) {
     sum += array[i];
}

console.log(sum); */

                                                                //Home work #8
/* function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class TodoList {
  constructor([]) {
    this.todo = [{ text: "lol", date: Date.now(), id: 1 }];
  }
  /* render(){    //сначало все очистить и перерисовать

} */
/*
  addToList(text) {
   const text = prompt("vvesti text") 
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
todoNew.clear();     */                                                            

