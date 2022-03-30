import './style.css';
import { useProductContext } from '../../contexts/ProductContext';
import ProductTitle from '../Product/components/ProductTitle';
import { Helmet } from 'react-helmet-async';
import PersonalData from './components/PersonalData';
import CalendarAvailability from '../../components/CalendarAvailability';
import Details from './components/Details';
import Policy from '../Product/components/Policy';
import CheckinTime from './components/CheckinTime';

const Booking = () => {

    const { product } = useProductContext();


    return (
        <>
            <Helmet>
                <title>{`${product.name} | Reserva`}</title>
            </Helmet>
            <ProductTitle />

            <div id="bookingInfo">
                <div id="leftColumn">
                    <PersonalData />

                    <div>
                        <h4>Selecione sua data de reserva</h4>
                        <div id="calendarAvailabilityBooking">
                            <CalendarAvailability />
                        </div>
                    </div>

                    <CheckinTime />
                </div>

                <Details />
            </div>

            <Policy />
        </>
    );
}

export default Booking;