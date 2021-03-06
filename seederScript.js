require("dotenv").config();

const productData = require("./Data/data.js");
const connectDB = require("./db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    // await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();