import './style.css';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    const hotels = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds"
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds"
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds"
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds"
        },
        {
            id: 7,
            img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Fall in then scramble in a mad panic to get out meowsiers."
        },
        {
            id: 8,
            img: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers."
        }
    ];

    return (
        <div id="recommendations">
            <h3>Recomendações</h3>

            <div id="recommendationsList">

                {hotels.map(hotel =>

                    <div key={hotel.id} id={`recommendation${hotel.id}`} className="recommendation">
                        
                        <img src={hotel.img} alt="" />
                        
                        <div className="recommendationInfo">
                            <p>{hotel.category}</p>
                            <h4>{hotel.title}</h4>
                            <p>{hotel.location}</p>
                            <p className="description">{hotel.description}</p>
                            
                            <Link to="/"><button>Ver detalhes</button></Link>
                        </div>
                    </div>

                )}

            </div>
            <h2>Testando Jenkinsfile</h2>
        </div>
    );
}

export default Recommendations;