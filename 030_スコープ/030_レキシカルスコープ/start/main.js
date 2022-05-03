let a = 2;

function fn1() {
  let b = 1;
  function fn2() {
    let c = 3;
    console.log(b);
  }
  fn2();
}

fn1();

// 関数の外だと、fn1内で宣言したbは使用できない
// function fn2() {
//   let c = 3;
//   console.log(b);
// }
// fn2();
