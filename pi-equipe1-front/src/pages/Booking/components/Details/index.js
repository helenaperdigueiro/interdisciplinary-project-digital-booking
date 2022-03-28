import './style.css';
import { useProductContext } from '../../../../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Details = () => {

    const { product } = useProductContext();

    const [rating, setRating] = useState(4);
    const [hover, setHover] = useState();

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
                    <p>23/11/2022</p>
                </div>

                <div className="checkOut">
                    <p>Check-out</p>
                    <p>27/11/2022</p>
                </div>

                <button>Confirmar reserva</button>
            </div>
        </div>
    );
}

export default Details;