import './style.css';
import Swal from "sweetalert2";
import { useUserContext } from '../../../../contexts/UserContext';
import { useProductContext } from '../../../../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useDateRangeContext } from '../../../../contexts/DateRangeContext';
import api from '../../../../services/api';
import { useNavigate } from 'react-router-dom';
import Rating from '../../../../components/Rating';

const Details = () => {

    const { user } = useUserContext();

    const { product } = useProductContext();

    const navigate = useNavigate();

    const [rating, setRating] = useState(4);
    const [hover, setHover] = useState();

    const { dateReservation } = useDateRangeContext();

    function handleClick() {

        api.post('reservation', {
            startDate: dateReservation[0],
            endDate: dateReservation[1],
            // userAccount: { id: user.id },
            product: { id: product.id }
        }, { headers: {"Authorization" : `Bearer ${user.token}`} }).then((response) => { 
            const { startDate, endDate} = response.data
            navigate('/reserva-confirmada')
        }).catch((error) => {
            console.error(error);
            Swal.fire({
                title: "Infelizmente a reserva não pôde ser feita",
                icon: 'error',
                text: error,
            })
        });
    }

    return (
        <div id="bookingDetails">
            <div id="summaryImage">
                <h4>Detalhes da Reserva</h4>
                <img src={product.images[0]?.original} alt="" />
            </div>

            <div id="summary">
                <p>{product.category?.title}</p>
                <h5>{product.name}</h5>

                <Rating />

                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} />

                    <p>{product.city.name}, {product.city.country}</p>
                </div>

                <div className="checkIn">
                    <p>Check-in</p>
                    <p>{dateReservation[0]?.toLocaleDateString('pt-BR')}</p>
                </div>

                <div className="checkOut">
                    <p>Check-out</p>
                    <p>{dateReservation[1]?.toLocaleDateString('pt-BR')}</p>
                </div>

                <button onClick={handleClick}>Confirmar reserva</button>
            </div>
        </div>
    );
}

export default Details;