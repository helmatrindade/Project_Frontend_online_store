import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends Component {
  state = {
    apiReturn: [],
  };

  async componentDidMount() {
    const apiReturn = await getCategories();
    this.setState({ apiReturn });
  }

  render() {
    const { apiReturn } = this.state;

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="cart">Carrinho</Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div className="categories">
          {
            apiReturn.map((category) => (
              <label data-testid="category" key={ category.id } htmlFor="categories">
                { category.name }
                <input type="radio" name="categories" id="" />
              </label>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Home;
