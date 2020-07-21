const mongoose = require('mongoose')
const chalk = require('chalk')

const DB_URL = 'mongodb://localhost:8888/wiki'

const dbConnect = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, error => {
    if (error) {
      console.log(chalk.red('数据库连接失败'), error)
    } else {
      console.log(chalk.green('数据连接成功。'))
    }
  })

  return mongoose.connection
}

module.exports = dbConnect