// Based on
// https://github.com/seanhess/personal-timeline/blob/master/app/index.jsx
require('6to5/polyfill');

//if (process.env.NODE_ENV !== 'production') {
import omniscient from 'omniscient';
omniscient.debug();
//}

import react from 'react';
import {DOM} from 'react';
var {a, br, div} = DOM;
import immutable from 'immutable';
import immstruct from 'immstruct';
import App from './App';
import Home from './Home';
import Contact from './Contact';
import page from 'page';

// Make React DevTools work
window.React = react;

var currentPage = null;

var structure = immstruct({
    greeting: 'Hello World!',
    person: {
        name: 'alan'
    }
});

function route(f) {
  return (ctx) => {
    // this function is called every time the url changes
    currentPage = f(ctx);
    render();
  }
}

// Routes
page('/', route((ctx) => () => Home({cursor: structure.cursor()})));
page('/contact', route((ctx) => () => Contact({cursor: structure.cursor(['person', 'name'])})));
page();

// Main render cycle
function render() {
    if (!currentPage) {
        return;
    }

    react.render(App({cursor: structure.cursor(), currentPage: currentPage}), document.getElementById('app'));
}
