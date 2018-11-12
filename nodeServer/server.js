const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const fileName = req.url.replace('/', '');
    const isHTML = req.url.includes('.html');

    if (isHTML) {
        fs.readFile(`public/${fileName}`, (err, data) => {
            if (err) return res.end('<b>Error html</b>');

            res.setHeader('Content-Type', 'text/html');
            res.end(String(data));
        });
        return;
    }

    fs.readFile(`public/${fileName}`, (err, data) => {
        if (err) return res.end('<b>Error img</b>');
        res.end(data);
    });

});

server.listen(5000, () => console.log('Server started -> localhost:5000'));