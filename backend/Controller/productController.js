import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllData = async(req,res)=>{
    
    try {
        const allProd=await Product.find();
        res.status(200).json({success: true, data: allProd})
    } catch (error) {
        res.status(404).json({success: false, message: "Nothing found"})
        console.log("No data found")
    }
};

export const createProduct = async(req,res)=>{
    const products=req.body;
    if(!products.name || !products.price || !products.img){
        //throw new Error("All the Fields are mandatory")
        return res.status(400).json({success: false, message: "Provide all the fields"})
    }
    const newProduct = new Product(products);
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.log("error in creation: ", error.message)   
        res.status(500).json({success:false, message: "server error"})
    }
};

export const updateProduct = async(req,res)=>{
    const id = req.params.id;
    const upddata =  req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Product not found"})
    }
    try {
        await Product.findByIdAndUpdate(id,upddata,{new: true});
        res.status(200).json({success: true, message: "Updated the data successfully"})
    } catch (error) {
        res.status(500).json({success:false, message: "Server error" })
        console.log("error is there ", error.message);
    }
};

export const deleteProduct = async(req,res)=>{
    const id=req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(201).json({success: true, message: "Product is deleted"})
    } catch (error) {
        res.status(404).json({success:false, message: "Product not found"})
        console.log("product not found")
    }
};

//export {getAllData, createProduct, updateProduct, deleteProduct};