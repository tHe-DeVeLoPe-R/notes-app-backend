var express = require('express')

var { sequelize } = require('./models/index')

const register = require('./controller/registeruser')
const login = require('./controller/loginuser')
const addNote = require('./controller/addnote')
const findNote = require('./controller/findnote')
const updateNote = require('./controller/updatenote')
const deleteNote = require('./controller/deletenote')

const app = express()

app.use(express.json())

app.use("/", register)
app.use("/", login)
app.use("/", addNote)
app.use("/", findNote)
app.use("/", updateNote)
app.use("/", deleteNote)


try {
    (async function () {
        await sequelize.authenticate().then(() => {
            console.log("notesdb connected")
            sequelize.sync({ alter: true })
            console.log("models sync success")
            app.listen(3000, () => {
                console.log("server running on port 3000")
            })
        })
    }())
} catch (error) {
    console.log("Auth error", error)
}

