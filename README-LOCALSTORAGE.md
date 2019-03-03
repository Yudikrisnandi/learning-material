# Local Storage

```javascript
// set local storage item

localStorage.setItem('name', 'Yudi');
localStorage.setItem('age', '30');

// set session storage item

sessionStorage.setItem('name', 'Yudi);

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
  const anime = document.getElementById('name').value;

  let animes;

  if(localStorage.getItem('animes') === null) {
    animes = [];
  } else {
    // JSON.parse confert text string(json format) to javascript object
    animes = JSON.parse(localStorage.getItem('animes'));
  }

  animes.push(anime);

  // JSON.stringify confert javascript object to text string(json format)
  localStorage.setItem('animes', JSON.stringify(animes));

  alert('Animes saved');

  e.preventDefault();
});
