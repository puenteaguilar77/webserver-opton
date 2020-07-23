const express = require('express');
const app = express();
const hbs = require('hbs');
const colors = require('colors');

require('./hbs/helpers');

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs')






app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'optimus neo',

    });
});

app.get('/about', (req, res) => {

    res.render('about', {

    });

});

app.get('/data', (req, res) => {
    res.send('Hola Data')

});

app.listen(port, () => {
    console.log(colors.green(`escuchando peticiones en el puerto ${port}`));
});