import './style.css';
import { useProductContext } from '../../contexts/ProductContext';
import ProductTitle from '../Product/components/ProductTitle';
import { Helmet } from 'react-helmet-async';
import PersonalData from './components/PersonalData';
import Details from './components/Details';
import Policy from '../Product/components/Policy';

const Booking = () => {

    const { product } = useProductContext();

    return (
        <>
            <Helmet>
                <title>{`${product.name} | Reserva`}</title>
            </Helmet>
            <ProductTitle />

            <div id="bookingInfo">
                <PersonalData />
                <Details />
            </div>

            <Policy />
        </>
    );
}

export default Booking;