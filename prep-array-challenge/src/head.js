/* exported head */
function head(array1) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  }
  return array1[0];
}

head(['foo', 'bar', 'baz']);
head([1, 2, 3, 4, 5]);
head([false, true, false, true]);
head([]);

function last(array1) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  }
  return array1[array1.length - 1];
}

last(['foo', 'bar', 'baz']);
last([1, 2, 3, 4, 5]);
last([false, true, false, true]);
last([]);

function tail(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = 1; i < length; i++) {
    array2[array2.length] = array1[i];
  }
  return array2;
}

tail(['foo', 'bar', 'baz']);
tail([1, 2, 3, 4, 5]);
tail([true, false, true, false]);
tail([]);

function initial(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = 0; i < length - 1; i++) {
    array2[array2.length] = array1[i];
  }
  return array2;
}

initial(['foo', 'bar', 'baz']);
initial([1, 2, 3, 4, 5]);
initial([true, false, true, false]);
initial([]);

function reverse(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = length - 1; i >= 0; i--) {
    array2[array2.length] = array1[i];
  }
  return array2;
}

reverse(['foo', 'bar', 'baz']);
reverse([1, 2, 3, 4, 5]);
reverse([true, false, true, false]);
reverse([]);

function compact(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = 0; i < length; i++) {
    if (array1[i]) {
      array2[array2.length] = array1[i];
    }
  }
  return array2;
}

compact([true, true, false, true]);
