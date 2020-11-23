import React,{useState} from 'react';
import './App.css';
// Importing Components
import Form from './components/form'
import TodoList from './components/to_do'



function App() {
  const [inputText, setInputText] = useState("")
  return (
    <div className= "App">
     <header>
       To Do List {inputText}
       </header>
       <Form setInputText = {setInputText} />  
       <TodoList />
     </div>
  );
}

export default App;
