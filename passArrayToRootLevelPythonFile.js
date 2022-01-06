const { spawn } = require('child_process');

/*
 *
 *  This will pass an array to the method tryLooping(), in passMeAnArray at root directory.
 *  Make sure to use the proper single or double quotation marks!
 *  passMeAnArray looks like this:
 *
 *  def tryLooping(list):
 *    for i in list:
 *      print(i)
 *
 *
 *  For python, the -c argument requires a parameter specifying a command
 *  you would like the python interpreter to run
 *
 */


// const passingArrayToFunctionAtRootDirectory = spawn("python", ["-c", 'from passMeAnArray import *; tryLooping(["a","b","c"])']);


// Attempting to do this from another directory... these don't work...
// const passingArrayToFunctionAtRootDirectory = spawn("python", ["-c", 'pythonForNode/testingSys.py', ["a", "b", "c"]]);
// const passingArrayToFunctionAtRootDirectory = spawn("python", ["-c", 'import pythonForNode; testingSys.tryLooping(["a","b","c"])']);
// const passingArrayToFunctionAtRootDirectory = spawn("python", ["-c", 'from pythonForNode import *; testingSys.tryLooping(["a","b","c"])']);
// const passingArrayToFunctionAtRootDirectory = spawn("python", ["-c", 'from pythonForNode/testingSys import *; tryLooping(["a","b","c"])']);

// Tried setting up a file to handle gathering the methods from subdirectory, but did not work...
// const passingArrayToFunctionAtRootDirectory = spawn("python", ["-c", 'from pythonSysPath import *; tryLooping(["a","b","c"])']);
// const passingArrayToFunctionAtRootDirectory = spawn('python', ['-c', 'pythonSysPath.py', ['SOMETHING', 'ELSE']]);
// const passingArrayToFunctionAtRootDirectory = spawn('python', ['-c', 'import pythonSysPath; tryLooping(["SOMETHING", "ELSE"])']);


passingArrayToFunctionAtRootDirectory.stdout.on('data', function (data) {
  dataTotryLoopingMethod = data.toString();
});

passingArrayToFunctionAtRootDirectory.on('close', (code) => {
  console.log(dataTotryLoopingMethod) // prints a b c 
});




/*
 * Command line variations:
 * python -c 'from passMeAnArray import *; tryLooping()'
 * python -c 'from passMeAnArray import *; tryLooping("a")'
 * python -c 'from passMeAnArray import *; tryLooping(['a','b','c'])' // this does not work
 * python -c 'from passMeAnArray import *; tryLooping(["a","b","c"])' // but this does!!! It was a single/double quote error...
 *
 */



/*
 * Some Node to Python resources:
 *
 * https://stackoverflow.com/questions/62961891/pass-function-and-arguments-from-node-to-python-using-child-process
 * https://stackoverflow.com/questions/3987041/run-function-from-the-command-line/3987113#3987113
 *
 */