const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

const personModel = mongoose.model('person', personSchema)

module.exports = {
  personModel
}