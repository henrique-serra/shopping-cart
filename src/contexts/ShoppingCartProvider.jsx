import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export default function ShoppingCartProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{ cart, setCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}