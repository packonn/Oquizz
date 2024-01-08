// const User = require('./app/models/user');
const Level = require('./app/models/level');
const User = require('./app/models/user');

(async () => {
    try {
        const users = await User.findById(9);
        users.destroy();
        console.log(users);
    } catch (error) {
        console.error(error.message);
    } finally {
        // ! dans tous les cas : erreur ou pas erreur, on exécute le code contenu dans finally
        process.exit();
    }
})();
