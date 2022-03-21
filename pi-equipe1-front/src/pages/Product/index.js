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

const Product = () => {

    const { product, setProduct } = useProductContext();

    const { productId } = useParams();
    const product1 = useAxios(`/product/${productId}`);

    localStorage.setItem('product', JSON.stringify({product1}));

    setProduct(product1);
    console.log(product);

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