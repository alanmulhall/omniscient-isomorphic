// Based on
// https://github.com/seanhess/personal-timeline/blob/master/app/index.jsx
require('6to5/polyfill');

import omniscient from 'omniscient';
omniscient.debug();

import react from 'react';
import {DOM} from 'react';
const {a, br, div} = DOM;
import App from './App';
import Home from './Home';
import Contact from './Contact';
import page from 'page';
import structure from '../../../structure';

// Make React DevTools work
window.React = react;

let currentPage = null;

structure.on('next-animation-frame', render);

require('file?name=index.html!../index.html');

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
