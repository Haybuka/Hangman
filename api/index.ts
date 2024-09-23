import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { DicitonaryList } from './type';

const getDefinition = async (word: string): Promise<DicitonaryList> => {
  console.log(word, 'word');
  const request = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  console.log(request, 'request');

  return request.data;
};

export const useGetDefinition = (word: string) => {
  return useQuery({
    queryKey: ['dictionary', word],
    queryFn: () => getDefinition(word),
    select: (data) => data[0].meanings[0].definitions[0].definition,
  });
};
