// Declarations and Strict Mode
/* Example */
age = 27; // neglecting to declare variable
console.log(age); // -> 27

/* modify example */
"use strict";

age = 27;
console.log(age); // Uncaught ReferenceError: assignment to undeclared variable age

