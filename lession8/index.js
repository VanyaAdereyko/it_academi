// // //Объекты в JS


// // // const object = { name: "Ivan" };

// // // const array = ["Ivan", "banana", 'apple', ''];

// // // console.log(array[array.length / 2]);





// // const object = {
// //     "name string": 5
// // }

// // object.fruits;


// // object['fruits']

// // // const fruits = 'apples'

// // // const object = {
// // //     fruits: 5
// // // }

// // // { name: 'name', age: 30 }

// // const array = [
// //     { fruits: 5 },
// //     { fruits: 15 },
// //     { fruits: 4 },
// //     { fruits: 23 },
// //     { fruits: 65 },
// //     { fruits: 0 },
// //     { fruits: 32 },
// //     { fruits: 12 },
// //     { fruits: 15 },
// //     { fruits: 65 },
// //     { fruits: 7 },
// //     { fruits: 5 }
// // ]

// // let sum = 0;

// // for (let i = 0; i < array.length; i++) {
// //     let object = array[i]
// //     let value = object.fruits;
// //     sum = sum + value
// // }

// // let object = { fruits: 5 };
// // object.fruits

// // const newArray = ['Hello', 'My', 'Dear', 'Friend'];

// // newArray.join("=")

// // let string = "";

// // for (let i = 0; i < newArray.length; i++) {
// //     string = string + newArray[i]
// // }





// // const createPerson = (paramsName, paramsAge) => {
// //     const object = {
// //         name: paramsName,
// //         age: paramsAge
// //     }
// //     return object
// // }

// // const object = createPerson('Vova', 40);

// // const string = `${object.name} ${object.age}`;


// // const value = Object.values(salaries)

// // func(salaries)


// // const salaries = { Ann: 500, Anton: 1400, Tatyana: 700 };

// // const func = (object) => {
// //     let max = 0;
// //     let name;


// //     // object = salaries
// //     for (key in object) {
// //         if (object[key] > max) {
// //             max = object[key];
// //             name = key
// //         }
// //     }

// //     return name;

// //     // for (let i = 0, i < values.length, i++) {
// //     //     if (max < values[i]) {
// //     //         max = values[i]
// //     //     }
// //     // }


// //     // for (let i = 0, i < keys.length, i++) {
// //     //     if (object[keys[i]] === max) {
// //     //         name = keys[i]
// //     //     }
// //     // }
// // }


// // let array = ['frits'];

// // let newArray = array;




// const array = ["я", "изучаю", "javascript"];

// // delete array[1];


// const newArray = array.splice(1, 1);

// array.splice(-1, 0, 'сложный', 'язык');

// // const array = ["t", "e", "s", "t"];

// // const array = [1, 2];
// // const newArray = [3, 4]

// // const array = [1, 0, false];

// // console.log(array.indexOf(false))
// // console.log(array.indexOf(1))
// // console.log(array.indexOf(0))
// // console.log(array.indexOf(null))

// // if(array.indexOf(false) !== -1);

// // const array = [null, undefined, 'Tolya', 123]
// const deleteFromArray = (value) => {
//     const newArray = array.slice();
//     const index = newArray.indexOf(value);

//     if (index !== -1) {
//         newArray.splice(index, 1);
//         return newArray;
//     } else {
//         return 'Error'
//     }
// }


// const concatArrays = (array1, array2) => {

// }

// concatArrays([1, 2, 3], 4, 5, 6);



// const sentence = ['My', "name", "is", null];


// const searchForEach = () => {}

// // sentence.forEach((item) => {
// //     console.log(item)
// // });

// // console.log(sentence.includes('My'));


// // const array = [
// //     { id: 1, name: 'Вася' },
// //     { id: 2, name: "Петя" },
// //     { id: 3, name: "Ваня" },
// //     { id: 3, name: "Иван" }
// // ];


// array.forEach((item) => {
//     if (item.id === 2) {
//         answer = item
//     }
// });



// const arra1y = [
//     { name: 'John', score: 10 },
//     { name: "Pete", score: 5 },
//     { name: "Mary", score: 12 },
//     { name: "Konstantin", score: 4 },
//     { name: "Ivan", score: 22 }
// ];

// // const newArray = [
// //     { name: 'John', surname: 'Пупкин', id: 1 },
// //     { name: "Pete", surname: 'Ivanov', id: 2 },
// //     { name: "Mary", surname: 'Petrova', id: 3 },
// //     { name: "Konstantin", surname: 'Vasechkina', id: 4 },
// //     { name: "Ivan", surname: 'Ovechkin', id: 5 }
// // ]

// const sortArray = [
//     { score: 22 }, { score: 12 }, { score: 30 }, { score: 5 }
// ]

// console.log(sortArray.sort((item, item2) => {
//     if (a < b) {
//         return -1
//     }

//     if (a > b) {
//         return 1
//     }

//     return 0
// }))

// const answer = arra1y.map((item) => {
//     const newItem = {
//         fullName: item.name.concat(' ' + item.surname),
//         score: item.score + 10
//     }
//     return newItem
// })

// console.log(answer)

// const getObject = (argumentId) => {
//     const answer = array.filter((item) => {
//         if (item.id === argumentId) {
//             return true
//         }
//     })

//     return answer
// }

// console.log(getObject(4));



// const array = [
//     ["a", 2],
//     ["b", 2],
//     ["c", 3]
// ];

// [{ "a": 2 }, { "b": 2 }, { "c": 3 }]


const newArray = array.map((item, index) => {
    console.log(index)
    return {
        [item[index]]: item[index + 1]
    }
})


// const array = [{ a: 1 }, { a: 2 }, { a: 3 }];


// array.reduce((acc, item) => {
//     return acc + item.a
// }, 0);



// let user = {
//     name: "john",
//     age: 30,
//     sayHi: function() {
//         console.log(this.name);
//         console.log(user.name);
//     }
// };

// const admin = user;
// user = null;
// admin.sayHi()

// let user = { name: "John", age: 30 };
// let admin = { name: "Admin" };

// function sayHi() {
//     console.log(this)
// }
// {name: Ivan};


// sayHi => `Hello Ivan`

// let user = {}


/* 
const array = new Array()
new User()



function User(name) {
    // this = {name: John, isAdmin: false}
    this.name = name;
    this.isAdmin = false;

    this.sayHi = function() {
        console.log(this.name)
    }

    this.changeAdmin = function() {
        this.isAdmin = true
    }
};

const array = ["John", "Vova"]


array.forEach((item) => {
    let user = new User(item);
    user.sayHi()
})


Array.isArray()

let array = [
    [123, [123, [123]]],
    [55],
    [
        [
            []
        ]
    ]
] */