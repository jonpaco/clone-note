//create back end apis that support getting, creating, and removing notes
//notes are to be stored in notebooks
'use strict';
var express = require('express');
var parser = require('body-parser');
//note routes
var notesRoutes = require('./api/notes');
var app = express();

//express middlewares
//start static server
app.use('/', express.static('public'));

//add json body parser in order to parse posts
app.use(parser.json());

//attatch router to server
app.use('/api', notesRoutes);

//autenticate users

//create notebooks routes
    //get notebook
    //post notesbook
    //put notebook
    //delete noteboook

//create database
    //create notebook schema
    //create note schema

//create front-end server
app.listen(3000, function(){
    console.log('Frontend Server Started');
});