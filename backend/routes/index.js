const express = require("express");
const db = require('../database/models/index.js')

const router = express.Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

router.get('/users/:id', (req, res) => {
    db.User.findByPk(req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(err => console.log(err));
});

router.get('/sneakers', (req, res) => {
    db.Sneaker.findAll({where: {rented: false}})
    .then(sneakers => {
        res.json(sneakers);

    })
    .catch(err => console.log(err));
});

router.post('/search-sneakers', (req, res) => {
    sneaks.getProducts(req.body.sneakerName, 10, function(err, products){
        productsList = [];
        for (let i = 0; i < products.length; i++){
            productsList.push({label: products[i].shoeName, brandName: products[i].brand, imageURL: products[i].thumbnail, colorway: products[i].colorway })
        }
        res.json(productsList);
    })
});

router.post('/create-posting', (req, res) => {
    db.Sneaker.create({ 
        name: req.body.name,
        brand: req.body.brand,
        colorway: req.body.colorway,
        location: req.body.location,
        releaseDate: req.body.releaseDate,
        size: req.body.size,
        rate: req.body.rate,
        description: req.body.description,
        listedBy: req.body.listedBy,
        rentedBy: req.body.rentedBy,
        imageURL: req.body.imageURL
    });
});

router.post('/create-user', (req, res) => {
    db.User.create({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        res.json(user)
    })
});

router.post('/sign-in', (req, res) => {
    console.log(req)
    db.User.findAll({ 
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(err => console.log(err));
});

router.post('/rent-sneaker', (req, res) => {
    db.Sneaker.findByPk(req.body.sneakerID)
    .then(sneaker => {
        sneaker.rentedBy = req.body.userID;
        sneaker.rented = true;
        sneaker.save()
    })
    .catch(err => console.log(err));
});
  

router.get('/sneakers/:id', (req, res) => {
    db.Sneaker.findByPk(req.params.id)
    .then(sneaker => {
        res.json(sneaker);
    })
    .catch(err => console.log(err));
});


router.get('/user-listings/:id', (req, res) => {
    db.Sneaker.findAll({ 
        where: {
            listedBy: req.params.id,
        }
    })
    .then(sneakers => {
        res.json(sneakers);
          })
    .catch(err => console.log(err));
});


router.get('/user-rentals/:id', (req, res) => {
    db.Sneaker.findAll({ 
        where: {
            rentedBy: req.params.id,
        }
    })
    .then(sneakers => {
        res.json(sneakers);
  })
    .catch(err => console.log(err));
});

module.exports = router;
