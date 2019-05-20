# ASYNCRONOUS JAVASCRIPT

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
