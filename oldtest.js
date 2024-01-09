// const User = require('./app/models/user');
const Level = require('./app/oldModels/level');
const User = require('./app/oldModels/user');

(async () => {
    try {
        const users = await User.findById(1);
    } catch (error) {
        console.error(error.message);
    } finally {
        // ! dans tous les cas : erreur ou pas erreur, on exécute le code contenu dans finally
        process.exit();
    }
})();
