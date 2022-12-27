var router = require('express').Router()

var { users } = require('../models')

router.get("/login-user", async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await users.findOne({ where: { username } })
        if (user) {
            if (password == user.password) {
                res.send("login success")
                console.log("login success")
            } else {
                res.send("Wrong password - login failed")
                console.log("Wrong password - login failed")
            }
        } else {
            res.send("no user found - login failed")
            console.log("user dosen't exist - login failed")
        }
    } catch (error) {
        console.log("Error", error)
    }
})

module.exports = router