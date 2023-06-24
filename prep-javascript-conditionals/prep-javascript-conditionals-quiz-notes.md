# prep-javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `strictly equal` mean?
  Strictly equal refers to the Comparison Operator ===
  The === Comparison Operator compares two values for equality in regard to their values and their data types.
  Ex.)

```javascript
const x = 5;
if (x === 5) {
  console.log('Both values are equal in value and data type.');
} else {
  console.log('The values are not equal in value and data type.');
}
```

- What is the logical **and** operator?
  Logical Operators are used to determine the logic between variables or values. These Operators Include : && (and), || (or), ! (not).
  Conditional (Ternary) Operators assign a value to a variable based on certain conditions(defined in your code).

```javascript
let wakeUpTime = hour <= 7 ? 'Great Job!' : 'Get Disciplined!';
```

- Can you name some comparison operators?
  Comparison Operators: == (equal to), === (equal to value and type), != (not equal), !== (not equal value or not equal type), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)
  Ex.)

```javascript
const age = '33';
if (age >= 18) {
  const message =
    "You have met the age requirements to apply for a driver's license.";
} else {
  const message2 =
    "You have not met the age requirements to apply for a driver's license.";
}
```

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
