const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const cookies = require('cookie-session')
const cors = require('cors')
const app = express()
const passportRoute = require('./routes/authRoute')
const PORT = process.env.PORT
const mongoose = require('mongoose')

app.use(express.json())

app.use(cookies({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}))

require('./services/passport')

app.use(cors())
// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// app.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// app.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

app.use('/api', passportRoute)

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(resp => {
    app.listen(PORT, () => {
        console.log('sever on');
    })
}).catch(er => {
    console.log(er);
})
