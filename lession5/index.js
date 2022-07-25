/* const array = [
  { fruits: 12 },
  { fruits: 2 },
  { fruits: 12 },
  { fruits: 13 },
  { fruits: 4 },
  { fruits: 50 },
  { fruits: 1 },
  { fruits: 2 },
];

let pop = 0;
for (let i = 0; i < array.length; i++) {
  pop += array[i].fruits;
}
console.log(pop);
 */

/* const newArray = ["Hello", 'My', 'Dear', 'Friend'];
let string = '';
for(let i = 0; i < newArray.length; i++){

string += ' '.concat(newArray[i])
}
console.log(string); */

/* newArray.join(', ') */ //встроеный метод, превращает массив в строку

/* const array = ["i", "go", "home"];
array.splice(1, 2, 'hello', 'world');
console.log(array);
 */
/* 
const array = ['t', 'e', 's', 't'];
const newArray = array.slice(0, 3); // окпирует массив
newArray.push('s')
console.log(newArray); */

/* const array = [1, 2];
const newArray = [2, 3];
const concatArray = array.concat(newArray);
console.log(concatArray);
 */

/* const newArray = [2, 3, false];
array.indexOf(false)

if (array.indexOf(false) !== -1) */
/* 
const array = [1, false, "lol"];

const deleteFromArray = (string) => {
  const index = array.indexOf(string);
  const newArray = array.splice();
  if (index !== -1) {
    newArray.splice(index, 1);
  } else {
    return "error";
  }
};
deleteFromArray("lol");
console.log(newArray); */

/* 
const concatArray = (array1, array2) =>{
array1.concat(array2)
return array1
}
concatArray([1,2,3], [2,3,4])
console.log(concatArray()); */