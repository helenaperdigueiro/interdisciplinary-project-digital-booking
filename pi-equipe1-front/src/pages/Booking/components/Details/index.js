import './style.css';
import Swal from "sweetalert2";
import { useProductContext } from '../../../../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useDateRangeContext } from '../../../../contexts/DateRangeContext';
import api from '../../../../services/api';

const Details = () => {

    const { product } = useProductContext();

    const [rating, setRating] = useState(4);
    const [hover, setHover] = useState();
    const { dateReservation } = useDateRangeContext();

    function handleclick() {

        api.post('reservation', {
            startDate: dateReservation[0],
            endDate: dateReservation[1],
            product: { id: product.id }
        }).then((response) => {
            const { startDate, endDate} = response.data
            Swal.fire({
                title: "Reserva bem-sucedida",
                icon: 'success',
                text: 'Hotel: ' + product.name +  ' Check-in: ' + startDate + ' Check-out: ' + endDate,
            })
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

                <div className='ratingButton'>
                    {[...Array(5)].map((star, index) => {
                        index += 1;

                        return (
                            <div
                                // type="button"
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                            // onClick={() => setRating(index)}
                            // onMouseEnter={() => setHover(index)}
                            // onMouseLeave={() => setHover(rating)}
                            >
                                <div className="star">&#9733;</div>
                            </div>
                        );
                    })}
                </div>

                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} />

                    <p>{product.city.name}, {product.city.country}</p>
                </div>

                <div className="checkIn">
                    <p>Check-in</p>
                    <p>{dateReservation[0]?.toLocaleDateString()}</p>
                </div>

                <div className="checkOut">
                    <p>Check-out</p>
                    <p>{dateReservation[1]?.toLocaleDateString()}</p>
                </div>

                <button onClick={handleclick}>Confirmar reserva</button>
            </div>
        </div>
    );
}

export default Details;