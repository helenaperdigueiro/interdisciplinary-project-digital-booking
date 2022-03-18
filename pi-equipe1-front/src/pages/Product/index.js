import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { ProductContext } from '../../contexts/ProductContext';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Calendar from './components/Calendar';
import Characteristic from './components/Characteristic';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import Description from './components/Description';
import Image from './components/Image';
import Policy from './components/Policy';

const Product = () => {

    const { productId } = useParams();
    console.log(productId);
    const product = useAxios(`/product/${productId}`);

    // const { productInfo, setProductInfo } = useContext(ProductContext);

    console.log(product);

    // let product2 = setProductInfo(product);



    // useEffect(() => {
    //     localStorage.setItem('ProductInfo', JSON.stringify([product]));
    //     setProductInfo([product]);
    // }, [product]);

    return (
        <>
            <Helmet>
                <title>{`db | ${product.name}`}</title>
            </Helmet>
            <ProductTitle />
            <Location />
            <Image />
            <Description />
            <Characteristic/>
            <Calendar />
            <Policy />
        </>
    );
};

export default Product;