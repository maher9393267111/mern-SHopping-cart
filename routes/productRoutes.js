const express = require('express');



const router = express.Router();

const {getProducts,getProductById,CreateProducts} = require('../controller/productControllers')


router.get('/seed',CreateProducts);



router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
