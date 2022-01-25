const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const connectDB= require('./db')
app.use(express.json())

connectDB();

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });

const productRoutes = require('./routes/productRoutes')

  app.use("/api/products", productRoutes);






app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))