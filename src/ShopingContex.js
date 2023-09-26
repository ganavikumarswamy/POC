
import { createContext, useContext, useState } from "react";
import faker from "faker";

const CartContext = createContext();

const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products ,setProducts] = useState(productsArray);
  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default ContextProvider;