const { personModel } = require('../models')
const { successBody, errorBody } = require('../../utils')

module.exports = {
  // 增
  add: async ctx => {
    const one = await personModel.findOne({ name: ctx.request.body.name })
    if (!!one) {
      ctx.body = errorBody('has one')
    } else {
      const personEntity = new personModel(ctx.request.body)
      const result = await personEntity.save()
      console.log(result)
      if (result) {
        ctx.status = 204
      } else {
        ctx.body = errorBody('failed')
      }
    }
  },
  // 删
  remove: async ctx => {
    try {
      const result = await personModel.deleteOne({ _id: ctx.params.id })
      console.log(result)
      ctx.status = 204
    } catch (error) {
      console.log(error)
      ctx.body = errorBody(error.message)
    }
  },
  // 改
  update: async ctx => {
    try {
      const result = await personModel.update({ _id: ctx.params.id }, ctx.request.body)
      console.log(result)
      ctx.status = 204
    } catch (error) {
      console.log(error)
      ctx.body = errorBody(error.message)
    }
  },
  // 查
  list: async ctx => {
    try {
      const result = await personModel.find({})
      ctx.body = successBody(result)
    } catch (error) {
      console.log(error)
      ctx.body = errorBody(error.message)
    }
  },
  // 查单
  findOne: async ctx => {
    try {
      const result = await personModel.findOne({ _id: ctx.params.id })
      console.log(result)
      ctx.body = successBody(result)
    } catch (error) {
      console.log(error)
      ctx.body = errorBody(`can't find`)
    }
  }
}