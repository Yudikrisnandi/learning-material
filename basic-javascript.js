/*  Exercise 1
    Buatlah sebuah fungsi yang akan mencetak angka 1-30 ke console.
    Ketika angkanya habis di bagi 2 di depan angkanya akan di tambah string "Forza". 
    Ketika angkanya habis di bagi 5, di depan angkanya di tambah string "Milan". 
    Ketika angkanya habis di bagi 2 dan 5, di depan angkanya di tambah string "Forza Milan".
*/

var angka1 = 1;
var angka2 = 30;

while (angka1 <= angka2) {
    if(angka1 % 2 === 0) {
        console.log('Forza ' + angka1);
    } else if (angka1 % 5 === 0) {
        console.log('Milan ' + angka1);
    } else if (angka1 % 5 === 0 && angka1 % 2 === 0) {
        console.log('Forza Milan ' + angka1);
    } else {
        console.log(angka1)
    }
    angka1++;
}

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

var nama = 'maria';
var peran = 'Penyihir';

if (nama === '' && peran == '') {
    console.log('Pilih Peranmu untuk memulai game.')
}

if (nama !== '' && peran == '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}

if (nama !== '' && peran == 'Ksatria') {
    console.log('Selamat datang di Dunia GlintsWarrior, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', Tugas kamu adalah menyerang musuh!');
}

if (nama !== '' && peran == 'Tabib') {
    console.log('Selamat datang di Dunia GlintsWarrior, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ' , kamu akan membantu temanmu yang terluka.');
}

if (nama !== '' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia GlintsWarrior, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}


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

function numberLetters(kata) {

    var kataBaru = []

    for(var i = 0; i <= kata.length; i++) {

        switch (kata[i]) {
            
            case "1":
                kataBaru[i] = "i";    
                break;
            case "4":
                kataBaru[i] = "a";
                break;
            case "3":
                kataBaru[i] = "e";
                break;
            case "7":
                kataBaru[i] = "u";
                break;
            case "0":
                kataBaru[i] = "o"
            default:
                kataBaru[i] = kata[i];
                break;
        } 

        // }
        // if (kata[i] === "1") {
        //     kataBaru[i] = "i";
        // }
        // if (kata[i] === "4") {
        //     kataBaru[i] = "a";
        // } 
        // if (kata[i] = "3") {
        //     kataBaru[i] = "e";
        // } 
        // if (kata[i] === "7") {
        //     kataBaru[i] === "u";
        // } 
        // if (kata[i] === "0") {
        //     kataBaru[i] = "o";
        // } 
        // if (kata[i] === kata[i]) {
        //     kataBaru[i] = kata[i];
        // }

    }
    return kataBaru.join('');
}

console.log(numberLetters('prat1w1n7r4m1n1')); // pratiwinuramini
console.log(numberLetters('yud1'));


