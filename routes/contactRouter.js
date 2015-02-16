import express from 'express';
let router = express.Router();

import react from 'react';
import {DOM} from 'react';
const {a, br, div} = DOM;
import immutable from 'immutable';
import immstruct from 'immstruct';
import App from '../client/src/js/App';
import Contact from '../client/src/js/Contact';

let app = express();

let structure = immstruct({
  greeting: 'A react application',
  person: {
    name: 'alan'
  }
});

let currentPage = () => Contact({cursor: structure.cursor(['person', 'name'])});

let component = react.renderToString(App({cursor: structure.cursor(), currentPage}));

router.get('/', (req, res) => {
  res.render('contact', {title: 'Express', component: component, env: app.get('env')});
});

export default router;
