import './App.css';
// import Header from './components/Header';
import Form from './components/Form';
import FormList from './components/FormList';
import {useState} from 'react'

function App() { 
    const [contacts, setContacts] = useState([])
    const [emailContacts, setEmailContacts] = useState([])
    const [text, setText] = useState("")
    const [email, setEmail] = useState("")
  function handleSubmit (e) { 
        e.preventDefault()
        text !== "" ? setContacts([...contacts, text]) : alert('enter a new name')
        setText("")
        setEmailContacts([...emailContacts, email])
      }
      
      function handleClick(){
        console.log('clicked')        
  }
    const handleTextChange = (e)=>{
        setText(e.target.value)
    }  
    const handleEmailChange = (e)=>{
      setEmail(e.target.value)
  }  
  return (
    <div className="App">
    <h1>Darec's Contact List</h1>
    <hr />
    <Form onClick={handleClick} valueEmail={email} valueText={text} onSubmit={handleSubmit} onTextChange={handleTextChange} onEmailChange={handleEmailChange}/>
    <hr/>
    <FormList data={contacts} emailData={emailContacts}/>
    </div>
  );
}

export default App;
