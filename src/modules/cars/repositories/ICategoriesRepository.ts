import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create(data: ICreateCategoryDTO): Category;
}

export { ICreateCategoryDTO, ICategoriesRepository };
