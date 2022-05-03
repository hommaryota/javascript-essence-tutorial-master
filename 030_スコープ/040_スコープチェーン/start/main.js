// コンソールに呼び出されるのは3
// let a = 2;
// function fn1() {
//     let a = 1;
//     function fn2() {
//         let a = 3;
//         console.log(a);
//     }
//     fn2();
// }
// fn1();


// グローバルスコープはスクリプトスコープよりも外側にある
// let a = 2;
// window.a = 4;
// function fn1() {
//     function fn2() {
//         console.log(a);
//     }
//     fn2();
// }
// fn1();

// グローバルスコープはスクリプトスコープよりも外側にある
let a = 2;
window.a = 4;
function fn1() {
    function fn2() {
        console.log(a);
        let a = 3;
    }
    fn2();
}
fn1();
