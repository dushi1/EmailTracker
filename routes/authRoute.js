const app = require('express')()
const passport = require('passport')

app.use(passport.initialize())
app.use(passport.session())

app.get('/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/')
    }
)

app.get('/current', (req, res) => {
    res.send({ 'user': req.user })
});

app.get('/logout', (req, res) => {
    req.logOut()
    res.send({ 'user': req.user })
});

module.exports = app