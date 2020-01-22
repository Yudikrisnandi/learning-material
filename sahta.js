// NO.1\\
function add(num) {
  for (var i = 1; i <= num; i++) {
    /*console.log("test ${i}");*/
    if (i % 2 == 0) {
      console.log("forza " + i);
    } else if (i % 5 == 0) {
      console.log("milan " + i);
    } else if (i % 2 == 0 && i % 5 == 0) {
      console.log("forza milan" + i);
    } else {
      console.log(i);
    }
  }
}

add(30);


//NO.2\\

