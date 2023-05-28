import React from "react";
import Form from "./Form/Form";
import ShowContacts from "./ShowContacts/ShowContacts";

import css from './app.module.css'

class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  }
  
  formSubmit = ({ name, id }) => {
    console.log({name, id});
    this.setState(prevState => {
      console.log(this.state.contacts)
      return {
        contacts: [{ name, id }, ...prevState.contacts],
      };
    })
    console.log(this.state)
  } 

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {

    return (
      <div className={css.container}>
        <section>
          <h2 className={css.title}>Phonebook</h2>
          <Form className={css.form} onSubmit={this.formSubmit} />
        </section>
        <section>
          <ShowContacts contacts={this.state.contacts} deleteContact={this.deleteContact} />
        </section>
      </div>
    )
  }
}

export default App;