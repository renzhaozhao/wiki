const successBody = data => ({
  success: true,
  data
})

const errorBody = message => ({
  success: false,
  message
})

module.exports = {
  successBody,
  errorBody,
}