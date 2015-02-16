import {DOM} from 'react';
const {a, button, br, div, p} = DOM;
import component from 'omniscient';

export default component(
  'Home',
  (props) => {
    let handleChangeGreeting = () => {
      props.cursor.update('greeting', () => 'A react application (cursor changed)');
    }

    return (
      div(null,
        'This is the home page',
        br(null),
        p(null,
          button({onClick: handleChangeGreeting}, 'change the greeting cursor')
        ),
        br(null),
        a({href: '/contact'}, 'contact page')
      )
    );
  }
);
