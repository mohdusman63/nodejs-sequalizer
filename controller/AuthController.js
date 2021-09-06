const model = require('../models')
const User = model.User
const Post = model.Post


exports.register = [
    async (req, res) => {
        try {
            let insertData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            }
            console.log(insertData)
            let get = await User.create(insertData)
            console.log(get.dataValues)
            res.json(get.dataValues)
        } catch (err) {
            console.log(err.message)

        }
    }
]

exports.findAll = [
    async (req, res) => {
        try {
            // let getAll = await User.findAll()
            // console.log(getAll)


            /* count the document */

            // let getAll = await User.findAll({
            //     attributes:['firstName',
            //     [db.sequelize.fn('COUNT', db.sequelize.col('lastName')), 'count_document']]
            // })


            // let get= await User.findAll({
            //     where:{id:5}
            // })


            // let get = await User.findAll({
            //     where: {
            //         id: {
            //             [Op.eq]: 4
            //         }
            //     }
            // })

            // let get = await User.findAll({
            //     where: {
            //         [Op.and]: [
            //             {id:3},
            //             {lastName:'ali'}
            //         ]
            //     }
            // })


            let get = await User.update({lastName: 'azmi'},
                {where: {id: 3}})

            res.json(get)

        } catch (err) {
            console.log(err.message)

        }
    }
]


exports.postMessage = [
    async (req, res) => {
        try {
            console.log(req.body)
            let insertData = {
                user_id: req.body.user_id,
                message: req.body.message,

            }
            let post = await Post.create(insertData)
            console.log(post.dataValues)
            res.json(post.dataValues)

        } catch (err) {
            console.log(err.message)


        }
    }
]

exports.getPost = [
    async (req, res) => {
        try {
            //################ one to one relationship #########################

            // let get = await User.findAll({
            //     include: [{
            //         model: Post,
            //         attributes: ['name','content','id','user_id']
            //     }],
            //     // where: {id: 3}
            //
            //
            // })
            // console.log(get)
            // res.json(get)

            // let get = await Post.findAll({
            //         include: [{
            //             model: User,
            //
            //         }],
            //         // where: {id: 3}
            // })
            //     console.log(get)
            //     res.json(get)


            //########one to many relationship ########

            let get = await User.findAll({
                include: [{
                    model: Post
                }]

            })
            console.log(get)
            res.json(get)
        } catch (e) {
            console.log(e.message)
            res.json(e.message)
        }

    }
]