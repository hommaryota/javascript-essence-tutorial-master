window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// bindの引数がthisの参照先に設定する
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim');
b();
