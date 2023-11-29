const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/authenticate', async (req, res) => {
  const { username } = req.body

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username},
      {headers: {"private-key": "7eb1b3cc-d0e7-4481-9155-c7ef8e3d5764"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }

  //return res.json({ username: username, secret: secret })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})