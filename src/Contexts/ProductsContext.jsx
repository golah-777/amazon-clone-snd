import { getItem } from "localforage";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { collection, addDoc, db } from "../Firebase/firebase";
import { json } from "react-router-dom";

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
          qrty: action.qrty,
        },
      ];
    }
    case Actions.IncreamentQrty: {
      return state.map((item) => {
        if (item.id === action.Id) {
          return { ...item, qrty: item.qrty + 1 };
        } else {
          return item;
        }
      });
    }
    case Actions.DecreamentQrty: {
      return state.map((item) => {
        if (item.id === action.Id) {
          if (item.qrty > 1) {
            return { ...item, qrty: item.qrty - 1 };
          } else {
            return { ...item, qrty: (item.qrty = 1) };
          }
        } else {
          return item;
        }
      });
    }
    case Actions.Delete_Item: {
      return state.filter((item) => action.Id != item.id);
    }
    default: {
      return state;
    }
  }
};

const Actions = {
  AddToCart: "Added_To_Cart",
  Delete_Item: "Delete_Item",
  IncreamentQrty: "IncreamentQrty",
  DecreamentQrty: "DecreamentQrty",
};

export const ProductsContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [subTotalPrice, setSubTotalP] = useState(0);
  const initialStates = [];

  useEffect(() => {
    const countQrty = state.reduce((initialCountQrty, nextCountQrty)=>{
      return initialCountQrty + nextCountQrty.qrty
    },0)
    setCount(countQrty);
  });

  const [state, dispatch] = useReducer(reducer, initialStates);
  const addToCart = async (id, title, img, price, qrty, user) => {
    dispatch({
      type: Actions.AddToCart,
      id: id,
      title: title,
      img: img,
      price: price,
      qrty: qrty,
    });

    console.log(user)

    try {
      const docRef = await addDoc(collection(db,'users', {user}), {
        iteems:state
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  };

  const increamentQrty = (id, qrty) => {
    dispatch({ type: Actions.IncreamentQrty, Id: id, Qrty: qrty });
  };

  const decreamentQrty = (id, qrty) => {
    dispatch({ type: Actions.DecreamentQrty, Id: id, Qrty: qrty });
  };

  const deleteItem = (id) => {
    dispatch({ type: Actions.Delete_Item, Id: id });
  };

  return (
    <ProductsContext.Provider
      value={{
        addToCart,
        count,
        state,
        deleteItem,
        decreamentQrty,
        increamentQrty,
        setSubTotalP,
        subTotalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
