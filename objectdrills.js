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