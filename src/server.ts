import mongoose from 'mongoose'
import { Server } from 'http'
import config from './config/index'
import app from './app'

process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

let server: Server

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`🛢 Database is connected successfully`)

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect database', err)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

boostrap()

process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})
