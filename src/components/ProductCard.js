import React from 'react';
import PropTypes from 'prop-types';


const ProductCard = props => {
  const { image_url = null, Status = null, ProductName = null  } = props.product || {};

 if(Status=='ACTIVE'){
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 product-card">
      <div className="product-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
           <img src={image_url} />
        </div>
        <div className="px-3">
          <span className="product-name text-dark d-block font-weight-bold activeClass">{ProductName}</span>
          <span className="product-region text-secondary text-uppercase activeClass">{Status}</span>
         </div>
      </div>
    </div>
  )
}else{
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 product-card">
      <div className="product-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
           <img src={image_url} />
        </div>
        <div className="px-3">
          <span className="product-name text-dark d-block font-weight-bold inactiveClass">{ProductName}</span>
          <span className="product-region text-secondary text-uppercase inactiveClass">{Status}</span>
         </div>
      </div>
    </div>
  )
}
  
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    Status: PropTypes.string.isRequired,
    ProductName: PropTypes.string.isRequired
  }).isRequired
};

export default ProductCard;
