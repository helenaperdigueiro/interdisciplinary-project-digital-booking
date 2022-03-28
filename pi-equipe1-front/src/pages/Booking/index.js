import './style.css';
import { useProductContext } from '../../contexts/ProductContext';
import ProductTitle from '../Product/components/ProductTitle';
import { Helmet } from 'react-helmet-async';
import Details from './components/Details';
import Policy from '../Product/components/Policy';


const Booking = () => {

    const { product } = useProductContext();

    return (
        <>
            <Helmet>
                <title>{`db | ${product.name} | reserva`}</title>
            </Helmet>
            <ProductTitle />

            <div id="bookingInfo">
                <Details />
            </div>

            <Policy />
        </>
    );
}

export default Booking;