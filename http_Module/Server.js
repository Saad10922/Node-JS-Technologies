const http = require('http')

const server = http.createServer((req, res)=>{
    res.setHeader('Content_Type', 'text/plain')
    if(req.url === '/')
       {
        res.statusCode=200
        res.end('Welcome to Home Page !')
       } 
    else if(req.url === '/about')
    {
        res.statusCode=200
        res.end('This is about Page !') 
    }
    else
    {
        res.statusCode=400
        res.end('page not found!!')
    }

})
const port=3000
server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})