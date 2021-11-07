const app = require('express')()
const passport = require('passport')
const User = require('../model/googleAuthModel')

app.use(passport.initialize())
app.use(passport.session())

app.get('/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/')
    }
)

app.get('/current', (req, res) => {
    res.send(req.user)
    // User.findById({ id: req.user._id }).then((resp) => {
    //     res.send({ 'User': resp })
    // }).catch((err) => {
    //     res.send(err.message)
    // })
});

app.get('/logout', (req, res) => {
    req.logOut()
    res.send({ 'user': req.user })
    console.log(req.user)
});

module.exports = app