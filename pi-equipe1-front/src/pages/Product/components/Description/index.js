import './style.css';

const Description = () => {

    const product = {
        city: {
            name: "Buenos Aires"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde."
    }

    return (
        <div id="description">
            <h3>Fique no coração de {product.city.name}</h3>
            <p>{product.description}</p>
        </div>
    );
};

export default Description;