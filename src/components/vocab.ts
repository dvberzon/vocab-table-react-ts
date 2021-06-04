
export const initialVocab: Word[] = [
  {
    id: 1,
    nl: 'vrouw',
    en: 'womand',
  },
  {
    id: 2,
    nl: 'sinasappelsaap',
    en: 'orange juice',
  },
  {
    id: 3,
    nl: 'boterham',
    en: 'slice of bread',
  },
];

export interface Word {
  id: number,
  nl: string,
  en: string,
}

function nextId(vocab: Word[]) {
  const maxId = vocab.reduce(
    (prevId: number, word: Word) => prevId > word.id ? prevId : word.id,
    0
  );
  return maxId + 1;
}

export function addWord(vocab: Word[], en: string, nl: string): Word[] {
  const id = nextId(vocab);
  return [...vocab, {id, en, nl}];
};
