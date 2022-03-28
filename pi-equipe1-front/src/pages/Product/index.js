import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useProductContext } from '../../contexts/ProductContext';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Image from './components/Image';
import Description from './components/Description';
import Characteristic from './components/Characteristic';
import { Helmet } from 'react-helmet-async';
import Calendar from './components/Calendar';
import Map from './components/Map';
import Policy from './components/Policy';
import { useEffect } from 'react';



const Product = () => {
    const { productId } = useParams();
    const productData = useAxios(`/product/${productId}`);

    const { product, setProduct } = useProductContext();
    
    useEffect(() => {
            localStorage.setItem('product', JSON.stringify(productData));
            setProduct(productData); // tiramos os colchetes do productData
        }, [productData, setProduct]);

    return (
        <>
            <Helmet>
                <title>{`${product.name ? product.name : ""}`}</title>
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