import './style.css';
import useAxios from '../../../../hooks/useAxios';
import { Link } from 'react-router-dom';

const Recommendations = () => {

    const recommendedProducts = useAxios('/product');

    let shuffle = array => {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

    shuffle(recommendedProducts);

    let randomProducts = recommendedProducts.slice(0, 8);



    return (
        <div id="recommendations">
            <h3>Recomendações</h3>

            <div id="recommendationsList">

                {randomProducts.map(product =>

                    <div key={product.idProduct} id={`recommendation${product.id}`} className="recommendation">

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
    );
}

export default Recommendations;