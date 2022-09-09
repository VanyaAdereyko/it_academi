const image =  document.getElementById('img')
const p1 =  document.getElementById("p1")
const p2 =  document.getElementById('p2')

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 5000);

  setTimeout(() => {
    reject("Bad Hello");
  }, 6000);
})

promise.then((data) => {
  console.log(data)
})

promise.catch((data) => {
  console.log(data)
})

console.log("dada ya ya")

const promiseFetch = fetch('https://randomuser.me/api/')

promiseFetch.then((respons) => {
  return respons.json()
}).then((user) => {
let data = user.results[0]
p2.innerText = (`${data.name.title}  ${data.name.first}  ${data.name.last}` )
p1.innerText = data.email
img.src = data.picture.large
})

