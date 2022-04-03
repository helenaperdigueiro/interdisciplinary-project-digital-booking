import './style.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import api from '../../services/api';

const Products = () => {
    const { productsBy, startDate, endDate, title } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        if (productsBy && endDate)
            api.get(`/product/city/${productsBy}/${startDate}/${endDate}`)
                .then((response) => { setProducts(response.data) })
                .catch((error) => { console.error(error) })
        else if (productsBy)
            api.get(`/product/city/${productsBy}`)
                .then((response) => { setProducts(response.data) })
                .catch((error) => { console.error(error) })
        else if (endDate)
            api.get(`/product/dates/${startDate}/${endDate}`)
                .then((response) => { setProducts(response.data) })
                .catch((error) => { console.error(error) })
        else
            api.get(`/product/category/${title}`)
                .then((response) => { setProducts(response.data) })
                .catch((error) => { console.error(error) })
        return;
    }, [productsBy, startDate, endDate, title])

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
                </div>
            </div>
        </>
    );
}

export default Products;