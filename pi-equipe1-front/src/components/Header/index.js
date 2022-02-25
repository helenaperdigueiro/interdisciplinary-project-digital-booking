import './style.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const Header = () => {

    const { user, setUser } = useUserContext();

    if (user) {
        return (
            <div id="header">
                <div id="headerII">
                    <Link to="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/1659/1659303.png" alt="logo" /></Link>
                    <Link to="/" id="moto"><p>feels like</p><h4>home.</h4></Link>
                </div>
                <div className="headerIII">Oi Carol!
                    <button onClick={() => {
                        localStorage.removeItem('signed');
                        setUser();
                    }}
                        className="access">Sair</button>
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