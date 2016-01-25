/* @flow */

type A = {
  Bs: Array<B>;
}

type B = {
  As: Array<A>;
}

function addBstoA(a: A, b: Array<B>): A /* typecheck works when return type is removed */ {
  b.forEach(b => {
    b.As.push(a);
    a.Bs.push(b);
  });
  return a;
}

export default function main() {
  const a: A = { Bs: [] };
  const b1: B = { As: [] };
  const b2: B = { As: [] };
  const c = 12;
  addBstoA(a, [ b1, b2 ]);
  console.log("a is ", a);
}
