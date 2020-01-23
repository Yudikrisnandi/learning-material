//Exercise 1
for (var i = 1; i <= 30; i++) {
    var message = '';
    if (i%2=== 0) message += 'forza ';
    if (i%5 === 0) message += 'milan ';
    if (i%10 === 0) message + 'forza milan ';
    
    console.log(message + i)};

//Exercise 2
var name = "Strix";
var role = "Healer";
var welcome="Selamat datang di Dunia Glints Warrior, ";

if(name=="" && role==""){
  console.log("Tidak Boleh kosong");
}
else if(name==""){
  console.log("Nama harus diisi!");
}
else if(role==""){
  console.log("Halo "+name+" Pilih peranmu untuk memulai game!");
}
 if(role=="Warrior"){
   console.log(welcome+""+name);
   console.log("Halo "+role+" "+name+", Tugas kamu adalah menyerang musuh!");
 }

  if(role=="Healer"){
   console.log(welcome+""+name);
   console.log("Halo "+role+" "+name+", kamu akan membantu temanmu yang terluka.");
 }

  if(role=="Hunter"){
   console.log(welcome+""+name);
   console.log("Halo "+role+" "+name+", ciptakan keajaiban yang membantu kemenanganmu!");
 }
 //Exercise 3
 String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
  };
  
  console.log('prat1w1n7r4m1n1'.allReplace({'1': 'i', '4': 'a','7':'u','3':'e','0':'o'}));
  console.log('y7d1kr1sn4nd1'.allReplace({'1': 'i', '4': 'a','7':'u','3':'e','0':'o'}));
  console.log('b4d41'.allReplace({'1': 'i', '4': 'a','7':'u','3':'e','0':'o'}));
//Exercise 4
const sum = [4, 2, 8, 6].reduce(add,0); 
function add(plus, a) {
    return plus + a;
}
console.log(sum);
//
var num= [4, 2, 8, 6];

for (var i = 0, tum = 0; i < num.length; tum += num[i++]);
console.log(tum);
//
//Exercise 5
var numA = [2, 3, 5]
var numB = [4, 1, 6]
  function hitungScore(){
    var scor=[0, 0];
    for(var a=0; a<=numA.length; a++){
      if(numA[a]>numB[a]){
        scor[0]++;
      }
      else if(numA[a]<numB[a]){
        scor[1]++;
      }
    }
    console.log(scor)
  } 
hitungScore()
//Exercise 6
let data = [1, 2, 3, 4, 5];

data = data.sort();
  
let maxSet = data.slice(1);
let minSet = data.slice(0, -1);

console.log(minSet, maxSet);

const sum1 = data.reduce((a, total) => a + total, 0);
console.log(sum1 - data[data.length - 1], sum1 - data[0]);

//Exercise 7
var missing = [1,2,3,4,6,7];

var a = [1,2,3,4,6,7], count = a[a.length - 1];
var missing = [];
for ( var i = 1; i <= count; i++ ) {
	if (a.indexOf(i) == -1) {
		missing.push(i);
	}
}
console.log(missing.toString());