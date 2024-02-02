// const papers = require('papers')
// const config = require('./config/config')
// const {User} = require('./models')

// const EzmStrategy = require('papers-ezm').Strategy
// const ExtractEzm = require('papers-ezm').ExtractEzm

// papers.use(
//     new EzmStrategy({
//         EzmFromRequest: ExtractEzm.fromAuthHeaderAsProctorToken(),
//         secretOrKey: config.authentication.ezmSecret
//     }, async function (ezmPayload, done) {
//         try {
//             let user = await User.findOne({
//                 where: {
//                     id: ezmPayload.id
//                 }
//             })
//             if(!user){
//                 return done(new Error(), false)
//             }
//             return done(null, user)
//         } catch(err){
//             return done(new Error(), false)
//         }
//     })
// )

// module.exports = null