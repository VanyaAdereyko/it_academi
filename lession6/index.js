/* const sentens = ['my', 'name', 'is'];

sentens.forEach((item) =>{
console.log(item)
});

console.log(sentens.includes('my')) //метод для поиска элемента в массиве tru - есть false- нету такого */

/* const array = [
  {id: 1, name: 'Vasya' },
  {id: 2, name: 'masha' },
  {id: 3, name: 'ivan' },
  {id: 4, name: 'olya' }]; */

/* let answer;

  array.forEach((item) =>{
    if (item.id === 2){
      answer = item

    }
  })  */

/*   const answer = array.find((item) =>{
    if(item.id ===2){
      return true
    }
  })

 */

/* const array = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "masha" },
  { id: 3, name: "ivan" },
  { id: 4, name: "olya" },
];
let returningAnswer;
const answer = array.find((item) => {
  if (item.id === 4) {
    returningAnswer = item;
  }
  console.log(returningAnswer);
});
 */

/* const array = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "masha" },
  { id: 4, name: "ivan" },
  { id: 4, name: "olya" },
];

let getObj = (argumentid) => {
  let answer = array.filter((item) => {
    if (item.id === argumentid) {
      return true
  
    }})
    return answer
  }
console.log(getObj(4)) */

/* const array = [
  { name: "Vasya", score: 10 },
  { name: "masha", score: 2 },
  { name: "ivan", score: 30 },
  { name: "olya", score: 9},
];
array.filter((arrayFilter) =>{
if (arrayFilter.score >= 4 && arrayFilter.score <= 12){
  console.log(arrayFilter)
}

}) */

/* const array = [
  { name: "Vasya", score: 10 },
  { name: "masha", score: 2 },
  { name: "ivan", score: 30 },
  { name: "olya", score: 9 },
];
const answer = array.map((item) => {
  return { name: item.name, score: item.score + 100 };
});

console.log(answer);
 */

/* const array = [
  { name: "Vasya", surname: 'Ivanov', id: 1 },
  { name: "masha", surname: 'petrov', id: 2},
  { name: "ivan", surname: 'sidorov', id: 3 },
  { name: "olya", surname: 'smirnov', id: 4},
];

const answer = array.map((item) =>{
const fullName = item.name.concat(' '+ item.surname); */
/* const fullName = `${item.name} ${item.surname}`; */
/* return   fullName */
/* return {fullName, id: item.id}



})
console.log(answer); */


/* 
const sortArray = [12, 13,15,16,19];

sortArray.sort((a, b) =>{

  if (a < b){
    return -1
  }
  if(a > b){
    return 1
  }
  return 0

}) */

/* const sortArray = [                         //сортировка первое со вторым
{score: 2},
{score: 13},
{score: 3},
{score: 44},
{score: 1},
]

console.log(sortArray.sort((item, item2) => {

  if (item.score < item2.score){
    return -1
  }
  if(item.score > item2.score){
    return 1
  }
  return 0
}))
 */