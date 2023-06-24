# prep-javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the five parts of a function definition?
  1.) The function keyword to declare a new function.
  2.) The function name(optional, if no name is given to the function it will be an anonymous function). This will come after the function keyword. This identifier will be used to invoke or call the function.
  3.) The parameters(unless function is created without any parameters) inside of the parenthesis after the function name. They must be seperated by commas if there are multiple parameters. These parameters will be defined by the arguments when the function is being invoked.
  4.) The function body which will be started with an opening curling bracket and ended with a closing curly bracket followed by a semi-colon. This will contain the block of code to perform the desired actions of the programmer.
  5.) The return statement(optional). This is inside of the function body. This dictates the value that will be returned when the function is invoked. The return statement will come after an expression is made in the function body. The return statement makes the function produce a value which can be used in our program. The return statement also prevents any more code inside of the function's code block from being run, so any code inside of your function's code block which is entered after the return statement will not be run.

```javascript
function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
```

- How do you call a function?
  You call a function by writing teh function's name followed by parenthesis. Inside of the parenthesis include the arguments, which are the values which will be assigned to the parameters.
  If the function does not have parameters, simply do not include anything inside of the parenthesis.
  As always, finish the expression with a semi-colon.

```javascript
sum(5, 27);
```

- What is the difference between a parameter and an argument?
  Parameters are declared when a function is defined.
  Arguments are passed to a function when the function is called.
  Parameters are essentially placeholders, which is basically like a variable that does not have a value assigned to it until the function is called and an argument is passed.
  Maybe think of the parameters as the identifiers(variable names) and the arguments as the values assigned to them.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
