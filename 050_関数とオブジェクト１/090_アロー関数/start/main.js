// 通常の関数式
function a(name) {
  return 'hello ' + name;
}

// アロー関数に変換
const b = name => 'hello ' + name;

console.log(b('Tom'));

const c = (name, age) => {
  return `${name}は${age}歳です`
};

console.log(c('tom',30));
