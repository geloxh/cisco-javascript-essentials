### Day 1 - Variables
`Variables` allow us to store such results, to modify them, or to feed them into subsequent operations.

## Name the Variables
Imagine variables as `containers` in which you can store certain information (such information will be called variable values). 

Each container must have its own name, by which we will be able to clearly indicate it.

In most programming languages, a variable must be declared before use, and JavaScript is no exception. Declaring a variable is simply `reserving` the name of the variable.

This way, we inform the program that in the further part of the execution, we will use this name to refer to our container, in order to retrieve a value from it, or save a value to it.

In JavaScript, variable names may consist of any sequence of letters (lower-case and upper-case), digits, underscore characters, and dollar signs, but they must not start with a digit.

The important thing is also that the JavaScript interpreter distinguishes between lower-case and upper-case letters, also in variable names, so names such as `test`, `Test`, or `TEST` will be treated as different.

![Alt text](../src/image_one.png)

## Declaring Variables
Usually, the `values` stored in the variable will be able to be modified during the execution of the program (they are "variables", after all).

 For the declarations, we use the keywords `var` or `let` for `variables` and `const` for `constants`. 

 ```javascript
var  height;
console.log(height);  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
```
> The first line is the variable declaration (we can see the var keyword). This declaration means that the word height will be treated as the name of the container for certain values.

 ```javascript
 let height;
 ```

 The declaration, like other JavaScript instructions, should end with a `semicolon` ";". 
 In the second line, we try to write out the value of this variable (that is, what is in the container) on the console. 
 
 Because we haven't put anything there yet, the result is undefined (the interpreter knows this variable, but it has no value yet – the value is undefined). In the next line, we try to print out the contents of the weight variable ... which we forgot to declare. This time, we will see `ReferenceError`. 

 The alternative to it is the keyword `let`. We use both keywords in the same way. Both are meant for declaring `variables`, and both can be found in different examples on the Internet or in books.

 ```javascript
 let height;
 console.log(height); // -> undefined
 ```

 Differences in the use of `var` and `let` is that `let` prevents us from declaring another `variable` with the same name (an error is generated). 
 Using var allows you to re-declare a `variable`, which can potentially lead to errors in the program execution.

```javascript
var height;
var height;
console.log(height); // -> undefined
```
The example above demonstrates the possibility of re-declaring a `variable` using the keyword `var`. In this situation, it will not cause an `error`, but in more complex programs a redeclaration, especially by accident, may no longer be without consequences. 

When declaring with `let`, the interpreter checks whether such a variable has already been declared, no matter if `let` or `var` is used in the previous declaration.

```javascript
let height;
let height; // -> Uncaught SyntaxError: Indetifier 'height' has already been declared
console.log(height);
```

So use `let` to declare variables, if only because you don't want to accidentally declare a variable again.