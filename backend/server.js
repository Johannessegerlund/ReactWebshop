const express = require('express')
require('dotenv').config()
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API running...' })
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
