import { useQuery } from '@tanstack/react-query';

// DTOS
import { ResponseCharacters } from '../dto/Character.ts';

// Services
import { getCharactersAll } from '../services/character.ts';

export function useCharacters() {

  const { isError, data, isLoading } = useQuery<ResponseCharacters>({
    queryKey: ['characters'],
    queryFn: getCharactersAll
  });

  return {
    isError,
    isLoading,
    data: { ...data, characters: data?.characters ?? [] }
  };
}
