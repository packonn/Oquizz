const express = require('express');
const router = require('./app/routers');
const notFound = require('./app/middlewares/notFound');
const path = require('path');

require('dotenv').config();

const app = express();

app.set(`port`, process.env.PORT || 3000);
app.set(`baseUrl`, process.env.BASE_URL || `http://localhost`);
// Programmation EJS
app.set('view engine', 'ejs');
const viewsDirectory = path.join(__dirname, '/app/views');
app.set('views', viewsDirectory);
// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(notFound);

app.listen(process.env.PORT, () => {
    console.log(`Serveur run => ${app.get(`baseUrl`)}${app.get(`port`)}`);
});
