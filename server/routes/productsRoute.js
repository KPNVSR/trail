const router = require("express").Router();
const Product = require("../models/productModel");
const authMiddleware = require("../middlwares/authMiddleware");
// const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add-product',authMiddleware,async(req,res)=>{
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.send({
            success:true,
            message:"Product added successfully",
        });
    }
    catch(error){
        res.send({
            success:false,
            message:error.message,
        });
    }
});


router.get("/get-products",async(req,res)=>{
    try{
        const products = await Product.find().sort({createdAt: -1 });
        res.send({
            success:true,
            products,
        });
    }catch(error){
        res.send({
            success:false,
            message:error.message,
        });
    }
});

router.put("/edit-product/:id",authMiddleware,async (req,res)=>{
    try{
        await Product.findByIdAndUpdate(req.params.id,req.body);
        res.send({
            success:true,
            message:"Product updated uccessfully",
        });
    } catch(error){
        res.send({
            success:false,
            message:error.message,
        });
    }
});

router.delete("/delete-product/:id",authMiddleware,async (req,res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.send({
            success:true,
            message:"Product deleted Successfully",
        });
    } catch(error){
        res.send({
            success:false,
            message:error.message,
        });
    }
});

module.exports = router;