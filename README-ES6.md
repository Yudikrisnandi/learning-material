# INTRO TO ES6

### Variable

```javascript

let a; //You can reassign variable with new value
a= 0
a= 1
a= 2

const b = 1; // You can't reassign variable
```

### Template literal

```javacript
let a = 'anata';
let b = 'wa';
let c = 'daisuki';

console.log(`${a} ${b} ${c}`);
```

### Arraw function

```javascript
//ES5 function
function namefunction() {
    console.log('Hello world');
}
// or like this
var nameFunction = function() {
    console.log('Hello world');
}

// and this ES6 new syntax called arrow function

const nameFunction = () => console.log('Hello world');//without a parameter and function body only one line
const nameFunction = name => console.log(name);//wiht only one parameter and function body only one line
const nameFunction = (name, age) => console.log(name & age);//with more than one parameter and function body only one line
const nameFunction = name => { // function body have more than one line
    console.log('Hello world');
    console.log('Hello world again')
}
```

### High order array method forEach

```javascript
let animes = [
  {
    id: 1,
    name: 'Saint seiya'
  },
  {
    id: 2,
    name: 'Naruto'
  },
  {
    id: 3,
    name: 'Nanatsu no Tazai'
  }
]

animes.forEach(anime => console.log(anime.name))
```
### High order array method map

```javascript
let fruits = ['bananas', 'apples', 'oranges']
fruits.map(fruit => console.log(`${fruit}***`)
```

### High order array method filter

```javascript
let animes = [
  {
    id: 1,
    name: 'Saint seiya'
  },
  {
    id: 2,
    name: 'Naruto'
  },
  {
    id: 3,
    name: 'Nanatsu no Tazai'
  }
]

let anime1 = animes.filter(anime => anime.id !== 3);
console.log(anime1);
```

### Spread operator

```javascript
arr = [1, 2, 3, 4]

arr2 = [...arr, 5, 6, 7]

console.log(arr2);

let club = {
  id: 1,
  country: 'Italia',
}


let milan =  {
  ...club,
  name: 'AC Milan'
}

console.log(milan)
```

### Decstructuring

```javascript
const club = {
  name: 'AC Milan',
  address: {
    city: 'Milano',
    region: 'Lombardia'
  },
  founder: 'Helbert Kiplin',
  player: ['Kaka', 'Maldini', 'Van Basten', 'Baresi']
}

const { name, address, founder, player } = club

console.log(name)

console.log(club.player[0]);
```
### Class and subclass

```javascript
// Class
class Club {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  greet() {
    return `${this.name} is a club from ${this.city}`
  }  
}

//const milan = new Club('AC Milan', 'Milano');
//console.log(milan.greet())


// Subclass
class Italia extends Club{
  constructor(name, city, country){
    super(name, city);
    this.country = country;
  }
  info() {
    return `${this.name} is a football club from ${this.city}, ${this.country}`;
  }
}
const milan = new Italia('AC Milan', 'Milano','Italia');

console.log(milan.info())
```



