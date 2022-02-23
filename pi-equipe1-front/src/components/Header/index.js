import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id ="header">
            <div id="headerII">
                <Link to="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/1659/1659303.png" alt="logo" /></Link>
                <Link to="/" id="moto"><p>feels like</p><h4>home.</h4></Link>
            </div>
            <div id="headerIII">
                <button id="login">login</button>
                <button id="login">registrar</button>
            </div>

        </div>
    )
}

export default Header;