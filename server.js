let express = require('express')
let app = express()
app.use(express.static(__dirname + '/dist/proyecto-frontend-peru'))
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/proyecto-frontend-peru/index.html')
})

app.listen(process.env.PORT || 8080)