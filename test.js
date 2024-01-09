const sequelize = require('./app/database/sequelizeClient');
const User = require('./app/models/user');

(async () => {
    try {
        const users = await User.findAll();

        console.log(users);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
