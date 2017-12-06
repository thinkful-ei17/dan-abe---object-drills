'use strict';

const myObj = {
  foo: 'hello',
  bar: 2,
  fum: 'chocolate',
  quux: true,
  spam: 'thinkful',
};

for (let key in myObj){
console.log(key, myObj[key]);
}


