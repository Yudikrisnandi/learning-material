/*  Exercise 1
    Buatlah sebuah fungsi yang akan mencetak angka 1-30 ke console.
    Ketika angkanya habis di bagi 2 di depan angkanya akan di tambah string "Forza". 
    Ketika angkanya habis di bagi 5, di depan angkanya di tambah string "Milan". 
    Ketika angkanya habis di bagi 2 dan 5, di depan angkanya di tambah string "Forza Milan".
*/

// var angka1 = 1;
// var angka2 = 30;

// while (angka1 <= angka2) {
//     if(angka1 % 2 === 0) {
//         console.log('Forza ' + angka1);
//     } else if (angka1 % 5 === 0) {
//         console.log('Milan ' + angka1);
//     } else if (angka1 % 5 === 0 && angka1 % 2 === 0) {
//         console.log('Forza Milan ' + angka1);
//     } else {
//         console.log(angka1)
//     }
//     angka1++;
// }

/* Exercise 2
Kamu diminta untuk memprogram suatu game sederhana,GlintsWarrior namanya.
Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran.
Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan 
peringatan berupa "Pilih Peranmu untuk memulai game".
Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
Tugas kamu adalah untuk membuat program yang mengecek isi variabel peran serta 
mengeluarkan respon sesuai isi variabel tersebut.

Variabel tetap di-input secara manual.
Variabel nama dan peran dapat diisi apa saja.
Nama tidak perlu dicek sama persis seperti contoh input/output
Lakukan pengecekan setiap peran menggunkan guard clause
*/

// var nama = 'maria';
// var peran = 'Penyihir';

// if (nama === '' && peran == '') {
//     console.log('Pilih Peranmu untuk memulai game.')
// }

// if (nama !== '' && peran == '') {
//     console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
// }

// if (nama !== '' && peran == 'Ksatria') {
//     console.log('Selamat datang di Dunia GlintsWarrior, ' + nama);
//     console.log('Halo ' + peran + ' ' + nama + ', Tugas kamu adalah menyerang musuh!');
// }

// if (nama !== '' && peran == 'Tabib') {
//     console.log('Selamat datang di Dunia GlintsWarrior, ' + nama);
//     console.log('Halo ' + peran + ' ' + nama + ' , kamu akan membantu temanmu yang terluka.');
// }

// if (nama !== '' && peran === 'Penyihir') {
//     console.log('Selamat datang di Dunia GlintsWarrior, ' + nama);
//     console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
// }


/* Exercise 3
Implementasikan function 'ubahString' untuk mengganti angka-angka yang ada di dalam 'str' menjadi 
sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
// Test cases
// gunakan arrow function dan atau guard clause untuk latihan ini !
console.log(numberLetters('prat1w1n7r4m1n1')); // pratiwinuramini
console.log(numberLetters('y7d1kr1sn4nd1')); // mas yudi 
console.log(numberLetters('b4d41')); // badai
*/

// function numberLetters(kata) {

//     var kataBaru = []

//     for(var i = 0; i <= kata.length; i++) {

//         switch (kata[i]) {
            
//             case "1":
//                 kataBaru[i] = "i";    
//                 break;
//             case "4":
//                 kataBaru[i] = "a";
//                 break;
//             case "3":
//                 kataBaru[i] = "e";
//                 break;
//             case "7":
//                 kataBaru[i] = "u";
//                 break;
//             case "0":
//                 kataBaru[i] = "o"
//             default:
//                 kataBaru[i] = kata[i];
//                 break;
//         } 
//     }

//     return kataBaru.join('');
// }

// console.log(numberLetters('prat1w1n7r4m1n1')); // pratiwinuramini
// console.log(numberLetters('yud1'));

/* Exercise 4 
Diberikan sebuah array yang berisi kumpulan angka 
bilangan bulat positif. 
Buatlah sebuah fungsi yang menerima parameter array 
yang akan mengembalikan total penjumlahan dari setiap 
elemen-elemen array tersebut.
*/

// function total(angka) {
//     var output = 0;
//     for (var i = 0; i < angka.length; i++) {
//         output += angka[i];
//     }

//     return output;
// }

// console.log(total([4, 2, 8, 6]));

/* Exercise 5
Diberikan 2 buah array yang berisi angka.
Array tersebut memiliki panjang yang sama sama. 
Buatlah sebuah fungsi yang membandingkan setiap elemen 
dari ke dua array tersebut. 
Fungsi akan mengembalikan score hasil perbandingan 
ke dua array terbut.

var numA = [2, 3, 5]
var numB = [4, 1, 6]

#output
[1, 2]
*/

function banding(angka1, angka2) {

    var hasilPerbandingan = [0,0];

    for (var i = 0; i < angka1.length; i++){
        if (angka1[i] < angka2[i]) {
            hasilPerbandingan[1] += 1
        } else {
            hasilPerbandingan[0] += 1
        }
    }
    
    return console.log(hasilPerbandingan);
}

banding([1,2,3], [2,1,3]);


