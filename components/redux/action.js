import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants';

export function addToCart(item){ // isme hum 2 chij add karte hai: 1. Data, 2. Type
  return{
    type: ADD_TO_CART,
    payload: item       // payload || data
  }
}


export function removeFromCart(item){
  return{
    type: REMOVE_FROM_CART,
    payload: item
  }
}

// isko vaha pr import karenge jaha pr humara button bna hua h, add to cart ka // jaha se action hona hai



export function getUserList(){
  return{
    type: USER_LIST
  }
}