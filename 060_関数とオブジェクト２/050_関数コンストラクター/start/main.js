// function fn() {
//   let d = 1;
//   const fn1 = new Function('a','b','return a+ b')
// }

// // 関数コンストラクタでの記述
// const fn1 = new Function('a', 'b', 'return a + b');

// // Functionを関数で記述場合
// // function fn(a, b) {
// //   return a + b;
// // }

// const result = fn1(1, 2);
// console.log(result);

// function fn2(a, b) {
//   return a + b;
// }
// console.log(fn2(1,2));


// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User('jack');
// let test = new User('test');

// alert(user.name);
// alert(user.isAdmin);

// alert(test.name)
let d = 0;
function fn() {
  let d = 1;
  const fn1 = new Function('a', 'b', 'return a + b * d');
  return fn1;
}
const f = fn();
const result = f(1, 2);

console.log(result);

function fn2(a,b) {
  return a + b;
}


console.log(fn2 instanceof Function);

const obj = new function () {
  this.a = 0;
}
const fn3 = new Function('this.a = 0;');
const obj3 = new fn3();
console.log(obj);
console.log(obj3);
