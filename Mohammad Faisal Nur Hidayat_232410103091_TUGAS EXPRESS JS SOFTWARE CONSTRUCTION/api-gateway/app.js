require('dotenv').config()
const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json({ limit: '10mb' }))

// GET MEDIA
app.get('/media', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.MEDIA_URL}/media`)
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ message: 'Media service error' })
  }
})

// POST MEDIA
app.post('/media', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.MEDIA_URL}/media`, req.body)
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ message: 'Media service error' })
  }
})

// DELETE MEDIA
app.delete('/media/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${process.env.MEDIA_URL}/media/${req.params.id}`)
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ message: 'Media service error' })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`API Gateway jalan di port ${process.env.PORT}`)
})