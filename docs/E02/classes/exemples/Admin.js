class User {
    firstname;
    lastname;
    email;
    password;

    constructor(firstname, lastname, email, password) {
        if (!firstname || firstname.length < 2) {
            throw new Error('Le prénom est invalide');
        }

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    // * Une méthode qui retourne une string formattée prénom + nom
    // * Une méthode : c'est une fonction qui s'appelle méthode dans un classe
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    greet() {
        console.log(`Bienvenue ${this.getFullName()}`);
    }
}

const user = new User('Laurent', 'oclock', 'laurent@oclock.io', 'password');
const user2 = new User(
    'lùkndfghlkndflùghkn',
    'oclock',
    'laurent@oclock.io',
    'password'
);

// user.greet();
// user2.greet();
// * L'héritage permet de réutiliser des modèles déjà définis et de modifier leur comportement
class Admin extends User {
    isAdmin = true;

    greet() {
        console.log('Bonjour Patron !');
    }
}

const admin = new Admin('admin', 'oclock', 'laurent@oclock.io', 'password');
console.log(admin instanceof User);
console.log(admin instanceof Admin);
console.log(admin);

admin.greet();
