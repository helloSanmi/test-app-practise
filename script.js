
// let whereAmI = (age) => {
//     // (username === 'local' && location === 'Abj') ? "I am not lost" : "I am totally lost!"
//     // let age;
//     var mes
//    (age >= 18) ? mes = 'You are eligible' : mes = 'You are ineligible'
// return mes
// }

// const newF = whereAmI(23)
// console.log(newF)


// Closure
const first = () => {
    const greet = 'Hi'; // parent scope
    const second = () => {
        alert(greet); // child scope
    }
    return second;
}

const newFunction = first();
newFunction()

//Currying
const multiply = (a, b) => a * b;
const curriedMult = (a) => (b) => (c) => a * b * c
const multiplyby5 = curriedMult(5);
const multiplyby2 = multiplyby5(2);
console.log(multiplyby2(3));

//Compose
const compose = (f, g) => (a) =>f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);


//#1 Create a one line function that adds two parameters
const oneLine = (num1, num2) => num1 + num2

//# 2 Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)//returns 13

//#3 Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //returns 31


//#4 Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) //returns 17

//#5 Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //returns 16

//#6 What are the two elements of a pure function?
//determinism and functional purity