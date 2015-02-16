import {DOM} from 'react';
const {a, br, div} = DOM;
import component from 'omniscient';

export default component(
  'Contact',
  (props) => {
    return (
      div(null,
        `This is the contact page created by ${props.cursor.deref()}`,
        br(null),
        a({href: '/'}, 'go home')
      )
    );
  }
);
