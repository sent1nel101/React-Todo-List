import './App.css';
// import Header from './components/Header';
import Form from './components/Form';
import FormList from './components/FormList';
import {useState} from 'react'

function App() { 
    const [contacts, setContacts] = useState(["andy warhol", "samantha fox", "gustavo batista"])
    const [text, setText] = useState("")
  function handleSubmit (e) { 
        setText('')
        e.preventDefault()
        text != "" ? setContacts([...contacts, text]) : alert('enter a new name')
    }
    const handleChange = (e, props)=>{
        setText(e.target.value)
    }  
  return (
    <div className="App">
    <h1>Darec's Contact List</h1>
    <Form value={text} onSubmit={handleSubmit} onChange={handleChange}/>
    <FormList data={contacts} />
    </div>
  );
}

export default App;
