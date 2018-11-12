const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const fileName = req.url.replace('/', '');

    const isHTML = req.url.includes('.html');
    const isIMG = req.url.includes('.png') || req.url.includes('.jpg');
    const isJS = req.url.includes('.js');

    fs.readFile(`public/${fileName}`, (err, data) => {
        if (err) return res.end('<b>Error!</b>');

        if (isHTML) res.setHeader('Content-Type', 'text/html');
        if (isJS) res.setHeader('Content-Type', 'text/javascript');

        if (isIMG) return res.end(data);
        res.end(String(data));
    });

});

server.listen(5000, () => console.log('Server started -> localhost:5000'));