const File = require('../models/File');
const Box = require('../models/Box');

class FileController {
    async store(req,res){
        const box = await Box.findById(req.params.id)

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });
        //add file in array using js
        box.files.push(file);

        await box.save();

        console.log(req.file);
        
        //TODO: reponse codes...
        return res.json(file);
        
    }
}


//put new to acess the methods of class box ...
module.exports = new  FileController();