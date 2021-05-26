// const express = require('express')
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import routes from './routes/app'



const app = express()

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}



app.set('port',process.env.PORT || 3000)

//middleware
app.use(morgan('dev'))
app.use(cors())

//routes
app.use('/api' ,cors(corsOptions), routes)

//public
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto http://localhost:',app.get('port'))
})