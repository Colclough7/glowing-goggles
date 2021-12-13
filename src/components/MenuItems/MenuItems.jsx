import React from 'react'
import ButtonAddRemove from '../ButtonAddRemove/ButtonAddRemove'
import './MenuItems.css'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selector';










const MenuItems = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem}) => {
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

    const {  id, img, name, price, info } = item
    return (
    <div className='item'>
      <img src={img} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
       
        <ButtonAddRemove
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
    )
}


const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
