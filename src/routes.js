const express = require('express')
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

const info = {
    "name":"rocket-back",
    "version": "1.0",
    "Stack": "nodejs , express.js ,mongodb (mongoose)",
    "Dev": "Fredd Bezerra - fredd@neosdev.com.br",
}

routes.get('/' , (req,res) => {
    return res.json(info);
})


routes.post("/boxes" , BoxController.store);
routes.get("/boxes/:id" , BoxController.show);


routes.post("/boxes/:id/files" , multer(multerConfig).single('file') ,FileController.store);


module.exports = routes; 