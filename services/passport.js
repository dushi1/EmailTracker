const passport = require('passport')
const GoogleStrat = require('passport-google-oauth20').Strategy
const User = require('../model/googleAuthModel')


passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })

})


passport.use(new GoogleStrat({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/google/callback"
},
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((resp) => {
            if (resp) {
                done(null, resp)
            } else {
                new User({ googleId: profile.id }).save().then((resp) => {
                    done(null, resp)
                })
            }
        })
    }
)
)

