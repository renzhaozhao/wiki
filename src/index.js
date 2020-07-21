const Koa = require('koa')
const koaBody = require('koa-body')
const serve = require('koa-static')

const routers = require('./routers')
const dbConnect = require('./app/models/db')

const app = new Koa()
app.use(koaBody({ multipart: true }))
app.use(serve(__dirname))
app.use(routers.routes()).use(routers.allowedMethods())

dbConnect()

const PORT = 8000
app.listen(PORT, () => {
  console.log(`app started at port ${PORT}`)
})