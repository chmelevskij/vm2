if (parseInt(process.versions.node.split('.')[0]) < 6) throw new Error('vm2 requires Node.js version 6 or newer.');

import main from './lib/main.mjs';
export default main;
