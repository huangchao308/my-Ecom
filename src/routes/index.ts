import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/product/')
})

export default router;
