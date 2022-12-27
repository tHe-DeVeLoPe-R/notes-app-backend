var router = require('express').Router()
var { users } = require('../models')

router.post("/add-user", async (req, res) => {

    const { username, password } = req.body
    try {
        const user = await users.findOne({ where: { username } })
        if (user) {
            res.send("user already exists")
            console.log("cannot signup or the user already exists")
        } else {

            const newUser = await users.create({ username, password })
            res.send(newUser)
            console.log("new user created successfully")
        }
    } catch (error) {
        console.log("Error while creating new user", error)
    }


})

module.exports = router