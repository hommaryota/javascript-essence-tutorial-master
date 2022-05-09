// コールバック関数の記述
function hello() {
  console.log('hello');
}

function bye() {
  console.log('bye');
}

function fn(cb) {
  cb();
}

fn(hello);
fn(bye);


// コールバック関数に引数がある場合
function hello1(name) {
  console.log('hello1 ' + name);
}

function bye1() {
  console.log('bye1');
}

function fn1(cb) {
  cb('Tom');
}

fn1(hello1);
fn1(bye1);
fn1(function (name) {
  console.log('hello' + name);
})

// よく使われる実例
setTimeout(hello1, 2000);
