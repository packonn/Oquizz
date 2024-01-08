const CoreModel = require('./coreModel');

class User extends CoreModel {
    firstname;
    lastname;
    email;
    #password;

    constructor(obj) {
        super(obj);
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;

        if (!this.validateEmail(obj.email)) {
            throw new Error('Email is not valid');
        }
        this.email = obj.email;
        // * on se sert du mutateur comme d'un propriété
        this.password = obj.password;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    get password() {
        return this.#password;
    }
    // * mutateur : avec le préfixe set, on écrit une méthode qui permettra de modifier une propriété privée, on pourra se servir de cette méthode comme d'une propriété classique
    set password(password) {
        this.#password = password;
    }

    /**
     * https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript#46181
     * @param {string} emailString
     */
    validateEmail(emailString) {
        return String(emailString)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
}

module.exports = User;
