//For some reason this needs to run in order for electron-rebuild to succeed
//https://github.com/electron/electron-rebuild/issues/81#issuecomment-233520333
fs = require('fs');
fs.unlink( 'node_modules\\nslog\\build\\Release\\nslog.node' );
