### Declarations and Strict Mode
`JavaScript` had some major changes introduced in 2009 and 2015. Most of these changes extended the language syntax with new elements, but some of them concerned only the operation of the `JavaScript` `interpreters`. Often it was about clarifying the `interpreters`' behavior in potentially erroneous situations, such as in cases of `variable` initialization without any prior `declaration`.

- Here is one `example` : -
```javascript
height = 180;
console.log(height); // -> 180
```

You can see that we’ve forgotten to declare the `variable` `height`. The original `JavaScript` syntax allowed for such negligence, and at the moment of initialization it made this `declaration` for us. It seems like quite a good solution, but unfortunately it can sometimes lead to `ambiguous` and potentially `erroneous` situations.

- Modify `Example` : -

```javascript
"use strict";

height = 180;  // -> Uncaught ReferenceError: height is not defined
console.log(height);
