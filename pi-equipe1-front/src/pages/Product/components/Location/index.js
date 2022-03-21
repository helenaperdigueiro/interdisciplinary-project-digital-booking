import './style.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useProductContext } from '../../../../contexts/ProductContext';

const Location = () => {

    const { product } = useProductContext();

    const [rating, setRating] = useState(4);
    const [hover, setHover] = useState(0);

    return (
        <div id="locationProduct">
            <div id="locationInformation">
                <FontAwesomeIcon icon={faLocationDot} />

                <div id="adress">
                    <p>{ product.city?.name }, { product.city?.country }</p>
                    <p>Cidade de { product.city?.name }</p>
                    <p>940 m para o centro</p>
                </div>
            </div>

            <div id="ratingInformation">
                <div className="ratingStar">
                    <p>Muito bom</p>

                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button id="ratingButton"
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <div className="star">&#9733;</div>
                            </button>
                        );
                    })}
                </div>

                <div id="grade">
                    <h5>8</h5>
                </div>

            </div>
        </div>
    );
};

export default Location;