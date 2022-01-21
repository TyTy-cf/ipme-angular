import {ITypeSlot} from "./i-type-slot";

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  types: ITypeSlot[];
}
