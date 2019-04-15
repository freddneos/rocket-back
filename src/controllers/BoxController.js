const Box = require('../models/Box');

class BoxController {
    async store(req, res) {

        const box = await Box.create({ title: req.body.title });

        //TODO: reponse codes...
        return res.json(box);

    }
    async show(req, res) {
        //populate have a lot of methods to sort result and add child 
        const box = await Box.findById(req.params.id).populate({
            path: "files",
            options: { sort: { createdAt: -1 } }
        });
        return res.json(box);
    }
}


//put new to acess the methods of class box ...
module.exports = new BoxController();