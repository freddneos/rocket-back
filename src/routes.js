const express = require('express')
const routes = express.Router();

const BoxController = require('./controllers/BoxController');




routes.get('/teste' , (req,res) => {
    return res.send(' hello world neos');
})


routes.post("/boxes" , BoxController.store);

module.exports = routes; 