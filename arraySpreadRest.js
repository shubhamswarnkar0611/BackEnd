let arr = ["apple", "", "mango", "", "banana"];
let mapArr=arr.map((fruit) => {
    if (fruit.length == 0) {
      return "Empty String";
    } else {
      return fruit;
    }
  })

console.log(mapArr);