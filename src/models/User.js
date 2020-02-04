const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        animes: DataTypes.JSON,
        role_name: DataTypes.STRING,
        date_birth: DataTypes.DATE
      },
      {
        sequelize
      }
    )
    User.beforeCreate('PassHash', async User => {
      User.password = await bcrypt.hash(User.password, 10)
    })
  }
}
module.exports = User
