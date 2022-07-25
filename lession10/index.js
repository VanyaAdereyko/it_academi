/* document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("button")
  console.log(button)

})
 */

const button = document.getElementById("button");
const body = document.getElementById("body");

/* button.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
}); */


const createdButton = document.createElement("button");
createdButton.textContent = 'Hi'
body.appendChild(createdButton)


class HtmlCreate{
  constructor(element){
    this.element = element;
  };

  createElement(){
 this.crea =  document.createElement(this.element)
  }

  renderElement(){
    body.appendChild(this.crea)
  
  }

  deleteElement(){
   button.remove();
  
  }
}

const create = new HtmlCreate('button')

create.createElement();
create.renderElement();
create.deleteElement();

