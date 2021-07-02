import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification | undefined;
  list(): Specification[];
  create(data: ICreateSpecificationDTO): Specification;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
