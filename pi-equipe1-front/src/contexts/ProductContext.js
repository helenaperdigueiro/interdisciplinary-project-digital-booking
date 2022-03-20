import { createContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useAxios from "../hooks/useAxios";

export const ProductContext = createContext([]);

export const ProductContextProvider = props => {
    const [productInfo, setProductInfo] = useState([]);

    // const { productId } = useParams();
    // const product = useAxios(`/product/${productId}`);
    // const product = useAxios('/product');

    // console.log(productId);
    // console.log(product);

    // const deleteItem = id => {
    //     deleteItemsAxios(id).then(() => {
    //         setProductInfo(items => items.filter(item => item.id !== id));
    //     });
    // };

    useEffect(() => {
        const fetchItems = async () => {
            const items_fetched = localStorage.getItem('productInfo');

            if (items_fetched) {
                setProductInfo(items_fetched);
            } else {
                // Something went wrong
            }
        };

        fetchItems();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                productInfo, setProductInfo
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
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