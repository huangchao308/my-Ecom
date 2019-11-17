import CategoryModel from '../database/models/category';

export default class CategoryController {
  public getList (page: number = 1, size: number = 10) {
    return CategoryModel.find({}).skip((page - 1) * size).limit(size);
  }

  public async getById (id: string) {
    const category: any = await CategoryModel.findById(id);
    if (category.parent_id) {
      category.parentCategory =  await this.getById(category.parent_id);
    }
    return category;
  }

  public update (id: string, data: any) {
    return CategoryModel.findByIdAndUpdate(id, data)
  }
}