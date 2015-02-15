import {DOM} from 'react';
var {a, br, div} = DOM;
import component from 'omniscient';

export default component(
    'Home',
    (props) => {
        return (
            div(null,
                'This is the home page',
                br(null),
                a({href: '/contact'}, 'contact page')
            )
        );
    }
);
