

const ListContacts = ( { contacts, removeContact } ) => {

    const [query,setQuery] = useState("")

    const updateQuery = (query) => {
        setQuery(query)
    }
    
    return( 

        <div className="list-contacts">

        <div className="list-contacts-top">
            <input className="search-contacts" type="text" placeholder="Search Contact" value={query} onChange={(e) => updateQuery(e.target.value)} />
        </div>


         <ol className="contact-list">
        {
            contacts.map((contact) => (
                <li key={contact.id} className="contact-list-item"> 
                
                <div className="contact-avatar" style={{
                    backgroundImage: `url(${contact.avatarURL})`,
                }}>

                </div>
                <div className="contac-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
                </div>
                <button className="contact-remove" onClick={() => removeContact(contact)}></button>

                
                 </li>

            ))
        }
        </ol>

        </div>
       

    )

}

export default ListContacts;