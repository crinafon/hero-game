class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false;
    }
    attacked(damage) {
        // Daca eroul are proprietatea "canfly" sunt 50% sanse sa evite damage-ul
        if (this.canFly) { //this.canFly=true
            let chance = Math.random();
            console.log(chance);
            if (chance > 0.5) {
                console.log(this.name + " flew away");
                damage = 0;
            }
        }
        // Daca eroul are proprietatea "shield" damage-ul este redus cu 20%
        if (this.shield) {
            damage *= 0.8;
            // Damage-ul scade cu 0.2
            console.log(this.name + " defends with a shield");
        }
        this.hp -= damage;
        console.log(this.name + " has been atacked. Hp reduced by " + damage + ". Hp remaining: " + this.hp + ".");
    }
};
class Dwarf extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.shield = true;
    }
    attack(otherHero) {
        let damage = 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}
class Sprite extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
    }
    attack(otherHero) {
        let damage = 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}
class Dragon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
        this.shield = true;
    }
    attack(otherHero) {
        let damage = 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}
class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0; //pentru a sti cui este randul si poate avea valori 0 sau 1;
    }
    performAttack() {
        if (this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }
    changeTurn() {
        this.turn = 1 - this.turn;
    }
    findWinner() {
        if (this.hero1.hp > 0) {
            console.log(this.hero1.name + " won with " + this.hero1.hp);
        } else if (this.hero2 > 0) {
            console.log(this.hero2.name + " won with " + this.hero2.hp);
        } else {
            console.log("No heroes left alive.");
        }
    }
    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while (this.hero1.hp > 0 && this.hero2.hp > 0);
        this.findWinner();
    }
}


let dwarf = new Dwarf("Fred", 100);
let sprite = new Sprite("Twilight", 100);
let dragon = new Dragon("Maya", 100);

let epicFight = new Fight(dragon, dwarf);
epicFight.go();

// 10.11.22 - butonul GO! afiseaza o alerta cu mesajul "Go to Dev Tool to read the codes"
let goBtn = document.querySelector(".go");
console.log(goBtn);

// goBtn.addEventListener("click", myAlert);

function myAlert() {
    alert("Go to Dev Tool to read the codes");
}
let startFight = document.querySelector(".main-button-fight");
console.log(startFight);

function newFight() {
    alert("Select your Hero!");
}
let starOver = document.querySelector(".main-button-restart");
console.log(startOver);

function startOver() {
    alert("You can now start again!");
    return ("Start again!");
}
const player = document.querySelector('.dwarf');
console.log(player);

// // console.log(dwarf.name);
// player.innerText = dwarf.name;

// const points = document.querySelector(".main-button-show")
// points.innerText = 'No heroes left alive!';

// let showPoints = document.querySelector(".main-button-show");
// console.log(showPoints);

// function show() {
//     alert(this. + " points.");
// }

// showPoints.addEventListener("click", show);