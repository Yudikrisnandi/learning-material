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



