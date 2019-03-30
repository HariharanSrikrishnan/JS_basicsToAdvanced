# Advanced JavaScript

>There is nothing static about being a Web Developer

Let's take a deep dive into JS and see various recent features that are super useful.
## Scope
* Local Scope
* Global Scope

## Advanced Control Flow
* `switch` case
* Ternary Operator

## ES5 and ES6 (**Most Important**)

>ES === JavaScript

1. `let` and `const`
2. Destructuring
   * `type {prop1, prop2 ... propN} = Obj`
   * `const obj = {
       [var_name] : 'value' //Can use vars as keys
     }`
3. Template Strings
    * Enclosed within backticks: `Hello ${name}, welcome to our store`
4. Default Arguments 
5. Symbol ( A type in JS introduced in ES6)
   * To create entirely unique types.
   * Not used much. Very advanced concept.
   * No need for this in our project.

6. Arrow Functions (*My favorite*)
   * `const addThem = (a,b) => a+b`

## Advanced Funtions (Infact Very Advanced)
1. Scope Recap
2. Closures
   `const first = () => {
       const greet = "Hi";
       const second = () => {
           alert(greet);
       }
       return second;
   }
   const newFunc = first()`
3. Currying (*Very Advanced*)
    * `const curriedMultiply = (a) => (b) => a*b`
    * `curriedMultiply(a)(b)`

4. Compose (*Very Advanced*)
    * `const compose = (f,g) => (a) => f(g(a));`
    * `const sum = (num) => num+1`
    * `compose(sum, sum)(5)`
    * returns 7

## Advanced arrays and objects (Optional)
    * Look up the docs to learn yourself

## ES7
    * Had only two new inclusions.
1. `includes()` method
2. `**` exponential operator (5**2 ---> 25)

## ES8 
    * Has a few more inclusions. We'll just go over the important ones.

1. `.padStart()`
2. `.padEnd()`
3. Commas at the end of params list is valid now.
4. `Object.values()`  and `Object.entries()`


