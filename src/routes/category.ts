import express from 'express';
import CategoryController from '../controllers/category-ctroller';

const router = express.Router();
const categoryController = new CategoryController();

router.get('/', async (req, res, next) => {
  const { page, size } = req.query
  const categoryList = await categoryController.getList(parseInt(page), parseInt(size));
  console.log(categoryList);
  res.format({
    html: () => res.render('category/index', { categoryList }),
    json: () => res.json(categoryList)
  })
})

router.route('/:id')
  .get(async (req, res, next) => {
    const id = req.params.id;
    const category = await categoryController.getById(id);
    console.log(category);
    res.format({
      html: () => res.render('category/detail', { category }),
      json: () => res.json(category)
    })
  })
  .post(async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    return categoryController.update(id, body)
      .then(result => {
        res.format({
          html: () => res.redirect('/category/'),
          json: () => res.json({ message: 'success', code: 200 })
        });
      })
      .catch(err => {
        console.log(`Update category error: ${err.stack}`);
        res.format({
          html: () => res.redirect('/category/'),
          json: () => res.json({ message: 'failed', code: 503 })
        });
      })
  })

export default router;
