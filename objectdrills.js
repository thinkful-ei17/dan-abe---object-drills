'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 2,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  };
}
console.log(createMyObject());

const newObj = createMyObject();

function updateObject(obj){
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

console.log(updateObject(newObj));
