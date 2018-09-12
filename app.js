#!/usr/bin/env node

'use strict'

const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const routes = require('./routes');
app.use(routes);


app.listen(3000, () => console.log('Application running on localhost:3000'));
