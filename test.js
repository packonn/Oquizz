// const User = require('./app/models/user');
const Level = require('./app/models/level');
const User = require('./app/models/user');

(async () => {
    try {
        const users = await Level.findById(4);
        // await users.update({
        //     name: 'Débutant',
        // });

        await users.destroy();

        // console.log(users);
    } catch (error) {
        console.error(error.message);
    } finally {
        // ! dans tous les cas : erreur ou pas erreur, on exécute le code contenu dans finally
        process.exit();
    }
})();
