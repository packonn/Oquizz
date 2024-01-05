const CoreModel = require('./CoreModel');

class User extends CoreModel {
    first_name;
    last_name;
    email;
    password;
    constructor(
        id,
        first_name,
        last_name,
        email,
        password,
        created_at,
        updated_at
    ) {
        super(id, created_at, updated_at);
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
}

module.exports = User;
