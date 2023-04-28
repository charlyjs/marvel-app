import { Link } from 'react-router-dom';

// Components
import CharacterImagen from './CharacterImagen.tsx';

// DTOS
import { Character } from '../dto/Character.ts';

export default function CharacterDetail({ characters }: { characters: Array<Character> }) {
  return (
    <div className='grid gap-4 grid-cols-3'>
      {characters.map((character: Character) => {
        return (
          <div key={character.id} className='mb-32 h-80'>
            <CharacterImagen imagen={character.imagen} name={character.name} />
            <p className='text-white text-lg mt-2 text-center'>{character.name}</p>
            <div className='flex justify-around mt-2'>
              <Link to={`/character/comics/${character.id}`} className='text-white text-sm bg-amber-600 rounded-md p-1 shadow shadow-amber-600'>
                No. Comics: {character.comics.available}
              </Link>
              <Link to={`/character/series/${character.id}`} className='text-white text-sm bg-amber-600 rounded-md p-1 shadow shadow-amber-600'>
                No. Series: {character.series.available}
              </Link>
              <Link to={`/character/stories/${character.id}`} className='text-white text-sm bg-amber-600 rounded-md p-1 shadow shadow-amber-600'>
                No. Historias: {character.stories.available}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
