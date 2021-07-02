import { v4 as uuidV4 } from 'uuid';

interface ICategoryConstructorDTO {
  name: string;
  description: string;
}

class Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICategoryConstructorDTO) {
    this.id = uuidV4();
    this.created_at = new Date();
    this.name = name;
    this.description;
  }
}

export { Category };
