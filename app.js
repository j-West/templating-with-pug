#!/usr/bin/env node
const express = require('express');
const app = express();

const bakedGoods = [
                    {
                     name: "Mystery Muffin",
                     price: "$1.50"
                    },
                    {
                    name: "Banana Beer Baked Bagel",
                    price: "$4.75"
                    },
                    {
                    name: "Baked creol Bread",
                    price: "$2.25"
                    },
                    {
                    name: "Baked Apple",
                    price: "$.99"
                    },
                    {
                    name: "Tambo's Special Toast",
                    price: "$3.50"
                    }
                   ];

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
 res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
});

app.get('/inventory', (req, res) => {
  res.render('inventory', {title: 'Inventory', products: bakedGoods });

});


app.listen(8080);
