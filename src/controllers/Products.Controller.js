import Product from '../models/Product.js'

async function index(req, res, next) {
    try {
        const products = await Product.find();
        return res.status(200).json({
            res: products
        });
    } catch (e) {
        return res.status(500).json({
            message: e
        });
    }
}

async function findOne(req, res, next) {
    try {
        const product = await Product.findById(req.params);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({
            status: 200,
            data: products
        });
    } catch (e) {
        return res.status(500).json({
            message: e
        });
    }
}

async function save(req, res, next) {
    try {
        const { title, description, price } = req.body;
        const product = new Product({ title, description, price });
        await product.save();

        return res.status(201).json({
            status: 201
        });
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function update(req, res, next) {
    try {
        const { id } = req.params;
        const { title, description, price } = req.body;
        await Product.findByIdAndUpdate(id, { title, description, price });
    } catch (e) {
        return res.status(500).json({
            message: e
        });
    }
}

export default {
    index: index,
    save: save,
    update: update,
    findOne: findOne,
};