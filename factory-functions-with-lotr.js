function createCharacter(name, nickname, race, origin, attack, defense){
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function(){
            console.log(`${this.name} is a ${this.race} from ${this.origin}`);
        },
        evaluateFight: function(opponent){
            let x = this.attack - opponent.attack;
            let y = this.defense - opponent.defense;
            return `Your opponent takes ${x} damage and you receive ${ y > x ? 'no' : y } damage`;
        }
    }
}

const characters = [
createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6),
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit','The Shire', 2, 1),
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
createCharacter('Samwise Gamgee', 'sam', 'Hobbit', 'The Shire', 3, 1)
]

const aragorn = characters.find(c => c.nickname === 'aragorn');
aragorn.describe();

const hobbits = characters.filter(h => h.race === 'Hobbit');

const powerfulCharacters = characters.filter(p => p.attack > 5);
console.log(powerfulCharacters);

function Equip(character, weapon){
    character.weapon = weapon;
    character.describe = function(){console.log( `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`)};
}

Equip(aragorn, 'Anduril');
aragorn.describe();