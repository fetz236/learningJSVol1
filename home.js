//logging to console
console.log('print sys');
console.log('print sys')
/*
//first alert
alert('alert!!!');

//first var
var b = 'smooth';
console.log(b);

var numberEx = 12;
console.log(numberEx);

//first prompt
var age = prompt('How old are you?');
document.getElementById('paraglide').innerHTML = age;


//first function
function func1(){
    console.log('this is a function');
}

func1();

function greeting(name){
    

    //String concatenation
    var rs = 'Hello ' + name;
    console.log(rs);
}

yourName = prompt('What is your name?');
greeting(yourName);

function combineAll(var1, var2){
    var rs = var1 + var2;
    console.log(rs);
}

var s1 = 'Big';
var s2 = 'Small';
combineAll(s1,s2);



//While loops

var num = 1;

while (num<=100){
    num += 1
}

//101 expected
console.log(num)



//For loops use let

for(let i = 1; i <= 100; i++){
    //log from 1 to 101
    console.log(i);
}



// Data types
let yourAge = 18 // int
let yourName = 'Jimothy' //String
let profile = {first : yourName, age: yourAge}; //Object / Dictionary
let truth = false; //Boolean
let groceries = ['apple', 'banana', 'oranges']; //Arrays / list
let random; //undefined
let nothing = null; //null



//Strings in JS

let fruit = 'banana';
let moreFruit = 'apple\nbanana';
let fruitList = "banana,apple,tomato,berry"

console.log(fruit.length);
console.log(fruit.indexOf('q')) //if not found return -1 else return found x times
console.log(fruit.slice(2,6)); // returns nana (after x, including y)
console.log(fruit.replace('ban', '123')); //replace ban w 123
console.log(fruitList.split(',')); //Split via comma
console.log(fruit.split('')); //Split via char

*/
let fruits = ['apple','banana','berry','pineapple'];
fruits = new Array('apple','banana','berry','pineapple');

console.log(fruits[1]); //banana
fruits[1] = 'justAte';

for (let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//console log array common methods
console.log('toString', fruits.toString); //to string from list
console.log('dotJoin', fruits.join(' * ')); //join w stars
console.log(fruits.pop(), fruits); // pop pineapple
console.log(fruits.push('orange'), fruits); //push orange
console.log(fruits[4]); //undefined
fruits[4] = "papaya";
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

//combining lists

let veggies = ['cucumber', 'broccoli', 'asparagus'];
let allGroceries = fruits.concat(veggies);
console.log(allGroceries);
console.log(allGroceries.reverse());

let numbersList = [1, 52, 23, 76, 81, 16,28,19, 10];
console.log(numbersList.sort(function(a,b) {return a-b})); // ascending order 
console.log(numbersList.sort(function(a,b) {return b-a})); // descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}

console.log(emptyArray);