const fs = require('file-system');

const dirName = 'date';
const fileName = 'dateToDay.txt';
const date = new Date();

fs.mkdir(dirName, (err) => {
    if (err) return console.log(err);

    fs.writeFile(`${dirName}/${fileName}`, date);
});