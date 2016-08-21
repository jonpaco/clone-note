'use strict';
var express = require('express'); 
var noteRouter = express.Router();

//note routes
noteRouter.get('/note/:id?', function(req, res){
    //get notes route
    var id = req.params.id;
    if (id) {
        res.json({message: 'GET note id ' + id});
    } else {
        res.json({message: 'GET all notes'});
    }
});

noteRouter.put('/note/:id', function(req, res){
    //put notes routes
    var id = req.params.id;
    if (id) {
        res.json({message: 'PUT note id ' + id});
    } else {
       res.status(500).json({error: 'Id note defined.'});
    }
});

noteRouter.post('/note/:id', function(req, res){
    //post notes route
    var id = req.params.id;
    var note = req.body;
    if (id && note._id === id) {
        res.json({message: 'POST note id ' + id});
    } else {
        res.status(500).json({error: 'Id note defined.'});
    }
});

//delete notes route

//export routes
module.exports = noteRouter;