import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      // Check if item already exists
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      // If item does NOT exist → add it with amount = 1
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1, selected: false }],
        };
      }

      // If item exists → increase amount
      const updatedBasket = state.basket.map((item) =>
        item.id === action.item.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );

      return {
        ...state,
        basket: updatedBasket,
      };
    }
case Type.TOGGLE_GIFT_OPTION:
  return {
    ...state,
    basket: state.basket.map((item) =>
      item.id === action.id
        ? { ...item, gift: !item.gift }
        : item
    ),
  };


    case Type.REMOVE_FROM_BASKET: 
    return { 
      ...state, 
      basket: state.basket
      .filter((item) => item.id !== action.id), 
    };

    case Type.INCREASE_QTY:
      return { 
        ...state, 
        basket: state.basket
        .map((item) => item.id === action.id 
        ? { ...item, amount: item.amount + 1 } 
        : item ), 
      }; 
      
    case Type.DECREASE_QTY: 
      return { 
        ...state, 
        basket: state.basket 
        .map((item) => 
          item.id === action.id 
        ? { ...item, amount: Math.max(1, item.amount - 1) } 
        : item ) .filter((item) => item.amount > 0), 
      };

      


    default:
      return state;
  }
};
