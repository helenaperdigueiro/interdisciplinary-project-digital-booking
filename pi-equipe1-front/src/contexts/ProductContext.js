import { createContext, useContext, useState, useEffect } from "react";

// export const ProductContext = createContext();

// const ProductContextProvider = ({ children }) => {
//     const [product, setProduct] = () => {
//         const storage = localStorage.getItem('product');
//         return storage ? JSON.parse(storage) : [];
//     }

//     useEffect(() => {
//         localStorage.setItem('product', JSON.stringify(product));
//     }, [product]);

//     return(
//         <ProductContext.Provider value={{ product }}>
//             {children}
//         </ProductContext.Provider>
//     )
// }

// export default ProductContextProvider;

//comeca aqui

// export const ProductContext = createContext([]);

// export const ProductContextProvider = props => {
//     const [productInfo, setProductInfo] = useState([]);


//     useEffect(() => {
//         const fetchItems = async () => {
//             const items_fetched = localStorage.getItem('productInfo');

//             if (items_fetched) {
//                 setProductInfo(items_fetched);
//             } else {
//                 // Something went wrong
//             }
//         };

//         fetchItems();
//     }, []);

//     return (
//         <ProductContext.Provider
//             value={{
//                 productInfo, setProductInfo
//             }}
//         >
//             {props.children}
//         </ProductContext.Provider>
//     );
// };


//termina aqui


const ProductContext = createContext();

export default function ProductProvider({children}) {
    const storage = localStorage.getItem('product');
    const [ product, setProduct ] = useState(storage ? storage : []);

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>;
};

export function useProductContext() {
    const context = useContext(ProductContext);

    const { product, setProduct } = context;

    // if(!context){
    //     return {context};
    // }

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