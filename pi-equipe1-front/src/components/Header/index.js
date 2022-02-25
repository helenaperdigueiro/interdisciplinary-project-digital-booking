import './style.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';

const Header = () => {
    const { signed } = useContext(UserContext);

    console.log(signed.logged)

    if (signed.logged) {
        return (
            <div id="header">
            <div id="headerII">
            <Link to="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/1659/1659303.png" alt="logo" /></Link>
            <Link to="/" id="moto"><p>feels like</p><h4>home.</h4></Link>
        </div>
            <div className="headerIII">Oi Carol!
                <button onClick={ () => {signed.logged = false; localStorage.setItem('signed', JSON.stringify(signed))}} className="access">Sair</button>
            </div>
            </div>
            
        )
    }
    return (
        <div id="header">
            <div id="headerII">
                <Link to="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/1659/1659303.png" alt="logo" /></Link>
                <Link to="/" id="moto"><p>feels like</p><h4>home.</h4></Link>
            </div>
                
            <div className="headerIII">
                <Link to="/login"><button className="access">login</button></Link>
                <Link to="/registro"><button className="access">registrar</button></Link>
            </div>
        </div>
    )
}

export default Header;