require('dotenv').config();
const path = require('node:path');
const express = require('express');
const expressSession = require('express-session');
const app = express();
const router = require('./app/routers');
const {
    notFound,
    devErrorHandler,
    prodErrorHandler,
} = require('./middlewares/errorHandlers');
// Moteur de rendu EJS
app.set('view engine', 'ejs');

// * pour récupérer les données d'un formulaire envoyées en poste
app.use(express.urlencoded({ extended: true }));

// ! On utilise path.join et __dirname pour mitiger une attaque ou le chemin de dossier serait compromis
const viewsDirectory = path.join(__dirname, '/app/views');
app.set('views', viewsDirectory);

// * les fichiers statiques (js, css, img)
app.use(express.static(path.join(__dirname, 'public')));

// * session init
const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1H
    },
};

app.use(expressSession(sessionConfig));

app.use(router);
// 404
app.use(notFound);
// * si on est en local pour le développement, on veut voir les détails des erreurs
if (app.get('env') === 'development') {
    app.use(devErrorHandler);
} else {
    // * en prod, on ne veut qu'un message d'erreur générique
    app.use(prodErrorHandler);
}

// * intégrer les variables d'environnement à l'application
app.set('port', process.env.PORT || 5000);
app.set('base_url', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('base_url')}:${app.get('port')}`);
});
