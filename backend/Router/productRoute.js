import express from "express";
import { getAllData, createProduct, updateProduct, deleteProduct } from "../Controller/productController.js";

const router=express.Router();

router.route('/all').get(getAllData);
router.route('/').post(createProduct)
router.route('/:id').put(updateProduct)
router.route('/:id').delete(deleteProduct);

export default router;