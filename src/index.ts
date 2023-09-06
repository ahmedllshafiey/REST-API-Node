import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose'

const app = express()
app.use(cors({
    credentials: true
 }))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const PORT = 4000;
const MONGO_URL='mongodb+srv://ahmedllshafiey:root@cluster-00.wfuw8yg.mongodb.net/'

const server = http.createServer(app)

server.listen(4000, ()=>{
    console.log(`Server on http://localhost:4000`)
})

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error)=>console.log(error))