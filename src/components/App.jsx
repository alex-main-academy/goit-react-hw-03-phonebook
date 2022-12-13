import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import SearchContact from './SearchContact/SearchContact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('users')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('users')),
      });
    }

    return;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts === prevState.contacts) {
      return;
    }

    localStorage.setItem('users', JSON.stringify(this.state.contacts));
  }

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleAddContact = (event, name, number, handleClearState) => {
    event.preventDefault();

    const isUser = Boolean(
      this.state.contacts.find(item => item.name === name)
    );

    if (isUser) {
      alert(`${name} is already in contacts`);
      handleClearState();
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            name: name,
            number: number,
            id: nanoid(),
          },
        ],
      }));

      handleClearState();
    }
  };

  handleDeleteContact = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(item => item.id !== id)],
    });
  };

  render() {
    return (
      <section className="phonebook">
        <h1 className="phonebook__title">Phone book</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2 className="contacts__title">Contacts:</h2>
        <SearchContact
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleFilter={this.handleFilter}
          handleDeleteContact={this.handleDeleteContact}
        />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDeleteContact={this.handleDeleteContact}
        />
      </section>
    );
  }
}
