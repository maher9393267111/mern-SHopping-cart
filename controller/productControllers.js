
const Products = require('../models/Product.js');

const data =require('../data/Data.js')

const CreateProducts = async (req,res)  =>{

    try{
    const createdProducts = await Products.insertMany(data);
    res.send({ createdProducts });
console.log('date inserted in mongodb') }

catch(error){

res.status(500).json({message:'data failed to insert in mongodb'})

}


}



const getProducts =async (req,res) =>{

try{

const products = await Products.find({});


res.json(products);



}


 catch(error){

res.status(500).json({message:'server error that'})

}


}



const getProductById = async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };






module.exports = {getProducts,getProductById,CreateProducts}
