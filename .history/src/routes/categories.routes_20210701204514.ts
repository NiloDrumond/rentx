import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
    id: uuidV4(),
  };

  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes };