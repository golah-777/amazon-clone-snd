import React, { createContext, useEffect, useReducer, useState } from "react";

export const ProductsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.AddToCart: {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          img: action.img,
          price: action.price,
        },
      ];
    }
    default: {
      return state;
    }
  }
};

const Actions = {
  AddToCart: "Added_To_Cart",
};

export const ProductsContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const initialStates = [];

  useEffect(() => {
    setCount(state.length);
  });

  const [state, dispatch] = useReducer(reducer, initialStates);
  const addToCart = (id, title, img, price) => {
    dispatch({
      type: Actions.AddToCart,
      id: id,
      title: title,
      img: img,
      price: price,
    });
  };

  return (
    <ProductsContext.Provider value={{ addToCart, count }}>
      {children}
    </ProductsContext.Provider>
  );
};
