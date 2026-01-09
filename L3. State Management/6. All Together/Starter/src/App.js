import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"
import Header from "../../../5. Controlled Components II/Starter/src/components/header"
import UserForm from "./components/userForm"
import UserInfo from "./components/UserInfo"

const App = () => {
  const [users,setUsers] = useState([])
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [userName,setUserName] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showGames,setShowGames] = useState(true)

  const firstNameChange = (event) => {
        
        setFirstName(event.target.value)
        console.log("First Name on typing: ",firstName)
  }

  const lastNameChange = (event) => {
        setLastName(event.target.value)
        console.log("Last Name on typing: ",lastName)
  }

  const toggleGameDisplay = () => {
    setShowGames( (sg)=>!sg )
  }

  const userNameChange = (event) => {
    setUserName(event.target.value)
    console.log("User Name on typing: ",userName)
  }

  const onAdd = (event) => {
    event.preventDefault();
    console.log("Username is ",userName)
    console.log("First Name is: ",firstName)
    console.log("Last Name is: ", lastName)

    if (!Array.isArray(users)) {
        console.error("Error: `users` is not an array. Current value:", users);
        return;
    }

    if(firstName.length===0 || lastName.length===0 || userName.length===0){
   
      setErrorMessage("Please fill in all fiedls ")
      return;
    }

    if(users.map((user) => user.userName).includes(userName)){
        setErrorMessage("Username already present")
        return;
    }
    console.log("Form Submitted")
    console.log("users is: ",users)
    const updatedUsers = [...users, { firstName, lastName, userName, games: 0 }];
    console.log("Updated User: ",updatedUsers)
    setUsers(updatedUsers)
    if (errorMessage)
      setErrorMessage("")

  }

  
  return (
    <div className="App">
      <Header />
      <UserForm onAdd={onAdd} firstName={firstName} lastName={lastName} userName={userName}  firstNameChange={firstNameChange} lastNameChange={lastNameChange} userNameChange={userNameChange} errorMessage={errorMessage} />
      <UserInfo users={users} showGames={showGames} toggleGameDisplay={toggleGameDisplay} />
    </div>
  );
};

export default App;
