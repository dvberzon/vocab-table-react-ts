import React, { useState } from 'react';
import { Word } from './vocab';

interface WordProps {
  word: Word,
  removeWord: (id: number) => void,
}

export const WordRow = ({word, removeWord}: WordProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <tr
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <td>{word.nl}</td>
      <td>{word.en}</td>
      
      <td className="control">
      {isHovering && (
          <button
            onClick={() => removeWord(word.id)}
          >
            X
          </button>
      )}
      </td>
    </tr>
  )
};
