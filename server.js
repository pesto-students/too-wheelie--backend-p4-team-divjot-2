const express = require('express')
const app = express()
const port = process.env.PORT||8000
const dbConnection=require('./db')
app.use(express.json())


app.use('/api/bikes/' , require('./routes/bikeRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))

app.use('/api/bookings/' , require('./routes/bookingsRoute'))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))