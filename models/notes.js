function notesModel(sequelize, DataTypes) {
    const notes = sequelize.define('notes', {
        id: {
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        detail: {
            type: DataTypes.STRING
        }

    })
    return notes
}

module.exports = notesModel