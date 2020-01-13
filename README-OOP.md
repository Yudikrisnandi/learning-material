# Javascript Object Oriented Programing

Ada 2 paradigma pemprogram :
1. Pemprograman prosedural
2. Pemprograman berorientasi objek

[read more here](https://medium.com/@yudi_krisnandi/belajar-fundamental-opp-dengan-javascript-c1b721677ce9)

contoh objek literal :
```javascript
var user = {
    id: 1
    name: 'Yudi',
}

```

## Contructor function

```javascript
function Person(name,job) {
    this.name = name;
    this.job = job;
    this.greet = function() {
        return "hello my name is " + this.name + ". " + "I am " + this.job
    }
}

var yudi = new Person('Yudi', 'lts')
```
## Prototype

All JavaScript objects inherit properties and methods from a prototype.

```javascript
function Anime(name,author) {
    this.name = name;
    this.author = author;
}

Anime.prototype.info = function() {
     return this.name + " is writen by " + this.author;
}

var naruto = new Anime('Naruto', 'Kishimoto-sensei')

console.log(naruto.info());
console.log(naruto.hasOwnProperty('name'));
```

## Inheritance

```javascript
function User(name,job,id,membership) {
    Person.call(this, name, job);
    this.id = id;
    this.membership = membership;
}

User.prototype = Object.create(Person.prototype);

var user1 = new User('Yudi', 'otaku', 1, "premium");
console.log(user1);

```

## Object create

```javascript
var club = {
  greet: function() {
    return "forza milan"
  }
}

var milan = Object.create(club);
milan.name = "Milan";
milan.year = 1899

console.log(milan);
```

