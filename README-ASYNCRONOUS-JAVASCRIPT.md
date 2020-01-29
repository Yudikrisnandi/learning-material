# ASYNCRONOUS JAVASCRIPT

## ajax
- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background
- AJAX is not a programming language.
- AJAX is a technique for accessing web servers from a web page.
- AJAX just uses a combination of browser built-in XMLHttpRequest object (to request data from a web server) and JavaScript and HTML DOM (to display or use the data)

## Callback

```javascript
const posts = [
  {
    title: 'Post one',
    body: 'This is post one'
  },
  {
    title: 'Post two',
    body: 'This is post two'
  }
]

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post.title)
    })
  }, 1000)
}

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}


createPost({
  title: 'Post There',
  body: 'This is post three'
}, getPosts)
```

## Promise

```javascript
const posts = [
  {
    title: 'Post one',
    body: 'This is post one'
  },
  {
    title: 'Post two',
    body: 'This is post two'
  }
]

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if(!error) {
        resolve()
      }else{
        reject()
      }
    }, 2000)
  })
}


const getPosts = () => {
  setTimeout(() =>{
    posts.forEach(post => {
      console.log(post.title)
    }) 
  }, 1000)
}
createPost({
  title: 'Post There',
  body: 'This is post three'
}).then(getPosts)
.catch(error => console.log(error))
```

## Async-await

```javascript
const posts = [
  {
    title: 'Post one',
    body: 'This is post one'
  },
  {
    title: 'Post two',
    body: 'This is post two'
  }
]


const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if(!error) {
        resolve()
      }else{
        reject()
      }
    }, 2000)
  })
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post.title)
    })
  }, 1000)
}

async function init() {
  const res = await createPost({
    title: 'Post three',
    body: 'This is post three'
  })
  getPosts()
}

init()
```
