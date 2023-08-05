const fs = require('fs');
const iconStyles = ['solid', 'outline'];

// Create an array with the name, keywords and the svg content
function createDataForIconsArray() {
    iconStyles.forEach((style) => {
        let icons = [];
        const categories = fs.readdirSync(`../../svg/${style}`, { withFileTypes: true });

        categories.forEach((category) => {
            if (category.isDirectory()) {
                const filesInCategory = fs.readdirSync(`../../svg/${style}/${category.name}`, { withFileTypes: true });

                filesInCategory.forEach((file) => {
                    const data = fs.readFileSync(`../../svg/${style}/${category.name}/${file.name}`, 'utf8');
                    // Remove unnecessary html tags
                    var rawData = data
                        .replace(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>`, '')
                        .replace('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', '')
                        .replace(/<svg.*>/gi, "\n")
                        .replace(/<rect\s+id="[^"]*"\s+x="[^"]*"\s+y="[^"]*"\s+width="24"\s+height="24"\s+style="fill:none;"\s*\/?>/gi, "")
                        .replace(/<rect\s+id="[^"]*"\s+serif:id="[^"]*"\s+x="[^"]*"\s+y="[^"]*"\s+width="24"\s+height="24"\s+style="fill:none;"\s*\/?>/gi, "")
                        .replace(/style=\".*\"/gi, "\n")
                        .replace(/serif:id=\".*\">/gi, ">")
                        .replace(/ serif:id=\".*\" /gi, " ")
                        .replace(/>\s+</g, "><")
                        .replace(`</svg>`, '')
                        .replace(/\n|\r/g, "");

                    icons.push({ name: file.name.replace('.svg', ''), keywords: [`${category.name}`], svg: rawData });
                });
            }
        });
        createFileForPackage(mergeDuplicatedIcon(icons), style);
    })
}

// Remove duplicate icons and merge their keyword values
function mergeDuplicatedIcon(icons) {
    const output = Object.values(
        icons.reduce(
            (res, o) => ((res[o.name] ||= { ...o, keywords: [] }).keywords.push(o.keywords.toString()), res),
            {}
        )
    );
    return output;
}

// Create file
function createFileForPackage(data, iconStyle) {
    let fileContent = `export const icons = ${JSON.stringify(data, null, 2)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/'/g, "\\'")
        .replace(/"/g, "'")
        };`;

    fs.writeFile(`./export/${iconStyle}-icons.js`, fileContent, (err) => {
        if (err) throw err;
        console.log('File saved successfully!');
        copyFileToPackage(iconStyle);
    });
}
// Copy each icon style in each package
function copyFileToPackage(iconStyle) {
    const frameworks = ['react', 'svelte', 'vue'];
    frameworks.forEach(framework => {
        fs.copyFile(`./export/${iconStyle}-icons.js`, `../circum-icons-${framework}/src/${iconStyle}-icons.js`, (err) => {
            if (err) throw err;
            console.log(`${iconStyle}-icons.js was copied to circum-icons-${framework}/src/`);
        });
    });
}

createDataForIconsArray();