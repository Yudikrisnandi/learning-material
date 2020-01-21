function test(num){
    for (var i = 1; i <= num; i++) {
       
      if(i%2==0 && !(i%5)==0) {
        console.log("Forza "+i)
      } else if ((i%5)==0 && !(i%2)==0) {
        console.log ("Milan "+ i)
      } else if ((i%2)==0 && (i%5)==0) {
        console.log ("Forza Milan "+i)
      } else {console.log (i)}
       
    }
      
}

test (30);