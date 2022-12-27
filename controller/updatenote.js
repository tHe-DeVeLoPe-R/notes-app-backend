var router = require('express').Router()

var { notes } = require('../models')

router.get('/update-note/:id', async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    try {
        const note_response = await notes.findOne({ where: { id } })

        if (note_response) {
            
            const update_response = await notes.update({ title }, { where: { id } })
            res.send(update_response)
            console.log("Update success")
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