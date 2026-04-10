require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(express.static('public'))

const mediaRoutes = require('./routes/media')
app.use('/media', mediaRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server jalan di port ' + process.env.PORT)
})