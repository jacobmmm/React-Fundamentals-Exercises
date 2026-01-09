import InputField from "./InputField"

const UserForm = ({onAdd,firstName,lastName,userName, firstNameChange, lastNameChange, userNameChange, errorMessage}) => {

    return (<>
        <form onSubmit={onAdd}>
        <InputField placeholder="First Name" value={firstName} changeFunction={firstNameChange} />
        <InputField placeholder="Last Name" value={lastName} changeFunction={lastNameChange} />
        <InputField placeholder="User Name" value={userName} changeFunction={userNameChange} />
        {/* <input
        {/* <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={firstNameChange}
        /> */}
        {/* <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={lastNameChange}
        /> */}
        {/* <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={userNameChange}
        /> */}
        {errorMessage && <p>{errorMessage}</p>}
        <button >Add</button>
      </form>
        </>)
}

export default UserForm;