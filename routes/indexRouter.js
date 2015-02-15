import express from 'express';
var router = express.Router();

import react from 'react';
import {DOM} from 'react';
var {a, br, div} = DOM;
import immutable from 'immutable';
import immstruct from 'immstruct';
import App from '../client/src/js/App';
import Home from '../client/src/js/Home';

var currentPage = () => Home();
var app = express();

var structure = immstruct({
    greeting: 'A react application',
    person: {
        name: 'alan'
    }
});

var component = react.renderToString(App({cursor: structure.cursor(), currentPage}));

router.get('/', (req, res) => {
  res.render('index', {title: 'Express', component: component, env: app.get('env')});
});

export {router as indexRouter};
