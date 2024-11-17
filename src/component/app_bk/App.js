import './App.css';
import Button from '../button/Button.js';
import Input from '../input/Input.js';
import List from '../list/List.js';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useState } from 'react';

export default function App({ props }) {
  const [text, setTextInput] = useState("");
  const [list, setList] = useState([]);


  const inputChange = useCallback((e) => {
    setTextInput(e.target.value)
  }, []);

  const onclick = useCallback((e) => {
    setList([{ id: uuidv4(), name: text, isComplete: false }, ...list]);
    setTextInput("");
  }
    , [text, list]);

  return (
    <div className='App'>
      <h3> Detail to do list!</h3>
      <Input value={text} change={inputChange} />
      <Button isDisable={!text} onclick={onclick} />
      <List list={list} />
    </div>
  );
}
