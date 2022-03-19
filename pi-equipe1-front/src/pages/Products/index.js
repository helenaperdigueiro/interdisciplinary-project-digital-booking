import './style.css';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';

const Products = () => {
    const { filter, productsBy } = useParams();
    
    const products = useAxios(`/product/${filter === 'categoria' ? 'category' : 'city'}/${productsBy}`);

    console.log(products);

    return (
        <>
            <Helmet>
                <title>{`db | ${productsBy}`}</title>
            </Helmet>
            <div id="productsTitle">
                <Link to="/">
                    <button id="previousButton">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </Link>

                <div id="informationsTitle">
                    <h3>{productsBy}</h3>
                </div>
            </div>
            {/* <div id="categorydDescription">
                <h4>{filter === 'categoria' ? products[1].category.description : " "}</h4>
            </div> */}
            <div id="products">
                <div id="recommendationsList">

                    {products.map(product =>

                        <div key={product.idProduct} id={`recommendation${product.idProduct}`} className="recommendation">

                            <img src={product.images[0].url} alt="" />

                            <div className="recommendationInfo">
                                <p>{product.category.title}</p>
                                <h4>{product.name}</h4>
                                <p>{product.city.name}</p>
                                <p className="description">{product.description}</p>
                                <Link to={`/produto/${product.idProduct}`}><button>Ver detalhes</button></Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default Products;