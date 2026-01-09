import "./App.css";
import contacts from  "./contactDetails"
import ListContacts from "./components/ListContacts"

const App = () => {
    return <div> <ListContacts contacts={contacts} /> </div>
};

export default App;
