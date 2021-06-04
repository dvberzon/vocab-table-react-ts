import { worker } from 'cluster';
import React, { useState } from 'react';
import { AddWord } from './AddWord';
import { initialVocab, Word, addWord, removeWord} from './vocab';
import { WordRow } from './WordRow';

export const VocabTable = () => {
  const [vocab, setVocab] = useState<Word[]>(initialVocab);
  return (
    <div>
      <AddWord
        addWord={(en, nl) => setVocab(addWord(vocab, en, nl))}
      />
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>Nederlands</th>
            <th>English</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vocab.map((word) => (
            <WordRow
              key={word.id}
              word={word}
              removeWord={(id) => setVocab(removeWord(vocab, id))}
            />
          ))}
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  )
}