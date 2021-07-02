import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello asd' });
});

app.use(categoriesRoutes);

app.listen(3333, () => console.log('Server is running'));