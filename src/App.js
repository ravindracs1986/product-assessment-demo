import './App.css';
import React, { Component } from 'react';

import Pagination from './components/Pagination';
import ProductCard from './components/ProductCard';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  state = { allProducts: [], currentProducts: [], currentPage: null, totalPages: null }

  componentDidMount() {

    fetch('http://demo3587227.mockable.io/productList').then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
     this.setState({allProducts: data});
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });

  }

  onPageChanged = data => {
    
    const { allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  }

  render() {
    const { allProducts, currentProducts, currentPage, totalPages } = this.state;
    const totalProducts = allProducts.length;
    
    if (totalProducts === 0) return null;

    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
      <div>
      <Header />
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
       
          <h2 className="text-md-center">Welcome to Product -assessment demo</h2>
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">

            {/*   <h2 className={headerClass}>
                <strong className="text-secondary">{totalProducts}</strong> Products
              </h2> */}

              {/* { currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              ) } */}

            </div>

            {/* <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalProducts} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div> */}
          </div>

          { currentProducts.map(product => <ProductCard key={product.UPC12Number} product={product} />) }

          <div className="product__pagination w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                        {/* <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a> */}
             <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalProducts} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
            </div>
        </div>
      </div>
       <Footer />
       </div>
    );
  }


}
export default App;
