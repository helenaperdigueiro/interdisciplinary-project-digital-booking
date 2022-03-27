import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../../../contexts/ProductContext';

const ProductTitle = () => {

    const { product } = useProductContext();

    return (
        <div id="productTitle">
            <a href="javascript:history.back()">
                <button id="previousButton">
                    <FontAwesomeIcon icon={ faChevronLeft } />
                </button>
            </a>

            <div id="informationsTitle">
                <p>{product.category?.title}</p>
                <h3>{product.name}</h3>
            </div>           
        </div>
    );
};

export default ProductTitle;