function incrementFactory() { //関数をincrementFactoryを作成
  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment; //incrementFactoryの実行結果としてincrement関数を返す
}

const test = incrementFactory(); //incrementFactory()を実行すると帰ってくるのはincrement関数
test(); //testの中はincrement関数が入ってる それを()で実行すると、incrementFactoryの中のincrement関数だけを実行できる
test();
test();

// function fn1() {

//   function fn2() {
//     console.log(111);
//   }

//   return fn2;
// }
// const go = fn1();
// go();
