const { spawn } = require('child_process');

// This will pass the value 'SOMETHING' to pythonForNode/testing.py
const getPython = spawn('python', ['pythonForNode/testingSys.py', 'SOMETHING']);

getPython.stdout.on('data', function (data) {
  dataToSend = data.toString();
});

// This will 
getPython.on('close', (code) => {
  console.log('HIMOM?', dataToSend)
});