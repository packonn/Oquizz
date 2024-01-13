class User {
    firstname;
    lastname;
    email;
    // ! propriété privée : inaccessible depuis l'extérieur de la classe
    #password;

    /**
     *
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} email
     * @param {string} password
     */
    constructor(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.#password = password;
    }

    /**
     * Accesseur permettant de lire le mot de passe privée
     *
     *! accesseur : permet de lire une propriété privée
     *! c'est une méthode préfixée avec le mot clé get
     */
    get password() {
        return this.#password;
    }

    /**
     * ! un mutateur qui permet de modifier la propriété privée password
     */
    set password(password) {
        this.#password = password;
    }

    /**
     * permet de lire le mot de passe
     * @returns {string} password
     *
     * ! ne pas confondre une méthode qui retourne une string et un accesseur qui retourne une propriété privée
     */
    getPassword() {
        return this.#password;
    }
}

// accesseurs et mutateurs : getters and setters
const user = new User('Laurent', 'oclock', 'laurent@oclock.io', 'password');
// ! Possible grâce au mutateur
user.password = 'nouveau mot de passe';
// ! On se sert de l'accesseur comme d'une propriété
console.log(user.password);

console.log(user.getPassword());
