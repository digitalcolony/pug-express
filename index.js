const express = require("express");
const pug = require("pug");

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Pug Example',
        message: 'ExpressJS with Pug',
        name: 'Joe Sample',
        tacos: ['chicken', 'pork', 'beef', 'fish']
    })
});

app.listen(3000, () => console.log('Listening on port 3000'));