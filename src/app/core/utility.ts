export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

// @simpleDecorator
// @decoratorWithParam(11)
// @decoratorReplaceConstructor
// export class TestClass {
//   name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// const test = new TestClass('bla');
