const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRouter = require('./routes/userRoute')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
require('dotenv').config()


app.get('/', (req,res) => {
    console.log('works')
    console.log(mongoose.connection.readyState)
    if(mongoose.connection.readyState == 0) {
        mongoose.connect(process.env.MONGODB_URI).catch((err) => {
            console.log(err)
        })
    }
    res.send('ok')
})

app.use('/api/v1', userRouter);
mongoose.set('strictQuery', false)
app.listen(process.env.PORT, () => {
    console.log('Listening on port: 5000')
    mongoose.connect(process.env.DB_URI, () => {
        console.log('Connection to db: success');
    })
})

module.exports = app;