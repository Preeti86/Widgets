import React, { useState }from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javaScript frameworkd'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among enginners'
  },
  {
    title: 'How do you use React?',
    content: 'you use React by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The shade is blue',
    value: 'blue',
  },
];

export default () =>{
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropDown(!showDropDown)}>Toggle Dropdown</button>
      {showDropDown ? ( 
        <DropDown  
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
        />
      ) : null}
    </div>
  );
  }



