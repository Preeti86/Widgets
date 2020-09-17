import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

function App() {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}

export default App;
