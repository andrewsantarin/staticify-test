import open from 'open';
import waitOn from 'wait-on';

import { url, port } from '../src/env';

const PORT = port();
const URL = url(PORT);

open(URL);

// waitOn({
//   delay: 1000,
//   resources: [
//     URL
//   ],
// })
//   .then(() => {
//     console.log(`Opening ${URL} on your default browser...`);
//     console.log('');
//     console.log('');

//     open(URL);
//   })
//   .catch((error) => {
//     console.error('Unable to open the default browser. Here\'s why...');
//     console.error(error);
//   });
