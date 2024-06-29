import { createContext, useContext } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    {/* The value we pass to our CartContext.Provider becomes available to our consumer */ }
    <CartContext.Provider value={{ items: [], onAddItem: () => { } }}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;