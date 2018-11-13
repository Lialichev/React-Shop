const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const fileName = req.url.replace('/', '');

    const isHTML = req.url.includes('.html');
    const isIMG = req.url.includes('.png') || req.url.includes('.jpg') || req.url.includes('.svg') || req.url.includes('.gif');
    const isJS = req.url.includes('.js');

    fs.readFile(`public/${fileName}`, (err, data) => {
        if (err) {
            res.setHeader('Content-Type', 'text/html');
            return res.end('<b>Error!</b>');
        }

        // HTML
        if (isHTML) {
            res.setHeader('Content-Type', 'text/html');
            
            const date = new Date();
            const time = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            const style = 'time{position: absolute;bottom: 15px;right: 15px;}';

            const html = String(data).replace(
                '</body>',
                `<time>${time}</time><style type="text/css">${style}</style></body>`
            );
            return res.end(html);
        }

        // JS
        if (isJS) res.setHeader('Content-Type', 'text/javascript');

        // IMG
        if (isIMG) return res.end(data);

        res.end(String(data));
    });

});

server.listen(5000, () => console.log('Server started -> localhost:5000'));
