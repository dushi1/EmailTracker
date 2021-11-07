const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cookies = require('cookie-session')
//const cookies = require('express-session')
const cors = require('cors')
const app = express()
const passportRoute = require('./routes/authRoute')
const stripe = require('./routes/stripe')
const PORT = process.env.PORT
const mongoose = require('mongoose')
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookies({
    name: 'session',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}))



// app.use(cookies({
//     secret: process.env.COOKIE_KEY,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));

require('./services/passport')

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// app.use(express.static(path.join(__dirname, 'client', 'dist')))

// app.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

app.use('/api', passportRoute)
app.use('/api', stripe)

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(resp => {
    app.listen(PORT, () => {
        console.log('sever on');
    })
}).catch(er => {
    console.log(er);
})
