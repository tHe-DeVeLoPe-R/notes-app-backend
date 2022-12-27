function usersModel(sequelize, DataTypes) {
    const users = sequelize.define('users', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING,

        },
        password: {
            type: DataTypes.STRING
        }
    })

    return users
}

module.exports = usersModel