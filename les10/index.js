const button = document.getElementById("button");
// const body = document.getElementById("body");


button.addEventListener('click', function(event) {
    // button.style.backgroundColor = 'red';
    button.remove();
})

body.innerHtml = ""



// 'button', 'ul', 'li', 'nav'
// const createdButton = document.createElement('button');



// createdButton.textContent = 'HEllO';

// body.appendChild(createdButton);


document.addEventListener("DOMContentLoaded", () => {

})





// class HtmlGenerator {
//     constructor(element) {
//         this.element = element;
//         this.createdElement = null;
//     };

//     createElement(text) {
//         this.createdElement = document.createElement(this.element);
//         if (text) {
//             this.createdElement.textContent = text
//         }
//     }

//     renderElement() {
//         body.appendChild(this.createdElement)
//     }
// }
class Todo {
    constructor() {
        this.todos = []
    }

    render() {

    }

    addTodo() {
        // const text = prompt('ВВедите туду');
        const todo = { text: text, date: Date.now(), id: 1 }
        render
    }

    removeTodo() {
        const id = prompt('ВВедите id');
  
    }

}

// const array = [{price: 1}, {price: 2}, {price: 2}]


// array.sort((a,b) => return a - b )