const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../image'))
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname} - ${Date.now()}.${file.mimetype.split('/')[1]}`)
  }
})