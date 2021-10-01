const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);



const fileSearch = async name => {
    try {
        const files = await readdir(name);
        files.forEach(file => {
            const pathstring = path.join(name, file);
            fs.stat(pathstring, (err, stats) => {
                if(stats && stats.isDirectory()) fileSearch(pathstring);
                else {
                    if(path.extname(pathstring) === '.js') console.log(pathstring);
                }
            });
        });
        
    }
    catch (err) {
        console.log(err);
    }

};

fileSearch('./test');