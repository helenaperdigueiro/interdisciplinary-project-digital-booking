import { useParams } from 'react-router-dom';
import useAxios from '../../../../hooks/useAxios';
import './style.css';



const Description = () => {

    const { productId } = useParams();
    const productD = useAxios(`/product/${productId}`);

    const product = {
        city: {
            name: "Buenos Aires"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde."
    }

    return (
        <div id="description">
            <h3>Fique no coração de {product.city.name}</h3>
            <p>{productD.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nostrum est fugiat in, commodi facere quidem, vero nisi aliquid, voluptatum sit laudantium. Unde sint deserunt esse doloremque at, accusamus quae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus totam minima! Animi quod similique, doloremque blanditiis veritatis corporis rerum labore quos fugit quam magni cupiditate, ipsum, impedit iusto excepturi.</p>
        </div>
    );
};

export default Description;