const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){

        //метод заголовка запроса
        //условие проверки заголовка
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        //проверка страницы, которую нужно отдать
        if(req.url === '/'){
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if(err){
                        throw err;
                    }else{
                        res.end(content)
                    }
                }
            )
        }else if(req.url === '/about'){
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if(err){
                        throw err;
                    }else{
                        res.end(content)
                    }
                }
            ) 
        }else if(req.url === '/api/users'){
            res.writeHead(200, {
                'Content-Type': 'text/json'
            })

            const users = [
                {name: 'Paul', age: 25},
                {name: 'Anna', age: 27}
            ]

            res.end(JSON.stringify(users))
        };
    }else if(req.method === 'POST'){

        const body = [];
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8' 
        })

        
        req.on('data', data => {
            body.push(Buffer.from(data));
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1];

            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `)
        })
    }

});

server.listen(3000, () => {
    console.log('Server is running...')
})