function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = { name: 'Tim'}

const b = a.bind(tim);

b();

a.apply(tim,['tim','bob']); // 第二引数以下を配列で渡す
a.call(tim, 'Tim'); // 第二引数以下を関数の引数を設定できる

const array = [1, 2, 3, 4, 5];

const result = Math.max.apply(null, array)
console.log(result);
