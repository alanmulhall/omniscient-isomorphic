import {DOM} from 'react';
const {div, h1} = DOM;
import component from 'omniscient';

export default component(
  'App',
  (props) => {
    let contents = props.currentPage();

    return div(null,
      h1(null, props.cursor.get('greeting')),
      div(null, contents)
    );
  }
);
