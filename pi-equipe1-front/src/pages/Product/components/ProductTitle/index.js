import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './style.css';


const ProductTitle = () => {
    return (
        <div id="productTitle">
            <Link to="/">
                <button id="previousButton">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </Link>

            <div id="informationsTitle">
                <p>Hotel</p>
                <h3>Bermitage Hotel</h3>
            </div>
           
        </div>
    );
};

export default ProductTitle;