export interface Character {
  id: number;
  name: string;
  imagen: string;
  comics: Comics;
  series: Series;
  stories: Stories;
}

export interface Summary {
  available: number;
  collectionURI: string;
}

export interface Series extends Summary {
}

export interface Comics extends Summary {
}

export interface Stories extends Summary {
}

export interface ResponseCharacters {
  offset: number;
  limit: number;
  total: number;
  count: number;
  characters: Array<Character>;
}
