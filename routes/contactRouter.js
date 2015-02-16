import express from 'express';
let router = express.Router();

import react from 'react';
import App from '../client/src/js/App';
import Contact from '../client/src/js/Contact';
import structure from '../structure';

let app = express();

let currentPage = () => Contact({cursor: structure.cursor(['person', 'name'])});

let component = react.renderToString(App({cursor: structure.cursor(), currentPage}));

router.get('/', (req, res) => {
  res.render('contact', {title: 'Express', component: component, env: app.get('env')});
});

export default router;
