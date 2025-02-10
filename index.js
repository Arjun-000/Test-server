require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/routes')
require('./database/dbConnection')
const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 3003 || proce4.env.PORT

server.listen(PORT, () => {
    console.log(`Server running in ${PORT}`); 
    console.log('http://localhost:3003');
    
})
server.get('/',(req,res)=>{
    res.status(200).send('<H1>Hi</H1>')
})