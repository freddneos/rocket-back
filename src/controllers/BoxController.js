const Box = require('../models/Box');

class BoxController {
    async store(req,res){

        const box = await Box.create({title: req.body.title});

        //TODO: reponse codes...
        return res.json(box);
        
    }
}


//put new to acess the methods of class box ...
module.exports = new  BoxController();