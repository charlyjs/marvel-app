// Components
import CharacterDetail from '../components/CharacterDetail.tsx';

// Hooks
import { useCharacters } from '../hooks/useCharacters.ts';

export default function Character() {

  const { isError, data, isLoading } = useCharacters();

  if (isLoading) return 'Loading';
  if (isError) return 'Error';

  return (
    <div>
      <h1 className='text-center text-9xl'>
        <span className='text-rose-700'>Mar</span>
        <span className='text-white'>vel</span>
      </h1>

      <CharacterDetail characters={data.characters} />
    </div>
  );
}
