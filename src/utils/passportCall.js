const passport = require('passport')


exports.passportCall = strategy => {
    return async (req, res, next) =>{
        passport.authenticate(strategy, function(err, user, info){
            if (err) return next (err)
            if (!user) {
                return res.status(401).send({error: info.messagge ? info.messagge : info.toString()})
            }
            req.user = user
            next()

        })(req, res, next)

    }
}