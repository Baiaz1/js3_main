 let massive = [2, 3, "text"];

function quadro(array) {


  for (key in array) {

    if (typeof array[key] === "number") {
      
      array[key] = array[key] ** 2;
    }
  }


  return array;
}



quadro(massive);

console.log(massive);