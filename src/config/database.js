require('dotenv').config()

module.exports = {
  dialect: process.env.DATABASE,
  host: process.env.HOST,
  username: process.env.DB_USER,
  password: process.env.DB_ROOT_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true
  }
}
