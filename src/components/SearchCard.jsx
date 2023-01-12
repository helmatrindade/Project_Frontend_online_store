import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;

    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>{ price }</h3>
      </div>
    );
  }
}

SearchCard.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchCard;
