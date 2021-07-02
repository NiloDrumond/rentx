import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json({ categories });
});

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const existentCategory = categoriesRepository.findByName(name);

  if (existentCategory) {
    return response.status(400).json({ error: 'Category already exists' });
  }

  const category = categoriesRepository.create({ name, description });

  return response.status(201).json({ category });
});

export { categoriesRoutes };
