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
let icons = [];

const categories = fs.readdirSync('./svg', { withFileTypes: true });

categories.forEach((category) => {
  if (category.isDirectory()) {
    const filesInCategory = fs.readdirSync(`./svg/${category.name}`, { withFileTypes: true });

    filesInCategory.forEach((file) => {
      const data = fs.readFileSync(`./svg/${category.name}/${file.name}`, 'utf8');
      // Remove unnecessary html tags
      var rawData = data
      .replace(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>`, '')
      .replace('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', '')
      .replace(/<rect.*>/gi, "\n")
      .replace('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">', '')
      .replace(`</svg>`, '')
      .replace(/\n|\r/g, "");

      icons.push({ name: file.name.replace('.svg', ''), keywords: [`${category.name}`], svg: rawData });
    });
}
});

// Remove duplicate icons and merge their keyword values
const output = Object.values(
  icons.reduce(
    (res, o) => ((res[o.name] ||= { ...o, keywords: [] }).keywords.push(o.keywords.toString()), res),
    {}
  )
);
icons = output;
// Create iconList.js file
let fileContent = `export const icons = ${JSON.stringify(icons, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/'/g, "\\'")
    .replace(/"/g, "'")
};`;
  
fs.writeFile('icons.js', fileContent, (err) => {
    if (err) throw err;
    console.log('File saved successfully!');
});
// Copy iconList.js file to each package
const frameworks = ['react', 'svelte', 'vue'];
frameworks.forEach(framework => {
    fs.copyFile('iconList.js', `../circum-icons-${framework}/src/iconList.js`, (err) => {
        if (err) throw err;
        console.log(`iconList.js was copied to circum-icons-${framework}/src/`);
    });
});