import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleEnterName = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClearState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { handleAddContact } = this.props;
    const { name, number } = this.state;

    return (
      <form
        onSubmit={event =>
          handleAddContact(event, name, number, this.handleClearState)
        }
        className={css.contact__form}
      >
        <label className={css.contact__name}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleEnterName}
            value={name}
          />
          <label className={css.contact__number}>
            Number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleEnterName}
            />
          </label>
        </label>
        <button className={css.contact__button}>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
