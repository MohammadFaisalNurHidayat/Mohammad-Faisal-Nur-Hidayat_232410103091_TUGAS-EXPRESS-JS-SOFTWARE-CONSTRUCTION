const fs = require('fs')
const path = require('path')
const { Media } = require('../models')

exports.uploadImage = async (req, res) => {
  try {
    const { image } = req.body

    if (!image || !image.startsWith('data:image')) {
      return res.status(400).json({ message: 'Invalid image' })
    }

    const ext = image.split(';')[0].split('/')[1]
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '')

    const fileName = Date.now() + '.' + ext
    const filePath = path.join(__dirname, '../public/images/', fileName)

    // AUTO BUAT FOLDER
    fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true })

    fs.writeFileSync(filePath, base64Data, 'base64')

    const data = await Media.create({
      image: `/images/${fileName}`
    })

    res.json({ message: 'Upload berhasil', data })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getAllMedia = async (req, res) => {
  try {
    const data = await Media.findAll()
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}