# PETUNJUK PENGERJAAN SOAL

1. Clone project
2. Dari branch develop checkout buat branch baru dengan nama "feature/namakamu"
3. Di dalam folder project yang telah kamu clone buat file javascript dengan nama kamu, contoh yudi.js
4. Setelah mengerjakan soal, langsung di commit lalu push ke branch kamu dan buat merger request ke branch develop

Format penulisan commit dan merge message --> [Yudi] - your message

Nama harus di awali huruf besar dan message semuanya huruf kecil



### No.1

Buatlah sebuah fungsi yang akan mencetak angka 1-30 ke console.

Ketika angkanya habis di bagi 2 di depan angkanya akan di tambah string "Forza". Ketika angkanya habis di bagi 5, di depan angkanya di tambah string "Milan". 

Ketika angkanya habis di bagi 2 dan 5, di depan angkanya di tambah string "Forza Milan".

```bash
#output
1
Forza 2
...
Milan 5
...
Forza Milan 10
```
### No.2

Kamu diminta untuk memprogram suatu game sederhana,GlintsWarrior  namanya.

Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran.

Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".

Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.

Tugas kamu  adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

#### Petunjuk soal :

- Variabel tetap di-input secara manual.
- Variabel nama dan peran dapat diisi apa saja.
- Nama tidak perlu dicek sama persis seperti contoh input/output
- Lakukan pengecekan setiap peran menggunukan guard clause

```javascript
//contoh input
var nama = 'yudi';
var peran = ''

//Silakan ganti nilai nama dan peran untuk mengetes kondisi!

// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Danu' dan peran = ''
"Halo Danu, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = Maria  dan peran 'Ksatria'
"Selamat datang di Dunia GlintsWarrior, Maria"
"Halo Ksatria Maria, Tugas kamu adalah menyerang musuh!"

//Output untuk Input nama = Badai  dan peran 'Tabib'
"Selamat datang di Dunia GlintsWarrior , Badai "
"Halo Tabib Badai, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = ‘Hendri  dan peran 'Penyihir'
"Selamat datang di Dunia GlintsWarrior, Hendri "
"Halo Penyihir Hendri, ciptakan keajaiban yang membantu kemenanganmu!"
```
### No.3

#### Implementasikan function 'ubahString' untuk mengganti angka-angka yang ada di dalam 'str' menjadi sebuah huruf yang sesuai dengan aturan:

- 1 = i
- 4 = a
- 3 = e
- 7 = u
- 0 = o

```javascript
// Test cases
// gunakan arrow function dan atau guard clause untuk latihan ini !
console.log(numberLetters('prat1w1n7r4m1n1')); // pratiwinuramini
console.log(numberLetters('y7d1kr1sn4nd1')); // mas yudi 
console.log(numberLetters('b4d41')); // badai
```
### No.4
Diberikan sebuah array yang berisi kumpulan angka bilangan bulat positif.

Buatlah sebuah fungsi yang menerima parameter array yang akan mengembalikan total penjumlahan dari setiap elemen-elemen array tersebut.

```bash
var num = [4, 2, 8, 6]

#output
20
```

### No.5
Diberikan 2 buah array yang berisi angka.Array tersebut memiliki panjang yang sama sama.

Buatlah sebuah fungsi yang membandingkan setiap elemen dari ke dua array tersebut.

Fungsi akan mengembalikan score hasil perbandingan ke dua array terbut.

```bash
var numA = [2, 3, 5]
var numB = [4, 1, 6]

#output
[1, 2]
```

### No.6
Diberikan sebuah array yang berisi 5 buah bilangan bulat positif.

Cari nilai minimum dan maksimum yang dapat dihitung dengan menjumlahkan tepat empat elemen dari lima elemen array tersebut.

```bash
var num = [2, 3, 5, 1, 4]

#output
[10,14]
```
### No.7
Anda diberi daftar bilangan bulat n-1 dan bilangan bulat ini berada dalam kisaran 1 hingga n. 

Tidak ada duplikat dalam daftar hanya saja angkanya akan di acak.

Salah satu bilangan bulat tidak ada dalam daftar. Buatlah sebuah fungsi yang akan mengembalikan angka yang hilang tersebut.

```bash
var num = [1, 3, 4, 2, 7, 6]

#output
5
```

### No.8
Diberikan sebuah string, S, dengan panjang n.

Tampilkan di layar index genap dan index ganjil setiap karakter dari string tersebut dalam sebuah string yang dipisahkan oleh spasi.

```bash
#input
str = "naruto"

#output
nrt auo
```

### NO.9
John memiliki koleksi komik sebanyak 2 buah.

Data komik tersebut di representasikan sebagai berikut :

```javascript
#input
let comics = [
  {
    name: "Naruto",
    author: "Masasi Kishimoto",
    price: 2000
  },
  {
    name: "Saint Seiya",
    author: "Masami kurumada",
    price: 000
  }
]
```
Buatlah descripsi dari masing-masing komik yang dimiliki John, dan di ahir dari deskripsi komik hitunglah jumlah uang di keluarkan oleh John untuk membeli komik-komik tersebut.

Perhatikan format outputnya berikut!

```javascript
#output
"Naroto adalah komik yang di tulis oleh Masashi Kishimoto, di jual dengan harga Rp2000"
"Sait Seiya adalah komik yang di tulis oleh Masami Kurumada, di jual dengan harga Rp4000"
"John menghabiskan Rp6000 untuk koleksi komik-komiknya"
```

### No.10
Diberikan sebuah array arr yang berisi angka sebanyak n;

Hitunglah sisa hasil bagi antara angka terbesar dan terkecil dalam array tersebut;

```bash
#input
[4, 5, 9, 13, 3]

#output
1
```

