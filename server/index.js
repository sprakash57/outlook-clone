const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const mails = require('./db');

const PORT = 5000;
const app = http.createServer((req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Max-Age": 259200,
        "Content-Type": "application/json"
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
    }

    if (req.method === 'POST') {
        let body = '', formData = '', result = { isAuthenticated: true, message: 'Logged in successfully', status: 200 };
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            formData = parse(body);
            if (formData.email !== 'jhon@doe.com' || formData.password !== 'dummy') {
                result = { isAuthenticated: false, message: 'Invalid credentials', status: 401 }
            }
        });
        res.writeHead(result.status, headers);
        res.end(JSON.stringify(result));
    }

    if (req.method === 'GET') {
        const reqUrl = url.parse(req.url, true).pathname;
        console.log(`${req.socket.remoteAddress} - ${req.method} - ${reqUrl}`);
        switch (reqUrl) {
            case '/':
                res.writeHead(200, headers);
                res.end(JSON.stringify(mails));
                break;
            default:
                res.writeHead(204, headers);
                res.end();
        }
    }
    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));