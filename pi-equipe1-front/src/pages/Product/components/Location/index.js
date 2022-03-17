import './style.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
    return (
        <>
            <div id="locationArea">
                <div id="locationIcon">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <div id="informationsAdress">
                    <p>Buenos Aires, Cidade Autônoma de Buenos Aires, Argentina</p>
                    <p>940 m para o centro</p>
                </div>
            </div>

            <div id="rating">
                <Rating
                    emptySymbol={"fa fa-star fa-2x"}
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}
                />
            </div>
        </>
    );
};

export default Location;