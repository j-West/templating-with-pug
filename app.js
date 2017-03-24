#!/usr/bin/env node
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
 res.render('index', {title: "Home"});
})

app.get('/about', (req, res) => {
 res.render('about', {title: "About"});
})

app.get('/inventory', (req, res) => {
  res.render('inventory', {title: "Inventory"});
})


app.listen(8080);
