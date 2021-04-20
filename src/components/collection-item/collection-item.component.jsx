import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
  <div className='collection-item'>
    <div
      className='image'
      style= {{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  //addItem function will be put into CollectionItem and is able to be called in there (side note: it is called in the onClick of CustomButton with an arrow function)
  //when called the 'item' will be passed as a prop and get called with the 'addItem(item)' action creater, that exists in cart.actions.js
  //cart.actions.js returns an object containing 'type and payload'
  //the returned items with run the dispatch function which returns that object to the store.js which then goes through the redux flow
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);