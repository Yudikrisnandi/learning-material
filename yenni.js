// //No 1.

//   for (n=1; n<= 30; n++) {
//     if (n%2 === 0 && n%5 === 0) {
//         console.log(`Forza Milan ${n}`)
//     }
//     else if (n%2 === 0) {
//         console.log(`Forza ${n}`)
//     }
//     else if (n%5 === 0) {
//         console.log(`Milan ${n}`)
//     }
//   }

//   //No 2.
//   function game (nama, peran) {
//       if (nama === "") {
//           console.log ("Nama dan peran harus diisi!")
//       } else {
//       switch(peran) {
//           case "Ksatria" :
//             console.log (`Halo Ksatria ${nama}, Tugas kamu adalah menyerang musuh!`)
//             break;
//           case "Tabib" :
//             console.log (`Halo Tabib ${nama}, kamu akan membantu teman yang terluka.`)
//             break;
//           case "Penyihir" :
//             console.log (`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
//             break;
//           case "" :
//               console.log (`Halo ${nama}, Pilih peranmu untuk memulai game!`)
//               break;
//         }
//       }
//     }

//   game ("lala","Tabib")

//   //No 3.
//   function check(str) {
//       var result = [];

//       for(var i = 0; i < str.length; i++) {
//           if(str [i] === '1') {
//               result[i] = 'i';
//           } else if(str [i] === '4') {
//               result[i] = 'a';
//           } else if(str [i] === '3') {
//               result[i] = 'e';
//           } else if(str [i] === '7') {
//               result[i] = 'u'
//           } else if(str [i] === '0') {
//               result[i] = 'o'
//           } else {
//               result[i] = str[i]
//           }
//       }

//       return result.join("");
//   }

// //   console.log(check('prat1w1n7r4m1n1'))

//   //No 4.

// function add(a){
//     var hasil = 0 ;
//     // console.log(a.length)
//     // console.log("test")
//     for (var x = 0; x < a.length; x++){
//         // console.log(a[x]);
//         hasil = hasil + a[x]
//         // console.log(hasil)
//     }
//     // console.log(hasil)
//     return hasil;
// }

// console.log(add([4,2,6,8]))

// //No 5.

// function num(numA, numB){
//     var number = [0, 0];
//     for(var x = 0; x < num.length; x++){
//         if(numA[x] < numB[x]) {
//             number[1]+=1 
//         }
//         else {
//             number[0]+=1
//         }
//     }
//     return number;
// }
// console.log(num([2, 3, 5], [4, 1, 6]))

//No 6.
function nom(a){
    var urut = a.sort()
    var max = a.length-1
    var min = a[0]
    var total = 0
    for (var i = 0; i < a.length; i++){
        total = total + a[i]
    }
    var hasil = [];
    hasil [0] = total - max
    hasil [1] = total - min
    return hasil
}
 
//console.log (nom([2, 3, 5, 1, 4]))

//No 7.
function bil(e){
    var urutt = e.sort();
    var ahir = urutt[urutt.length - 1];
    // console.log(ahir)
    var newArr = []
    for(var i = 0; i < ahir;  i++){
        newArr[i] = i + 1;
    }
    for(var j = 0; j < newArr.length; j++){
        if(urutt.indexOf(newArr[j]) == -1){
            return newArr[j]
        }
    }   
}
console.log(bil([1, 3, 4, 2, 7, 6]))

//No 7. (alternatif)
function bal(e){
    var uruts = e.sort();
    var n = 0
    for (var i = 0; i < uruts.length; i++){
        if()
    }
}