const out = document.getElementById('out');

const getLog = m => out.textContent += m;
getLog('Yo!');
const
  {spawn} = require( 'child_process' ),
  uname = spawn( 'uname', [ '-a' ] );

  uname.stdout.on( 'data', 
   data => {getLog(`stdout:${data}`);});
  uname.stderr.on( 'data',
   data => {getLog(`stderr:${data}`);});

  uname.on( 'close',
   code => {getLog(`exit code:gv${code}`);});
