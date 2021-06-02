
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
