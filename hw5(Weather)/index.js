// Module
const fs = require('file-system');
const hp = require('http');
const opn = require('opn');
// Module End

hp.get('http://wttr.in/~kharkov', (data) => {
    if (data.statusCode !== 200) throw new Error(data.statusMessage);

    data.setEncoding('utf-8');
    let result = '';
    data.on('data', res => result += res);
    data.on('end', () => {
        fs.writeFile('weather.html', result, () => {
            opn(`${__dirname}/weather.html`);
        })
    });
});