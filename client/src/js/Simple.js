import {DOM} from 'react';
var {div} = DOM;
import component from 'omniscient';

export default component(
    'Simple',
    (props) => {
        return (
            div(null,
                'This is a simple component'
            )
        );
    }
);
