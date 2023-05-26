import React from "react";


class App extends React.Component {
  
  state = {
    contacts: [],
    name: '',
    number: '',
  }
  
  render() {
  
    return (
      <>
        <h1>Phonebook</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    )
}

};

export default App;