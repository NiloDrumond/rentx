import { Specification } from '../../model/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const existentSpecification =
      this.specificationsRepository.findByName(name);

    if (existentSpecification) {
      throw new Error('Specification already exists');
    }

    const category = this.specificationsRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateSpecificationUseCase };
