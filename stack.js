/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* Stacks */

// functions: push, pop, peek, length

let letters = [];  // this is our stack

let word = "marle";

let rword =  "";

// put letters of word into stack

for(let i=0; i<word.length; i++){
  letters.push(word[i]);
}

console.log(letters);

// pop off the stack in reverse order
for(let i=0;i<word.length;i++){
  rword += letters.pop();
}

if(rword === word){
  console.log(word +" is a palindrome");
}
else{
  console.log(word +" is not a palindrome");
}

// Creates a stack

var Stack = function(){
  this.count =0;
  this.storage = {};
  // Adds a value onto the end of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }
  
  // Removes and returns the value at the end of stack
  this.pop = function(){
    if(this.count===0){
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  
  // return the value at the end of the stack
  this.peek = function(){
    return this.storage[this.count-1];
    
  }
  
  
  this.values = function(){
    var obj = this.storage;
    let arrayValue =  Object.keys(obj).map(function(key){
      return obj[key];
    })
    return arrayValue;
  }
  
  this.size = function(){
    return this.count; 
  }
 
}



let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log('stack values - '+ myStack.values());
console.log('size- '+ myStack.size());
console.log('peek - '+ myStack.peek());
console.log('size- '+ myStack.size());
console.log('stack values - '+ myStack.values());
console.log('pop - '+ myStack.pop());
console.log('size- '+ myStack.size());
console.log('stack values - '+ myStack.values());
console.log('peek - '+ myStack.peek());
console.log('size- '+ myStack.size());
console.log('stack values - '+ myStack.values());

// post increment and pre increment

var i = 0;
var array = [1, 3, 5];
//var val = array[i++]; // val is 1, ie. the first element of the array
var val = array[++i]; // val is 1, ie. the first element of the array
console.log('val - '+ val);
console.log('i - '+ i);

// Convert an object to array

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map(function(key) {
  return [obj[key]];
});
console.log('Result - '+result);



























/*
Exception: ReferenceError: mystack is not defined
@Scratchpad/1:77:1
*/
/*
Exception: ReferenceError: mystack is not defined
@Scratchpad/1:78:1
*/
/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/2:76
*/
/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/2:77
*/
/*
Exception: TypeError: this.storage is not a function
Stack/this.values/arrayValue<@Scratchpad/2:71:15
Stack/this.values@Scratchpad/2:70:23
@Scratchpad/2:88:26
*/
/*
Exception: TypeError: this.storage is undefined
Stack/this.values/arrayValue<@Scratchpad/2:71:15
Stack/this.values@Scratchpad/2:70:23
@Scratchpad/2:88:26
*/
/*
Exception: TypeError: this.storage is undefined
Stack/this.values/arrayValue<@Scratchpad/2:71:7
Stack/this.values@Scratchpad/2:70:23
@Scratchpad/2:88:26
*/