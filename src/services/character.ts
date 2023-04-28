// import CryptoJS from 'crypto-js';

import response from '../response.json';

// DTOS
import { ResponseCharacters } from '../dto/Character.ts';

export function getCharactersAll(): Promise<ResponseCharacters> {
  /*
  const publicKey = 'a7dc8feb3bac356d0d9f128543e392d1';
  const privateKey = 'ed00a5678fb3c824bd3f148df4a1138716b83863';

  const time = new Date().getTime();
  const hash = CryptoJS.MD5(`${time}${privateKey}${publicKey}`).toString();
  const apiBase = 'http://gateway.marvel.com/v1/public/characters';

  return fetch(`${apiBase}?apikey=${publicKey}&hash=${hash}&ts=${time}`)
    .then(response => {
      if (!response.ok) throw new Error('Error en la petición');

      return response.json();
    })
    .then(({ data }) => {
      const { offset, limit, total, count, results } = data;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const characters = results.map(({ id, name, thumbnail, comics, series, stories, urls }) => {
        return { id, name, thumbnail: `${thumbnail.path}.${thumbnail.extension}`, comics, series, stories, urls };
      });

      return { offset, limit, total, count, characters };
    });*/

  return new Promise<ResponseCharacters>((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { offset, limit, total, count, results } = response.data;

    // @ts-ignore
    const characters: Array<Characters> = results.map((item) => {
      const imageThumbnail = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      const isAvailableImagen = imageThumbnail.indexOf('image_not_available') === -1;

      const comics = {
        available: item.comics.available,
        collectionURI: item.comics.collectionURI
      };

      const series = {
        available: item.series.available,
        collectionURI: item.series.collectionURI
      };

      const stories = {
        available: item.stories.available,
        collectionURI: item.stories.collectionURI
      };


      return { id: item.id, name: item.name, imagen: isAvailableImagen ? imageThumbnail : '', comics, series, stories };
    });

    resolve({ offset, limit, total, count, characters });
  });

}
