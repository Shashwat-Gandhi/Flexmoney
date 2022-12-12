const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
require('dotenv').config()


app.get('/', (req,res) => {
    console.log('works')
    res.send('ok')
})

app.use(express.static(path.join(__dirname, "../frontend/build")))
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log('Listening on port: 5000')
})
export default app;