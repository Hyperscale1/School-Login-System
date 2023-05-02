const config = require('../config');
const nodegui = require('@nodegui/nodegui');
console.log(`\x1b[31mStarted Application...\x1b[0m`);

// Path: src/index.js
// Compare this snippet from index.js:
const win = new nodegui.QMainWindow();
win.setWindowTitle('Hello World');
win.resize(400, 200);
win.show();

