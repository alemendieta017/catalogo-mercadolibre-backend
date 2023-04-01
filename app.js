const express = require('express')
const app = express()
const router = require('./routes')

const PORT = process.env.PORT || 3000

app.use('/api', router)

app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT)
})