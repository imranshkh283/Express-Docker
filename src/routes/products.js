import express from "express";
import productsController from "../controllers/Products.Controller.js"
const router = express.Router();

router.get('/', productsController.index);
router.get('/:id', productsController.findOne);
router.post('/', productsController.save);
router.put('/:id', productsController.update);


export default router;