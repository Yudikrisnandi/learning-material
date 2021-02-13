// Soal Nomor 1. :

// function test(num){
//     for (var i = 1; i <= num; i++) {
       
//       if(i%2==0 && !(i%5)==0) {
//         console.log("Forza "+i)
//       } else if ((i%5)==0 && !(i%2)==0) {
//         console.log ("Milan "+ i)
//       } else if ((i%2)==0 && (i%5)==0) {
//         console.log ("Forza Milan "+i)
//       } else {console.log (i)}
       
//     }
      
// }

// test (30); 






// Soal Nomor 2

// function glintGame(nama, peran){
// if(nama ===''){
//     console.log('Nama harus diisi')
//   }
//   else if(peran ===''){
//     console.log('Halo '+ nama +' , pilih peranmu untuk memulai game')
//   }
//   else{
//     if(nama==='Nina' && peran==='Ksatria'){
//       console.log('Selamat datang di Dunia Proxytia, '+ nama+' Halo '+ peran+' '+ nama, 'kamu dapat menyerang dengan senjatamu!')
//     }
//   }
//   }
  
//   glintGame("Nina", "Ksatria")





// Soal Nomor 3

// function ubahHuruf(angka) {
//     var hasil = '';
//    for (var i = 0; i < angka.length; i++) {
//       if (angka.charAt(i) === "4") {
//         hasil += 'a';
//       } else if (angka.charAt(i) === "1") {
//         hasil = hasil + 'i';
//       } else if (angka.charAt(i) === "3") {
//         hasil = hasil + 'e';
//       } else if (angka.charAt(i) === "7") {
//         hasil = hasil + 'u';
//       } else if (angka.charAt(i) === "0") {
//         hasil = hasil + 'o';
//       } else {
//         hasil = hasil + angka.charAt(i);
//       } 
//    }
  
//    console.log(hasil);
//   }
  
//   ubahHuruf("4d1t");
//   ubahHuruf('prat1w1n7r4m1n1'); // pratiwinuramini
//   ubahHuruf('y7d1kr1sn4nd1'); // mas yudi 
//   ubahHuruf('b4d41'); // badai






// Soal Nomor 4

// var num = [4, 2, 8, 6]
// var reducer = (akumulasi, angkasekarang) => akumulasi + angkasekarang;

// // 4 + 2 + 8 + 6
// console.log(num.reduce(reducer));
// // output : 20






// Soal Nomor 5

// function score(numA,numB) {
//     var score = [0,0]
     
//      for ( var i = 0; i < numA.length; i++){
//       //  console.log (numA[i])
//        if(numA[i] > numB[i]){
//             score[0] += 1;
//           } else if (numA[i] < numB[i]) { 
//             score[1] += 1;
//           } else {
//             score [0] += 0;
//           }
//      }
//      return score;
//     }
//     console.log (score([2,3,5],[4,1,6]));







// Soal Nomor 6


// var MinMax

// MinMax = [2, 3, 1, 4, 5]
// var urut = MinMax.sort();
// var hitungmin=0;
// var hitungmax=0;

// for(var i = 0; i < MinMax.length-1; i++){
  
//   hitungmin=hitungmin+urut[i];
// }

// for(var a = 1; a < MinMax.length; a++) {
//   hitungmax=hitungmax+urut[a];
// }
// console.log("["+hitungmin+","+hitungmax+"]")








// SOal Nomor 7

// var array = [1,3,4,2,7,6];

// function findNumberInUnsortedArray(arr) {
//   var count = arr.length + 1;
//   var sum = 0;
//   var expected = count * (count + 1) / 2;
  
//   for(var i = 0, l = arr.length; i < l; i++) {
//   	sum += arr[i];
//   }
  
//   return expected - sum;
  
// }

// var result = findNumberInUnsortedArray(array);

// console.log('Missing Number:', result);