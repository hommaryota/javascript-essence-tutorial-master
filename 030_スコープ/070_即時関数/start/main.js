// function a(){
//   console.log('called');
// }
// a();

// (function () {
//   console.log('called');
// })();


// let b = (1 + 2)* 3;
// console.log(b);

// let d = (function () {
//   console.log('test');
//   return 0;
// })();
// console.log(d);

let c = (function () {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn(){
    console.log('private');
  }

  function publicValFn() {
    console.log('public function is called: ' + privateVal++);
  }

  return {
    publicVal: publicVal,
    publicValFn: publicValFn
  }
})()

c.publicValFn();
c.publicValFn();
c.publicValFn();

console.log(c.publicVal);
