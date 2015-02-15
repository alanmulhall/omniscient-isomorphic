import express from 'express';
var router = express.Router();

import react from 'react';
import {DOM} from 'react';
var {a, br, div} = DOM;
import immutable from 'immutable';
import immstruct from 'immstruct';
import App from '../client/src/js/App';
import Contact from '../client/src/js/Contact';

var currentPage = () => Contact();
var app = express();

var structure = immstruct({
    greeting: 'Hello from the server',
    person: {
        name: 'alan'
    }
});

var component = react.renderToString(App({cursor: structure.cursor(), currentPage}));

router.get('/contact', function(req, res) {
  res.render('contact', {title: 'Express', component: component, env: app.get('env')});
});

export {router as contactRouter};
