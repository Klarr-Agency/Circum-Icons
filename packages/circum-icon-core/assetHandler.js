const fs = require('fs');
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
// Create an array with the name, keywords and the svg content
const categories = fs.readdirSync('./svg', {
    withFileTypes: true
});
let icons = [];
categories.map((category) => {
    if (category.isDirectory()) {
        const filesInCategory = fs.readdirSync(`./svg/${category.name}`, {
            withFileTypes: true
        });
        // Get each file from each category folder
        filesInCategory.map((file) => {
            fs.readFile(`./svg/${category.name}/${file.name}`, 'utf8', function (err,data) {
                if (err) return console.log(err);
                // TO DO clean up data before pushing to array
                icons.push({name: file.name.replace('.svg', ''), keywords:[`${category.name}`], svg: data});
                console.log(icons);
            }); 
        });
        //console.log(element.name)
        //console.log(categoryFolder)
    }
});

// Copy iconList.js file to each package
const frameworks = ['react', 'svelte', 'vue'];
frameworks.forEach(framework => {
    fs.copyFile('iconList.js', `../circum-icons-${framework}/src/iconList.js`, (err) => {
        if (err) throw err;
        console.log(`iconList.js was copied to circum-icons-${framework}/src/`);
    });
});