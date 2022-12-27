var router = require('express').Router()

var { notes } = require('../models')

router.get('/find-note/:id', async (req, res) => {
    var { id } = req.params
    
    try {
        const note_response = await notes.findOne({ where: { id } })
        if(note_response){
            res.send(note_response)
            console.log("Search success")
        }else{
            res.send("Note with this id does not exists")
            console.log("Note doesn't exist")
        }
       
    } catch (error) {
        console.log("Error while fetching note", error)
        res.send("error")
    }
})

module.exports = router