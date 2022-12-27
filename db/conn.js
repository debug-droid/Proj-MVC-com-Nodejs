const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', 'P3ndr@g0n', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
