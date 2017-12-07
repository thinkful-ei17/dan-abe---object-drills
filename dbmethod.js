'use strict';

const Database = {
  store: {
    heroes: [
     { id: 1, name: 'Captain America', squad: 'Avengers' },
     { id: 2, name: 'Iron Man', squad: 'Avengers' },
     { id: 3, name: 'Spiderman', squad: 'Avengers' },
     { id: 4, name: 'Superman', squad: 'Justice League' },
     { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
     { id: 6, name: 'Aquaman', squad: 'Justice League' },
     { id: 7, name: 'Hulk', squad: 'Avengers' },
     ]
  },
  findOne: function (query) {
    for (let currentHero of this.store.heroes){
      // changing to true since the first value typically sent is an Id (per Mentor recommendation)
      let isFound = true;  
      for (let key in query){
        if (currentHero[key] !== query[key]) {
          isFound = false;
          break; // This is added because if a key doesn't match we shouldnt need to check other keys 
        }
      }
      if (isFound === false) continue; // This is the opposite of break and we will continue to search through if not found.
      return currentHero;
    }
    return null; // We looped through the heroes array and didn't find the hero.
  }
};


let myHero = Database.findOne({ id: 5, squad: 'Justice League' });
console.log(myHero);