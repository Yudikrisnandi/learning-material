# Local Storage

```javascript
// set local storage item

localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// set session storage item

sessionStorage.setItem('name', 'Beth');

// remove from storage

localStorage.removeItem('name');

// get from storage

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
cosole.log(name, age);

//clear local storage
localStorage.clear();
```

Store multi value to local storage

```javascript
document.querySelector('form').addEventListener('submit', function(e){
  const anime = document.getElementById('task').value;

  let animes;

  if(localStorage.getItem('animes') === null) {
    tasks = [];
  } else {
    // JSON.parse confert text string(json format) to javascript object
    tasks = JSON.parse(localStorage.getItem('animes'));
  }

  animes.push(anime);

  // JSON.stringify confert javascript object to text string(json format)
  localStorage.setItem('tasks', JSON.stringify(animes));

  alert('Animes saved');

  e.preventDefault();
});
