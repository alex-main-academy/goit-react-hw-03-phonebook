import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchContact.module.css';

class SearchContact extends Component {
  render() {
    const { filter, handleFilter } = this.props;

    return (
      <>
        <label className={css.find__contacts}>
          Find contacts by name:{' '}
          <input
            type="text"
            name="search"
            value={filter}
            onChange={handleFilter}
          />
        </label>
      </>
    );
  }
}

SearchContact.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default SearchContact;
