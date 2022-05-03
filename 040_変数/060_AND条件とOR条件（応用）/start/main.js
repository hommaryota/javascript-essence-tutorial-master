function hello(name) {
  // if (!name) {
  //   name = 'Tom';
  // }
  name = name || 'Tom';
  console.log('Hello ' + name);
}

hello('Bob')

hello();

let name = 'Bob';
// if (name) {
//   hello(name);
// }
name && hello(name);
