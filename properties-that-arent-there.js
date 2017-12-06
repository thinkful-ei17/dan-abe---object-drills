'use strict';

const people = [
  {
    name: 'John',
    jobTitle: 'Welder',
    boss: 'Bob',
  },
  {
    name: 'Mikey',
    jobTitle: 'Dancer',
    boss: 'Linda',
  },
  {
    name: 'Linda',
    jobTitle: 'Teacher',
    boss: 'Bob',
  },
  {
    name: 'Tina',
    jobTitle: 'Student',
    boss: 'Linda',
  },
  {
    name: 'Bob',
    'jobTitle': 'Owner'
  }
];

people.forEach(person => console.log(`${person.jobTitle} ${person.name} ${(person.hasOwnProperty('boss') ?  `reports to ${person.boss}.` : `doesn\'t report to anybody.`)}`)); 
