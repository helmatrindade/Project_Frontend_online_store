import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }
}

export default List;
