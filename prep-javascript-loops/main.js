// create your loops here.
function whileLoop1() {
  let counter1 = 0;
  const array1 = [];
  while (counter1 < 10) {
    array1.push(counter1);
    counter1++;
  }
  return array1;
}
console.log('whileLoop1 output: ', whileLoop1());

function whileLoop2() {
  let counter1 = 0;
  const array1 = [];
  while (counter1 < 20) {
    array1.push(counter1);
    counter1 += 2;
  }
  return array1;
}
console.log('whileLoop2 output: ', whileLoop2());

function forLoop1() {
  const array1 = [];
  for (let i = 0; i < 10; i++) {
    array1.push(i);
  }
  return array1;
}
console.log('forLoop1 output: ', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
  return 'Warning, Danger: Explosion incoming!';
}
console.log(forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array1 = [];
  for (const prop in object) {
    array1.push(prop);
  }
  return array1;
}
console.log(forInLoop1(object));

function forInLoop2(object) {
  const array1 = [];
  for (const key in object) {
    array1.push(object[key]);
  }
  return array1;
}
console.log(forInLoop2(object));
