import React from 'react'
import './CartCounterButton.css'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';





const CartCounterButton = ({cartCount}) =>  {
  const navigate = useNavigate();
  return (
    <div className='btnCartCount' onClick={() => navigate('/cart')}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i className='fas fa-shopping-cart'></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCounterButton);
