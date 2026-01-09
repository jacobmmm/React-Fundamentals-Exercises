
const ItemField = ({onAdd,startChange,emptyInput,value}) => {
    return (
        <>
        <form onSubmit={onAdd}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={startChange}
        />
        <button disabled={emptyInput()}>Add</button>
      </form>
        </>
    )
}

export default ItemField