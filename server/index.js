const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
// For https Settings.
const https = require('https')
const fs = require('fs')
const options = {
  key: fs.readFileSync('./server/cert.pem'),
  cert: fs.readFileSync('./server/cert.pem')
}

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.set('port', port)
  app.use(nuxt.render)

  // Listen the server
  const server = https.createServer(options, app)
  server.listen(port, host)
  consola.ready({
    message: `Server listening on https://${host}:${port}`,
    badge: true
  })
}

start()
