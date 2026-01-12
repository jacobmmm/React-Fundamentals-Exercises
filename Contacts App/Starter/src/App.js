import "./App.css";
import { useState } from 'react';
//import contacts from  "./contactDetails"
import ListContacts from "./components/ListContacts"
import CreateContact from "./components/CreateContact"


const App = () => {
const [contacts,setContacts] = useState([
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
])
const [screen,setScreen] = useState("list")

 const removeContact = (contact) => {

    setContacts(contacts.filter(c => c.id!=contact.id))

 }

  return ( 
    <div>
        {
            screen === "list" && (<ListContacts contacts={contacts} removeContact={removeContact} />)
        }
        {
            screen === "create" && (<CreateContact />)
        }
    </div>

  )  
};

export default App;
