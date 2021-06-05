const path = require('path')
const express = require('express')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req,res,next) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(8080, () =>
  console.log('Listening on port 8080')
  )
