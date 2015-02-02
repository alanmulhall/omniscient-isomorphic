import {DOM} from 'react';
var {div} = DOM;
import component from 'omniscient';
//import Header from './Header';
//import Footer from './Footer';

export default component(
    'App',
    (props) => {
        return div(null, 'This is the App!');
    }
);
