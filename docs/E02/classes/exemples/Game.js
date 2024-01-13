// * Exo surprise :)

// TODO : faire une classe Personnage, une classe Chevalier et une classe Vampire : utiliser l'héritage
// * Il doit y avoir une méthode attack(), et une méthode defend()

// * Quand un personnage attaque, l'adversaire voit ses points de vie diminuer
// * chaque personnage a un état : vivant ou mort-vivant ou mort.

// class Personnage {
//     pointsDeVie = 200;
//     etat = 'vivant';

//     attack(adversaire) {
//         adversaire.pointsDeVie -= 25;

//         if (adversaire.pointsDeVie < 0) {
//             adversaire.etat = 'mort';
//         }
//     }

//     defend() {
//         console.log('Annulation des dégâts');
//     }
// }

// class Chevalier extends Personnage {}

// class Vampire extends Personnage {
//     etat = 'mort-vivant';
// }

// const chevalier = new Chevalier();
// const vampire = new Vampire();

// chevalier.attack(vampire);

// * JB
// class Personnage {
//     name;
//     pv;
//     state;

//     constructor(name, pv, state) {
//         this.name = name;
//         this.pv = pv;
//         this.state = state;
//     }
//     changeState() {
//         this.state = 'dead';
//     }
// }

// class Chevalier extends Personnage {
//     capacite;
//     constructor(name, pv, state, capacite) {
//         super(name, pv, state);
//         this.capacite = capacite;
//     }
//     attack() {
//         force: 10;
//     }
// }
// class Vampire extends Personnage {
//     capacite;
//     constructor(name, pv, state, capacite) {
//         super(name, pv, state);
//         this.capacite = capacite;
//     }
//     attack() {
//         force: 12;
//     }
// }
// const vampire = new Vampire('Laurent', 100, 'vivant', 'regeneration');
// const chevalier = new Chevalier('Ringo', 120, 'vivant', 'reduit les degats');

// console.log(vampire);

// / DM
// class Personnage {
//     pdv = 100;
//     etat = 'vivant';
//     constructor(pdv, etat) {
//         this.pdv = pdv;
//         this.etat = etat;
//     }

//     attack(adversaire) {
//         if (adversaire.etat === 'vivant') {
//             adversaire.pointsDeVie -= 10;
//             if (adversaire.pointsDeVie <= 0) {
//                 adversaire.etat = 'mort-vivant';
//             }
//         }
//     }

//     defend() {
//         // RIEN  =P
//     }
// }

// class Chevalier extends Personnage {
//     constructor(pdv, etat) {
//         super(pdv, etat);
//     }

//     defend() {
//         super.defend();
//     }

//     attack(adversaire) {
//         super.attack(adversaire);
//     }
// }

// class Vampire extends Personnage {
//     constructor(pdv, etat) {
//         super(pdv, etat);
//     }

//     attack(adversaire) {
//         super.attack(adversaire);
//     }

//     defend() {
//         super.defend;
//     }
// }

// GD
// class Personnage {
//     firstname;
//     lastname;
//     pointsDeVie;

//     constructor(firstname, lastname, pointsDeVie) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.pointsDeVie = pointsDeVie;
//     }

//     attaquer(degats) {
//         this.pointsDeVie = this.pointsDeVie - degats;
//         console.log(`Le personnage a subi ${degats} points de dégâts.`);
//     }

//     defendre() {
//         console.log(`Le personnage a défendu.`);
//     }
// }

// class Chevalier extends Personnage {
//     constructor(pointsDeVie) {
//         super(pointsDeVie);
//     }
// }

// class Vampire extends Personnage {
//     constructor(pointsDeVie) {
//         super(pointsDeVie);
//     }
// }

// FP
// class Personnage {
//     attack;
//     defense;
//     hp;
//     state = 'vivant';

//     constructor(attack, defense, hp) {
//         this.attack = attack;
//         this.defense = defense;
//         this.hp = hp;
//     }
// }

// class Chevalier extends Personnage {
//     constructor(attack, defense, hp) {
//         super(attack, defense, hp);
//     }
// }

// class Vampire extends Personnage {
//     state = 'mort-vivant';
//     constructor(attack, defense, hp) {
//         super(attack, defense, hp);
//     }
// }

// const chevalier = new Chevalier(5, 10, 100);
// const vampire = new Vampire(7, 8, 50);

// BD
// class Personnage {
//     constructor(name, life, strength) {
//         this.name = name;
//         this.life = life;
//         this.strength = strength;
//     }

//     attack() {
//         console.log(`${this.name} attaque avec une force de ${this.strengh}`);
//     }

//     defense() {
//         console.log(`${this.name} se défend avec ${this.strength} de PV`);
//     }
// }

// class Vampire extends Personnage {
//     constructor(name, life, strength, lifesteal) {
//         super(name, life, strength);
//         this.lifesteal = lifesteal;
//     }
// }
// class Knight extends Personnage {
//     constructor(name, life, strength, lifesteal) {
//         super(name, life, strength);
//         this.lifesteal = lifesteal;
//     }
// }

// let vampire = new Vampire('Vladimir', 100, 100, 25);
// let knigth = new Knight('Garen', 100, 100, 35);
