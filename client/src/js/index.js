require('6to5/polyfill');

//if (process.env.NODE_ENV !== 'production') {
import omniscient from 'omniscient';
omniscient.debug();
//}

import react from 'react';
import immutable from 'immutable';
import immstruct from 'immstruct';
import App from './App';
import page from 'page';

// Make React DevTools work
window.React = react;

// Include styles, html
require('file?name=index.html!../index.html');

var structure = immstruct({
    greeting: 'Hello World!',
    person: {
        name: 'alan'
    }
});

// Routes
page('/', (ctx) => {
    return render();
});

page('/contact', (ctx) => {
    return render();
});

page();

// Main render cycle
function render() {
    react.render(App(structure.cursor()), document.getElementById('app'));
}
