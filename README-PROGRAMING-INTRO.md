# DASAR-DASAR PEMPROGRAMAN

Program adalah kumpulan/serangkaian instruksi terstrukstur yang di berikan ke pada komputer untuk menyelesaikan sebuah masalah.ex:arah ke masjid
Bagaiman memberikan instruksi ke komputer

Pemprograman adalah cara kita memberi instruksi ke komputer

## Konsep dasar pemprogramnan

- Variable
- Type data
- Control flow dengan pengkondisian
- Control flow dengan pengulangan
- Function
- Array
- Object

## Variable

Ada 3 cara untuk mendeklarasikan variable di javascript

```javascript
var a = "Anata";
let b = "wa";
const c = "daisuki";
```

Untuk melihat perbedaan dari ketiga cara mendeklarasikan variable tersebut silakan nonton videonya [di sini](https://www.youtube.com/watch?v=7HDgJScwIrI)

## Data type

- String

```javascript
let name = "Yudi";
/*
concatenation
get character
get length
string methods
*/
```

- Number

```javascript
let angka = 2;
/*
math operators
math methods
*/
```

- Boolean

```javascript
true || false;
```

- Null

```javascript
let name = null;
```

- Undifined

```javascript
let a;
console.log(a);
```

- array

```javascript
let buku = ["rich dad and poor dad", 1, true];
```

- Object

```javascript
let club = {
  name: "AC Milan",
  city: "Milano",
  champion: 7
};
```

## Operator

```javascript
// Aritmetika misal(+  -  /  *  %)

var a = 4;
var b= 4;

console.log(a+b
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);


// Penugasan  -=  += /= *=

var c = 4

console.log(c+=5); // ini sama dengan c = c + 5

// Pembandingan  ==  !==  ===, mereturn boolean

var d = 4;
var e = 5;

console.log(d == e);
console.log(d !== e);
console.log(d === e);

// Logika  &&  ||, mereturn boolean

true && true // output true;
true || false // output true;

// String  +

var name = 'Yudi' + ' ' + 'krisnandi'

// typeof type data
var num = 42

typeof(num)//output number

// kondisi

true ? console.log('this true') : console.log('this false');
```

## Pengkondisian

- if statement :

```javascript
if (true) {
  console.log("do somethins here");
}
```

- if else statement :

```javascript
if (true) {
  console.log("do something here");
} else {
  console.log("do something here");
}
```

- else if statement :

```javascript
if(true) {
    console.log('do something here')
}else if{
    console.log('do something here')
}else{
    console.log('do something here')
}
```

- switch statement :

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

[read more here](https://www.w3schools.com/js/)

## Looping/Pengulangan

for looping :

```javascript
for (let x = 1; x >= 10; x++) {
  console.log(i);
}
```

while loop :

```javascript
let n = 0;
while (n < 5) {
  n++;
  console.log(n);
}
```

do while loop :

```javascript
var i = 0;

do {
  i++;
  console.log(i);
} while (i < 5);
```

## Math
- Math.random()
- Math.ceil()
- Math.floor()
- Math.round()

## String
- length
- indexOf
- chartAt
- slice
- replace
- toUpperCase
- toLowerCase

## Data Operation

- insertion
- deletion
- searching
- sorting
- travelsal
- acccess

## Array

## Object
