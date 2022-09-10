### No.1

```javascript
function solution(n){
    if(n % 2 === 0 && n !== 2){
        return "YES"
    }
    return "NO"
}
```

### No.2

```javascript
function solution(n){
    if(n > 90){
        return 'A';
    }else if(n >= 81 && n <= 90){
        return 'B'
    }else if(n >= 71 && n <= 80){
        return 'C'
    }else if(n >= 61 && n <= 70){
        return 'D'
    }else {
        return 'E'
    }
}
```

### No.3

```javascript
function solution(n){
    let ans = -1;
    if(n % 3 === 0 && n % 5 === 0){
        ans = "FizzBuzz";
        return ans;
    }
    if(n % 3 === 0){
        ans = "Buzz";
        return ans;
    }
    if(n % 5 === 0){
        ans = "Fizz";
        return ans;
    }
    return ans
}
```

### No.4

```javascript
function solution(n, b, p){
    const salah = (n - b) * -1;
    const benar = b * 3;
    const point = benar + salah;
    return point < p ? "NO" : "YES";
}
```

### No.5

```javascript
function solution(x,y){
    let admin = 0.5;
    if(x % 5 !== 0){
        return y;
    }
    if(y - x - admin < 0){
        return y;
    }
    return y - x - admin;
}
```

### No.6

```javascript
function solution(num){
    let res = 0;
    for(let i = 1; i <= num; i++){
        res += i;
    }
    return res;
}
```

### No.7

```javascript
function solution(num){
    if(num === 0){
        return 0;
    }
    return solution(Math.floor(num /10)) + num % 10
}
```

### No.8

```javascript
function solution(n, m){
    let count = 0;
    while(n <= m){
        count++;
        n *= 3;
        m *= 2;
    }
    return count;
}
```

### No.9

```javascript
function solution(n){
    let res = 1;
    while(n !== 1){
        res *= n;
        n--;
    }
    return res;
}
```

### No.10

```javascript
function solution(n){
  let fib = [0, 1]
  for(let i = 2; i <= n; i++){
    let a = fib[i-1]
    let b = fib[i-2]
    fib.push(a+b)
  }
  return fib[n]
}
```

### No.11

```javascript
function solution(k, m, n){
    let totalPrice = k;
    for(let i = 2; i <= n; i++){
        let price = i * k;
        totalPrice += price;
    }
    let ans = Math.abs(m-totalPrice)
    if(m > totalPrice){
        ans = 0;
    }
    return ans;
}
```

### No.12

```javascript
function solution(str){
    let st = 'a';
    let res = 0;
    for(let i = 0; i < str.length; i++){
        let cl = Math.abs(str[i].charCodeAt(0) - st.charCodeAt(0));
        let opcl = 26 - cl;
        if(opcl < cl){
            res += opcl;
        }else{
            res += cl;
        }
        st = str[i];
    }
    return res;
}
```

### No.13

```javascript
function solution(arr1, arr2){
    let x = 0 , y = 0;
    for(let i =  0; i < arr1.length; i++){
        if(arr1[i] > arr2[i]){
            x++;
        }
        if(arr1[i] < arr2[i]){
            y++;
        }
    }
    return `${x} : ${y}`
}
```

### No.14

```javascript
function solution(arr){
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        let total = 0;
        for(let j = 0; j < 3; j++){
            if(arr[i][j] === 1){
                total++;
            }
        }
        if(total >= 2){
            res++;
        }
    }
    return res;
}
```

### No.15

```javascript
function solution(arr){
    let res = {}
    for(let i = 0; i < arr.length; i++){
        if(res[arr[i]]){
            res[arr[i]]++;
        }else{
            res[arr[i]] = 1;
        }
    }
    let size = Object.keys(res).length;
    return 4 - size
    
}
```

### No.16

```javascript
function solution(arr){
    const res = [];
    for(let i = 0; i < arr.length; i++){
        const total = totalSum(arr[i]);
        let isGenap = total % 2 === 0;
        if(isGenap){
            res.push("Genap")
        }else{
            res.push("Ganjil")
        }
    }
    return res;
}

function totalSum(num){
    if(num === 0){
        return 0;
    }
    return solution(Math.floor(num /10)) + num % 10
}
```

### No.17

```javascript
function solution(arr){
    let c = arr[0].length;
    const res = [];
    for(let i = 0; i < arr.length; i++){
        if(i&1){
            for(let j = c-1; j >= 0; j--){
                res.push(arr[i][j]);
            }
        }else{
            for(let j = 0; j < c; j++){
                res.push(arr[i][j]);
            }
        }
    }
    return res;
}
```

### No.18

```javascript
function solution(arr){
    let c = arr[0].length;
    const res = [];
    for(let i = 0; i < c; i++){
        if(i&1){
            for(let j = arr.length - 1; j >= 0; j--){
                res.push(arr[j][i]);
            }
        }else{
            for(let j = 0; j < arr.length; j++){
                res.push(arr[j][i]);
            }
        }
    }
    return res;
}
```

### No.19

```javascript
function solution(arr){
    let res;
    for(let i = 1; i <= 5; i++){
        for(let j = 1; j <= 5; j++){
          let x = arr[i-1][j-1]
          if(x === 1){
              res = Math.abs(i - 3) + Math.abs(j - 3)
          }
        }
    }
    return res
}
```

### No.20

```javascript
function solution(arr){
    let ans = arr[0];
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] > ans){
            ans = arr[i]
        }
    }
    return ans;
}
```

### No.21

```javascript
function solution(arr){
    let ans = arr[0];
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] < ans){
            ans = arr[i]
        }
    }
    return ans;
}
```

### No.22

```javascript
function solution(arr){
    const map = {}
    let res = 0
    for(let i = 0; i < arr.length; i++){
      if(map[arr[i]]){
        map[arr[i]]++;
      }else{
        map[arr[i]] = 1;
      }
    }
    for(let key in map){
      res += (map[key] * (map[key] - 1)) / 2
    }
    return res;
}
```

### No.23

```javascript
function solution(s, arr){
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        ans[i] = s[arr[i]];
    }
    return ans.join('')
}
```

### No.24

```javascript
function solution(s, arr){
    let ans = 0;
    let map = {};
    for(let i = 0; i < s.length; i++){
        map[s[i]] = true;
    }
    for(let i = 0; i < arr.length; i++){
        let isAllowed = true;
        for(let j = 0; j < arr[i].length; j++){
            if(map[arr[i][j]]){
                continue;
            }else{
                isAllowed = false;
                break;
            }
        }
        if(isAllowed){
            ans += 1;
        }
    }
    
    return ans;
}
```

### No.25

```javascript
function solution(arr1, arr2){
    let a = arr1.join("");
    let b = arr2.join("");
    return a === b ? "YES" : "NO";
}
```


### No.26

```javascript
function solution(arr){
    let ans = -1;
    for(let i = 0; i < arr.length; i++){
        if(isPalindrom(arr[i])){
            ans = i;
            break;
        }
    }
    return ans;
}

function isPalindrom(s){
    const rev = s.split("").reverse().join("");
    return s === rev;
}
```

### No.27

```javascript
function solution(a, arr){
    let ans = 0;
    let n = a.length;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].slice(0, n) === a){
            ans++;
        }
    }
    return ans;
}
```

### No.28

```javascript
function solution(arr){
  const res = []
  let startRow = 0 ; 
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;
  while(startRow <= endRow && startCol <= endCol){
    for(let i = startCol; i <= endCol; i++){
      res.push(arr[startRow][i])
    }
    for(let i = startRow+1; i <= endRow; i++){
      res.push(arr[i][endCol])
    }
    if(startRow == endRow || startCol == endCol){
      break;
    }
    for(let i = endCol - 1; i >= startCol; i--){
      res.push(arr[endRow][i]);
    }
    for(let i = endRow-1; i >= startRow+1; i--){
      res.push(arr[i][startCol])
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  
  return res;
}
```

### No.29

```javascript
function solution(arr){
    let l = 0, r = 0;
    for(let i = 0; i < arr.length;i++){
      for(let j = 0; j < arr[0].length; j++){
          if(i == j){
            l += arr[i][j];
            r += arr[i][arr[i].length - 1 - i];
          }
      }
    }
    let res = l + r;
    if(arr.length % 2 !== 0){
      let mid = Math.floor(arr.length / 2);
      res -= arr[mid][mid];
    }
    return res;
}
```

### No.30

```javascript
function solution(arr){
    const n = arr.length;
    const ans = new Array(2*n).fill(0);
    for(let i = 0; i < 2*n; i++){
        ans[i] = arr[i%n]
    }
    return ans;
}
```

### No.31

```javascript
function solution(arr){
    const ans = [];
    const n = arr.length / 2;
    for(let i = 0; i < n; i++){
        ans.push(arr[i]);
        ans.push(arr[i+n])
    }
    return ans;
}
```

### No.32

```javascript
function solution(arr){
    const map = {};
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]]){
            map[arr[i]]++
        }else{
            map[arr[i]] = 1;
        }
    }
    const se = new Set();
    for (const key in map) {
      se.add(map[key])
    }
    return se.size === Object.keys(map).length;
}
```

### No.33

```javascript
function solution(nums1, nums2){
    const ans = [[],[]];
    for(let i = 0; i < nums1.length; i++){
        let idx = nums2.indexOf(nums1[i]);
        if(idx < 0){
            ans[0].push(nums1[i])
        }
    }
    for(let i = 0; i < nums2.length; i++){
        let idx = nums1.indexOf(nums2[i]);
        if(idx < 0){
            ans[1].push(nums2[i])
        }
    }
    return ans;
}
```

