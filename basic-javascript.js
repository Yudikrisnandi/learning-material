/* 
    Buatlah sebuah fungsi yang akan mencetak angka 1-30 ke console.
    Ketika angkanya habis di bagi 2 di depan angkanya akan di tambah string "Forza". 
    Ketika angkanya habis di bagi 5, di depan angkanya di tambah string "Milan". 
    Ketika angkanya habis di bagi 2 dan 5, di depan angkanya di tambah string "Forza Milan".
*/

var angka1 = 1;
var angka2 = 30;

while (angka1 <= angka2) {
    if(angka1 % 2 === 0) {
        console.log('Forza');
    } else if (angka1 % 5 === 0) {
        console.log('Milan');
    } else if (angka1 % 5 === 0 && angka1 % 2 === 0) {
        console.log('Forza Milan');
    }
    angka1++;
}
