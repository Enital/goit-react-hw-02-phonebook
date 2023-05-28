import React from "react";
import ContactItem from "components/ContactItem/ContactItem";

import css from './showContacts.module.css'

function ShowContacts( {contacts, deleteContact }) {
    if (contacts) {
        return (
            <ul>
                Contacts
                {contacts.map(({ id, name, number }) => {                    
                    return (
                        <li key={id} className={css.li}>
                            <ContactItem key={id} name={name} number={number} />
                            <button className={css.delete} onClick={() => deleteContact(id)}>Delete contact</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ShowContacts;