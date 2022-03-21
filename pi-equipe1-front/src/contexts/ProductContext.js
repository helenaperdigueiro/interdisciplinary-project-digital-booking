import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export default function ProductProvider({children}) {
    const storage = localStorage.getItem('product');
    const [ product, setProduct ] = useState(storage);

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>;
};

export function useProductContext() {
    const context = useContext(ProductContext);

    const { product, setProduct } = context;

    return { product, setProduct };
};






// const ProductContext = createContext();

// export default function UserProvider({ children }) {
    
//     const storage = localStorage.getItem('productInfo');
//     const [productInfo, setProductInfo] = useState(storage);

//     return <ProductContext.Provider value={{ productInfo, setProductInfo }}>{children}</ProductContext.Provider>;
// }

// export function useProductContext() {

//     const context = useContext(ProductContext);

//     const { productInfo, setProductInfo } = context;

//     return { productInfo, setProductInfo }
// }