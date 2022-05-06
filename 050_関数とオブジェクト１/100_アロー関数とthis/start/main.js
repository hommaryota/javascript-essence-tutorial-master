window.name = 'John';

const a = () => console.log('bye ' + this.name);

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        const a = () => console.log('bye ' + this.name);
        a();
    }
}
person.hello();


// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: () => {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello();

//  アロー関数の場合は変数の宣言が行われているレキシカルスコープがthisの値なる

function b() {
    const a = () => console.log('Bye ' + this.name);
    a();
}

b();
