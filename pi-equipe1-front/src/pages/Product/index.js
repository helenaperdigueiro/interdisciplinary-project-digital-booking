import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import ProductContext, { useProductContext } from '../../contexts/ProductContext';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Image from './components/Image';
import Description from './components/Description';
import Characteristic from './components/Characteristic';
import { Helmet } from 'react-helmet-async';
import Calendar from './components/Calendar';
import Map from './components/Map';
import Policy from './components/Policy';
import { useContext, useEffect } from 'react';



const Product = () => {
    const { productId } = useParams();
    const product1 = useAxios(`/product/${productId}`);

    const { product, setProduct } = useProductContext();

    // const { product } = useContext(ProductContext);
    

    // useEffect(() => { 
    //     localStorage.setItem('product', JSON.stringify(product1))}, [product1]);

    setProduct(product1);
    // console.log(product);


    //Aqui

        // const { productInfo, setProductInfo } = useContext(ProductContext);
    // let product2 = setProductInfo(product);

    // localStorage.setItem('signed', JSON.stringify([values.email]));
    // setUser([values.email])


    // useEffect((setProduct) => {
    //     localStorage.setItem('product', JSON.stringify(product));
    //     setProduct([product]);
    // }, [product]);


    //até aqui





    return (
        <>
            <Helmet>
                <title>{`db | ${product.name ? product.name : ""}`}</title>
            </Helmet>
            <ProductTitle />
            <Location />
            <Image />
            <Description />
            <Characteristic/>
            <Calendar />
            <Map />
            <Policy />
        </>
    );
};

export default Product;