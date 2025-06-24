import { EntityDefault } from "src/Domain/Models/entity-default";

export class AddressEntity extends EntityDefault {

  cep?: string;
  place: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}
