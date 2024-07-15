import { SectionList } from "react-native";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [];


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        action.payload
      ];

    case REMOVE_FROM_CART:
      let result = state.filter(item => {
        return item.name != action.data
      })
      return [...result]

    default:
      return state;
  }

}

// initialState me humne ampty array rakha hai, kyoki shuru me list me kuch nhi hoga,
// aur idhar action ka matlab, action ki file se hume jo bhi functionality mil rhi hai vo hai,
// like : abhi add_to_cart functionality hai, iski sath sath or bhi ho sakti hai like: remove_to_cart, so on...