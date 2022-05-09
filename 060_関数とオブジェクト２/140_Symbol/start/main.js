const s = Symbol('hello');
const s2 = Symbol('hello');

console.log(typeof s);
console.log(s === s2);

const str = new String('Tom');
console.log(str);

String.prototype[s] = function () {
  return 'hello ' + this;
};
const tom = 'Tom';

tom[s]();
console.log(tom[s]());

// String.prototype[s2] = function () { };
