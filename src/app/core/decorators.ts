export function simpleDecorator(target: Function) {
  console.log('the simpliest decoration');
}
export function decoratorWithParam(age: number) {
  return function (target: Function) {
    const element = document.getElementById('one')
    if(element){
      element.innerHTML = `Here goes param ${age}`
    } else{
      console.log('Element no found')
    }
  }
}
export function decoratorReplaceConstructor<TFunction extends Function>(target: TFunction): TFunction {
  let newConstructor: Function = function () {
    console.log('Creating new instance');
  }
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <TFunction>newConstructor;
}

export function addProperty<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}
