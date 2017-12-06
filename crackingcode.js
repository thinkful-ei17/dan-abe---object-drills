'use strict';
const message = 'craft block argon meter bells brown croon droop';
const cypher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(message) {
  const messageSplit = message.split(' ');
  let decodedMsg = '';

  for(let i = 0; i < messageSplit.length; i++){
    if (cypher.hasOwnProperty(messageSplit[i][0])) 
      decodedMsg += messageSplit[i][cypher[messageSplit[i][0]]-1];
    else (decodedMsg += ' ' );
  }
  return decodedMsg;    
}

console.log(decode(message));


