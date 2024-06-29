import { Product, CartItem } from '@assets/types/types';
import { PropsWithChildren, createContext, useState } from 'react';

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
};

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => { }
});

// Importing the PropsWithChildren type from react because TypeScript was yelling at
// us that the children prop was untyped. 
const CartProvider = ({ children }: PropsWithChildren<{}>) => {
    const [items, setItems] = useState<CartItem[]>([]);

    function addItem(product: Product, size: CartItem['size']) {
        const newCartItem: CartItem = {
            id: '1',
            product,
            product_id: product.id,
            size,
            quantity: 1
        };

        // Settings "items" to an array of the newCartItem and then the rest of the
        // items that already exist in the cart.
        setItems([newCartItem, ...items]);
    };

    {/* The value we pass to our CartContext.Provider becomes available to our consumer */ }
    <CartContext.Provider value={{ items: items, addItem: addItem }}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;