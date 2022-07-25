/* class Review {
  constructor(date, title){
    this.date = date;
    title.title = title;
  }

  static createReview(){
    return{
      date: new Date(),
      title: title,
    }
  }
}
const reviw = Review.createReview('new review') */

const form = document.getElementById("form");
const textp1 = document.getElementById("p1");
const ul = document.getElementById("ul");

class Review {
  constructor() {
    this.reviewList = [];
  }
  static validate(data) {
    if (data.from && data.text && data.review >= 1 && data.review <= 5) {
      return true;
    }
    return false;
  }

  submitToList(data) {
    this.reviewList.push(data);
  }

  render() {
    //дописать метод рендор

    ul.innerHTML = "";
   

    for (let i = 0; i < this.reviewList.length; i++) {
      let object = this.reviewList[i];
      let txt = object.from;
      let dat = object.text;
      let rev = object.review;
    form.append(textp1.innerText += `      from:  ${txt},  text:   ${dat}, reviw:   ${rev}`);
    }
  }
}
const review = new Review();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataEntries = formData.entries();
  const data = Object.fromEntries(formDataEntries);
  const validate = Review.validate(data);
  if (validate) {
    review.submitToList(data);
  } else {
    alert("not a value");
  }
  review.render();
});
