const express = require('express')
const routes = express.Router();


routes.get('/teste' , (req,res) => {
    return res.send(' hello world neos');
}) 

module.exports = routes; 