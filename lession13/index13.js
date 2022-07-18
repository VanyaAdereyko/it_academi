let animal = {
  eats: true
}

let rabbit = {
  jumps: true
}

let nature = {
  live: true
}

rabbit.__proto__ = animal;
nature.__proto__ =  animal;

alert(rabbit.jumps)
alert(rabbit.eats)

alert(nature.live)
alert(nature.eats)

