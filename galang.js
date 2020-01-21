// Quetion number 1
function printToConsole(){
    for (let i = 1; i <= 30; i++) {
        var result = '';
        if( (i % 2) == 0 ){
            result = "Forza ";
        }
        if( (i % 5) == 0 ){
            result += "Milan ";
        }
        console.log(result += i);
    }
}
// printToConsole();
// End Question number 1

// Question number 2
function glintsWarrior(name = '',role = ''){
    if(name == ''){
        return console.log("Name are required!");
    }
    if(role == ''){
        return console.log(`Halo ${name}, Choose your role to play the game!`);
    }

    console.log(`Welcome to the GlintsWarrior World, ${name}`);
    
    if(role == 'Knight' || role == 'knight'){
        return console.log(`Hello Knight ${name}, your task is to attack the enemy!`);
    }
    if(role == 'Physician' || role == 'physician'){
        return console.log(`Hello Physician ${name}, you will help your injured friend`);
    }
    if(role == 'Witch' || role == 'witch'){
        return console.log(`Hello Witch ${name}, create miracles that help your victory!`);
    }

    return console.log('Please enter the appropriate role');
}
// Knight / Physician / Witch
// glintsWarrior('Galang','Witch');
// End Question number 2

// Question number 3
var changeString = (name='') => {
    result = '';
    for (var i = 0; i < name.length; i++){
        char = name.charAt(i);
        switch (char) {
            case '1':
                result += 'i';
                break;
            case '4':
                result += 'a';
                break;
            case '3':
                result += 'e';
                break;
            case '7':
                result += 'u';
                break;
            case '0':
                result += 'o';
                break;
            default:
                result += char;
                break;
        }
        // if(char == 1){
        //     result += 'i';
        //     continue;
        // }
        // if(char == 4){
        //     result += 'a';
        //     continue;
        // }
        // if(char == 3){
        //     result += 'e';
        //     continue;
        // }
        // if(char == 7){
        //     result += 'u';
        //     continue;
        // }
        // if(char == '0'){
        //     result += 'o';
        //     continue;
        // }
        // result += char;
    }
    return console.log(result);
}
// changeString('G4l4ng P1l14ng');
// End Question number 3

// Question number 4
var sumArray = (numbers = []) => {
    var sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    })
    return sum;
}
// console.log(sumArray([4, 2, 8, 6]));
// End Question number 4

// Question number 5
var arrayBattle = (numbersA = [],numbersB = []) => {
    if(numbersA.length !== numbersB.length){
        return console.log('Array length are not equal!');
    }
    var scoreAB = [0,0];
    for (let i = 0; i < numbersA.length; i++) {
        if(numbersA[i] > numbersB[i]){
            scoreAB[0] += 1;
        }else{
            scoreAB[1] += 1;
        }
    }
    return console.log(scoreAB);
}
// arrayBattle([2, 3, 5],[4, 1, 6]);
// End Question number 5

// Question number 6
var arraySumMinMax = (numbers = []) => {
    sum = sumArray(numbers);
    min = sum - Math.max.apply(Math, numbers);
    max = sum - Math.min.apply(Math, numbers);
    result = [min,max];
    return console.log(result);
}
// arraySumMinMax([2, 3, 5, 1, 4]);
// End Question number 6

// Question number 7
var findMissingNumber = (numbers = []) => {
    numbers = numbers.sort(function(a, b){return a - b});
    result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] !== i+1){
            result = i+1;
            break;
        }
    }
    return console.log(result);
}
findMissingNumber([1, 3, 4, 2, 7, 6]);
// End Question number 7