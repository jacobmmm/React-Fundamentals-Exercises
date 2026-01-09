const InputField = ({placeholder,value, changeFunction}) => {
    return(
    <div>
    <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={changeFunction}
        />
    </div>
        )
}

export default InputField;