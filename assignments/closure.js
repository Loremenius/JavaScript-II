// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const rngHatesMe = () =>{
  let maxNum = 20;
  let rolledNum = 0;
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function isAbove15(){
    if(rolledNum >= 15){
      console.log(`You rolled a ${rolledNum}. You hit the goblin with your Firebolt.`)
    }else{
      console.log(`You rolled a ${rolledNum}. You hit the tree, instead of the goblin, with your Firebolt.`)
    }
  }
  rolledNum = getRandomInt(20);
  isAbove15();
}

rngHatesMe();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 0;
  const counter = () =>{
    count++;
    return count;
  }
  return counter;
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();
myCounter();
myCounter();
myCounter();
myCounter();
console.log(myCounter());
// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker2 = () => {
  let count = 0;
  const counter = () =>{
    if(count<5){
      count++; 
    }else{
      count = 0;
    }
    console.log(count);
    return count;
  }
  return counter;
};

const myCounter2 = counterMaker2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();

console.log(myCounter2());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 1;
  const object = {
    increment:() => {
      const counter = () =>{
          count++; 
          console.log(count);
        return count;
      }
      return counter;
    },
    decrement: ()=>{
      const counter = () =>{
        count= count - 1;
        console.log(count);
        return count;
      }
      return counter;
    },
  }
  // object.increment = ()=>{
  //       currentCount = this.count
  //       newCount = currentCount++;
  //       console.log(newCount);
  //       return newCount;
  //   }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return object;
};

 counterObject = counterFactory();
// let int = counterObject.count;
// console.log(int);
// counterObject.increment();
// int = counterObject.count;
// console.log(int)

const increment = counterObject.increment();
const decrement = counterObject.decrement();
increment();
increment();
increment();
increment();
console.log(increment());
decrement();
decrement();
decrement();
decrement();
console.log(decrement());

