// * Objet litéral
const user = {
    firstname: 'Laurent',
    lastname: 'Laurent',
    email: 'lorenzo@me.com',
    password: 'ùljndsfgn',
};

const user2 = {
    firstname: 'Laurent',
    email: 'lorenzo@me.com',
};

// console.log(user);
// console.log(user2);

function UserFactory(firstname, lastname, email, password) {
    return {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    };
}

const user3 = new UserFactory(
    'Laurent',
    'Laurent',
    'laurent@oclock.io',
    'password'
);

// console.log(user3);

const user4 = new UserFactory('Laurent', 'Laurent', '', 'password');

// console.log(user4);

// * syntaxe de base pour créer une classe
class User {
    // * liste des propriétés qui définissent l'objet créé par la classe
    firstname;
    lastname;
    email;
    password;

    constructor(firstname, lastname, email, password) {
        // * le firstname de gauche représente la propriété de la classe, le firstname de droite est celui qui arrive par le constructeur
        this.firstname = firstname;
        // * Le mot clé this représent l'instance courante d'une classe
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        console.log(this);
    }
}
// * Un objet créé à partir d'une classe est une instance de cette classe
// * On instancie la classe
const user5 = new User('Laurent', 'oclock', 'laurent@oclock.io', 'password');
const user6 = new User('Mickey', 'oclock', 'laurent@oclock.io', 'password');
// * instanceof permet de vérifier si un objet est l'instance d'une classe donnée
console.log(user5 instanceof User);
// console.log(user5);
// console.log(user6);
