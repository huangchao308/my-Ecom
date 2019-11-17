import ProductModel from '../database/models/product';

export default class ProductController {
  public getList (page: number = 1, size: number = 10, conditions = {}) {
    return ProductModel.find(conditions).skip((page - 1) * size).limit(size);
  }

  public getBySku (sku: string) {
    return ProductModel.findOne({ sku });
  }
}
