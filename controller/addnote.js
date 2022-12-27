var router = require('express').Router()

var { notes } = require('../models')

router.post("/add-note", async (req, res) => {
    const { title, detail } = req.body

    try {
        const newnote = await notes.create({ title, detail })
        res.send(newnote)
        console.log("new not added successfully")
    } catch (error) {
        console.log("Error while adding new note", error)
    }
})

module.exports = router