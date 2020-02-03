const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        animes: DataTypes.JSON,
        role_name: DataTypes.STRING,
        date_birth: DataTypes.DATE
      },
      {
        sequelize
      }
    )
  }
}

module.exports = User
