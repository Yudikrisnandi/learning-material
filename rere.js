//Exercise 1
for (var i = 1; i <= 30; i++) {
    var message = '';
    if (i%2=== 0) message += 'forza ';
    if (i%5 === 0) message += 'milan ';
    if (i%10 === 0) message + 'forza milan ';
    
    console.log(message + i)};