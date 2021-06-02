import { worker } from 'cluster';
import React, { useState } from 'react';
import { initialVocab, Word } from './vocab';

export const VocabTable = () => {
  const [vocab, setVocab] = useState<Word[]>(initialVocab);
  return (
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
  )
}