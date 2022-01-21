import {ITypeSlot} from "./i-type-slot";

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  types: ITypeSlot[];
  sprites: {
    other: {
      home: {
        front_default: string;
        front_shiny: string;
      }
      'official-artwork': {
        front_default: string;
      }
    }
  }
}
