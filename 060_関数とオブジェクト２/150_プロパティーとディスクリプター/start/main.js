'use strict';
// const obj = { prop: 0 };


const obj = {};
Object.defineProperty(obj, 'prop', {
  value: 0,
  // 設定変更を可能へ変更している
  writable: true
});

// writableがfalseだとpropの変更ができない
// ただし基本はエラーは出ない
obj.prop = 1;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);
