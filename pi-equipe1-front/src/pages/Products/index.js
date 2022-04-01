import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import { useDateRangeContext } from '../../contexts/DateRangeContext';

const Products = () => {
    const { filter, productsBy } = useParams();
    const { dateReservation } = useDateRangeContext();

    const products = (useAxios(`/product/${filter === 'categoria' ? `category/${productsBy}` : `city/${productsBy}/${dateReservation[0]}/${dateReservation[1]}`}`));

    console.log(products);

    return (
        <>
            <Helmet>
                <title>{`${productsBy}`}</title>
            </Helmet>
            <div id="productsTitle">
                <Link to="/">
                    <button id="homeButton">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </Link>

                <div id="informationsTitle">
                    <h3>{productsBy}</h3>
                </div>
            </div>

            <div id="products">
                <div id="recommendationsList">

                    {products.map(product =>

                        <div key={product.id} id={`recommendation${product.id}`} className="recommendation">

                            <img src={product.images[0]?.original} alt="" />

                            <div className="recommendationInfo">
                                <p>{product.category.title}</p>
                                <h4>{product.name}</h4>
                                <p>{product.city.name}</p>
                                <p className="description">{product.description}</p>
                                <Link to={`/produto/${product.id}`}><button>Ver detalhes</button></Link>
                            </div>
                        </div>
                    )}
                    {/* {products.length ? null : <h3>Okay, Houston, we've had a problem here.</h3>} */}
                </div>
            </div>
        </>
    );
}

export default Products;