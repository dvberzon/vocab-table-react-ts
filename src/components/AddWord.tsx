import React, { useState } from 'react';
import { Word } from './vocab';
import { TextInput } from './TextInput';

interface AddWordProps {
  addWord: (en: string, nl: string) => void;
};

export const AddWord = ({
  addWord,
}: AddWordProps) => {
  const [en, setEn] = useState('');
  const [nl, setNl] = useState('');
  const handleClick = () => {
    addWord(en, nl);
    setEn('');
    setNl('');
  }
  return (
    <section>
      <h3>Add new word</h3>
      <TextInput
        placeholder="Nederlands"
        setValue={setNl}
        value={nl}
      />
      <TextInput
        placeholder="English"
        setValue={setEn}
        value={en}
      />
      <button onClick={handleClick}>
        Add
      </button>
    </section>
  );
};

