import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useProductContext } from '../../contexts/ProductContext';
import ProductTitle from '../Product/components/ProductTitle';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Details from './components/Details';
import Policy from '../Product/components/Policy';


const Booking = () => {
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
                <title>{`db | ${product.name ? product.name : ""} | reserva`}</title>
            </Helmet>
            <ProductTitle />
            <Details />
            <Policy />
        </>
    );
}

export default Booking;