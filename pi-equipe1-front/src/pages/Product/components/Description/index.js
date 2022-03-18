import './style.css';

const Description = () => {

    const hotel = {
        city: {
            name: "Buenos Aires"
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero quod quos autem mollitia. Commodi alias aut accusamus facilis repudiandae rem fugiat, dicta non, cumque nesciunt vel, totam pariatur unde."
    }

    return (
        <div id="description">
            <h3>Fique no coração de {hotel.city.name}</h3>
            <p>{hotel.description}</p>
        </div>
    );
};

export default Description;