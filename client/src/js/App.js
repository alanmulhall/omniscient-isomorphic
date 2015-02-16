import {DOM} from 'react';
const {div} = DOM;
import component from 'omniscient';

export default component(
    'App',
    (props) => {
        let contents = props.currentPage();

        return div(null,
            props.cursor.get('greeting'),
            div(null, contents)
        );
    }
);
