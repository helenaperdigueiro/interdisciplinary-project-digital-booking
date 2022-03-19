import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSink, faSnowflake, faCar, faWifi, faPaw, faTv, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
// import useAxios from '../../../../hooks/useAxios';

const Characteristic = () => {

    // const products = useAxios('/product');

    return (
        <>
            <div id="charTitle">
                <h4>O que este lugar oferece?</h4>
            </div>
            <div id="characteristics">
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faSink} size="lg" /> <p>Cozinha</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faSnowflake} size="lg" /> <p>Ar Condicionado</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faCar} size="lg" /> <p>Estacionamento</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faWifi} size="lg" /> <p>Wifi</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faPaw} size="lg" /> <p>Aceita Pets</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faTv} size="lg" /> <p>Televisão</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faPersonSwimming} size="lg" /> <p>Piscina</p></div>
            </div>
        </>
    );
};

export default Characteristic;