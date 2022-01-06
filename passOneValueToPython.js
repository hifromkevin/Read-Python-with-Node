const { spawn } = require('child_process');

/*
 *
 *  This will pass the value 'SOMETHING' to pythonForNode/testingSys.py
 *    testingSyst.py contains: print("Hello from python" + ' ' + sys.argv[1])
 *
 */

const singularValueToFileInOtherDirectory = spawn('python', ['pythonForNode/testingSys.py', 'SOMETHING']);

singularValueToFileInOtherDirectory.stdout.on('data', function (data) {
  singleValueUsingPythonSys = data.toString();
});

singularValueToFileInOtherDirectory.on('close', (code) => {
  console.log('HIMOM?', singleValueUsingPythonSys) // returns: HIMOM? Hello from python SOMETHING
});