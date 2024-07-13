import {ADD_TO_CART} from './constants';

export function addToCart(item){ // isme hum 2 chij add karte hai: 1. Data, 2. Type
  return{
    type: ADD_TO_CART,
    payload: item       // payload || data
  }
}

// isko vaha pr import karenge jaha pr humara button bna hua h, add to cart ka // jaha se action hona hai