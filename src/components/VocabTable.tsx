import { worker } from 'cluster';
import React, { useState } from 'react';
import { AddWord } from './AddWord';
import { initialVocab, Word, addWord} from './vocab';

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
          {vocab.map(({id, nl, en}) => (
            <tr key={id}>
              <td>{nl}</td>
              <td>{en}</td>
            </tr> 
          ))}
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  )
}