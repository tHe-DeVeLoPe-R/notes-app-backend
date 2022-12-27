var router = require('express').Router()

var { notes } = require('../models')

router.get('/delete-note/:id', async (req, res) => {
    var { id } = req.params

    try {
        const note_response = await notes.findOne({ where: { id } })
        if (note_response) {
            const delete_response = await notes.destroy({ where: { id } })
            console.log("Note deleted")
            res.send("Note deleted")
        } else {
            res.send("Note with this id does not exists")
            console.log("Note doesn't exist")
        }

    } catch (error) {
        console.log("Error while fetching note", error)
        res.send("error")
    }
})

module.exports = router