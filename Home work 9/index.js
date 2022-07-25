const button_add = document.getElementById("button_add");
const button_remove = document.getElementById("button_remove");
const button_sort = document.getElementById("button_sort");
const button_clear = document.getElementById("button_clear");
const text_output = document.getElementById("text_output");
const body = document.getElementById("body");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class TodoList {
  constructor([]) {
    this.todo = [];
  }

  renderElement() {
    text_output.innerHTML = "";
    for (let i = 0; i < this.todo.length; i++) {
      let object = this.todo[i];
      let txt = object.text;
      let dat = object.date;
      let id_render = object.id;
      text_output.textContent += `      ToDoName:  ${txt},  Date:   ${dat}, ID:   ${id_render}`;
    }
  }

  addToList(text) {
    const obj = { text: text, date: Date.now(), id: getRandomInt(40) };
    this.todo.push(obj);
  }

  removeFromList(id) {
    for (let i = this.todo.length; i--; ) {
      if (this.todo[i].id === id) {
        this.todo.splice(i, 1);
      }
    }
  }

  sort() {
    this.todo.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }

  clear() {}
}

let todoNew = new TodoList([]);

button_add.addEventListener("click", function (event) {
  const text = prompt("vvesti text");
  todoNew.addToList(text);
  todoNew.renderElement();
});

button_remove.addEventListener("click", function (event) {
  const id = prompt("vvesti id");
  todoNew.removeFromList(Number(id));
  todoNew.renderElement();
});

button_sort.addEventListener("click", function (event) {
  todoNew.sort();
  todoNew.renderElement();
});

button_clear.addEventListener("click", function (event) {
  todoNew.todo = [];
  todoNew.renderElement();
});
