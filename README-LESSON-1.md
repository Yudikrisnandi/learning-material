# GIT
Git adalah salah satu sistem pengontrol versi(Version Control System)pada proyek perangkat lunak yang diciptakan oleh Linus Torvalds. Tugasnya mencatat setiap perubahan pada file proyek yangdikerjakan oleh banyak orang maupun sendiri. 

## Installation

Install git di linux

```bash
sudo apt-get install git
```
Setelah git di install, check versinya

```bash
git --version
```

## Basic Configuration

Sebelum menggunakan git, kita terlebih dahulu konfigurasi username dan email.

Gunakan email yang sama dengan email yang anda gunakan di Github, Gitlab, atau Bitbucket

```bash
git config --global user.name "Yudi Krisnandi"
git config --global user.email yudi-krisnadi@gmail.com
```
check hasil configurasi tadi

```bash
git config --list
```



## Initialisasi Repository

```bash
git init
```

## Simpan Perubahan dan Revisi

Ada 3 kondisi file dalam git

### 1. Modified
Modified adalah kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai dan belum disimpan di version control.

check status dengan :
```bash
git status
```

### 2. Staged
Staged adalah kondisi dimana revisi sudah ditandai, tetapi belum disimpan di version control. Untuk mengubah kondisi file dari modified ke staged gunakan perintah git add nama_file. 

Contoh:
```bash
git add index.html
```

### 3. Commited
Commited adalah kondisi dimana revisi sudah disimpan di version control. perintah untuk mengubah kondisi file dari staged ke commited adalah git commit.

Contoh:
```bash
git commit -m '[Yudi] - your message'
```

Argumen -m, berfungsi untuk menambahkan pesan pada setiap perubahan yang di lakukan.

Pesan di simpan di dalam tanda petik satu atau petik dua.

## Membuat ssh-key
[Baca artikelnya di sini](https://medium.com/@yudi_krisnandi/5-langkah-mudah-membuat-ssh-key-b0bfe604e177)
