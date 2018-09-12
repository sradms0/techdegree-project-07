'use strict'

const express = require('express');
const router = express.Router();
const {projects} = require('./data.json');

// set index as root
router.get('/', (req, res) => res.render('index', {projects}));

// handle project route and possible errors
router.get('/project', (req, res) =>  res.redirect(`/project/${Math.floor(Math.random() * projects.length)}`));
router.get('/project/:id', (req, res) => {
    const {id} = req.params;
    console.log(typeof id);

    // check if there is a valid id, otherwise re-direct to set a random one
    if (isNaN(id) || id < 0 || id > projects.length - 1) return res.redirect('/project');


    const project = projects[parseInt(id)];
    res.render('project', {project});
});

// set about route
router.get('/about', (req, res) => res.render('about'));

// handle invalid routes:
router.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
},
(err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
    console.log(`${err.message} (${err.status})`);
});

module.exports = router;
