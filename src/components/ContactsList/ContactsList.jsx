import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

class ContactsList extends Component {
  render() {
    const { contacts, filter, handleDeleteContact } = this.props;
    let newArray = [];

    if (filter) {
      newArray = [
        ...contacts.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        ),
      ];
    } else {
      newArray = [...contacts];
    }

    return (
      <ul className={css.contacts__list}>
        {newArray.map(({ name, number, id }) => {
          return (
            <li key={id} className={css.contacts__item}>
              {name} {number}
              <button
                onClick={() => handleDeleteContact(id)}
                className={css.contacts__delete}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func,
};

export default ContactsList;
