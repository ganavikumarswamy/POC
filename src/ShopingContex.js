
import { createContext, useContext, useState } from "react";
import faker from "faker";

const CartContext = createContext();

const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: ["https://cdn.pixabay.com/photo/2023/09/11/02/53/house-8245930_1280.jpg"],
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