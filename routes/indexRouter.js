import express from 'express';
let router = express.Router();

import react from 'react';
import App from '../client/src/js/App';
import Home from '../client/src/js/Home';
import structure from '../structure';

let app = express();

let currentPage = () => Home({cursor: structure.cursor()});

let component = react.renderToString(App({cursor: structure.cursor(), currentPage}));

router.get('/', (req, res) => {
  res.render('index', {title: 'Express', component: component, env: app.get('env')});
});

export default router;
