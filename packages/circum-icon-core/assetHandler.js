const exec = require('child_process').exec;

// Remove space in name and replaced it by underscore
exec("cd ../../svg/ && for file in *; do mv \"$file\" `echo $file | tr ' ' '_'` ; done",
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
// Make letters in svg file name lowercase
exec("cd ../../svg/ && for i in $( ls | grep [A-Z] ); do mv -f $i `echo $i | tr 'A-Z' 'a-z'`; done",
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
// Remove unnecessery tags and attributes from the svgs

// Add icons in the Array of iconList

// Copy iconList.js file to each package