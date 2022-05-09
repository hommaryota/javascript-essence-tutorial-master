// function F(a, b) {
//   this.a = a;
//   this.b = b;
//   return {a: 1};
// }

// F.prototype.c = function () { };

// function newOpe(C, ...args) {
//   const _this = Object.create(C.prototype);
//   const result = C.apply(_this, args);
//   if (typeof result === "object" && result !== null) {
//     return result;
//   }
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance);

function F(a, b) {
  this.a = a;
  this.b = b;
  return {};
}

F.prototype.c = function () { };

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);

  const result = C.apply(_this, args);
  if (typeof result === "object" && result !== null) {
    return result;
  }

  console.log(result);
  console.log(_this);
  console.log(args);
  console.log(C);

  return _this;
}

const instance = newOpe(F,1,2,5);
console.log(instance);
