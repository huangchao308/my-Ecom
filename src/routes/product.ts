import express from 'express';
import ProductController from '../controllers/product-ctroller';

const router = express.Router();
const productCtroller = new ProductController();

router.get('/', async function(req, res, next) {
  const { page, size, ...conditions } = req.query
  const productList = await productCtroller.getList(parseInt(page), parseInt(size), conditions);
  res.render('product/index', { productList })
})

router.get('/:sku', async (req, res, next) => {
  const sku = req.params.sku;
  const product = await productCtroller.getBySku(sku);
  res.json(product);
})

export default router;