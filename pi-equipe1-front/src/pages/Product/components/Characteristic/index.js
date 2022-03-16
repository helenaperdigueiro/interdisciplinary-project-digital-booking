import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSink, faSnowflake, faCar, faWifi, faPaw, faTv, faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import useAxios from '../../../../hooks/useAxios';

const Characteristic = () => {

    const products = useAxios('/product');
    console.log(products);

    return (
        <>
            <div id="charTitle">
                <h5>O que este lugar oferece?</h5>
            </div>
            <div id="characteristics">
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faSink} size="xl" /> <p>Cozinha</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faSnowflake} size="xl" /> <p>Ar Condicionado</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faCar} size="xl" /> <p>Estacionamento</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faWifi} size="xl" /> <p>Wifi</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faPaw} size="xl" /> <p>Aceita Pets</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faTv} size="xl" /> <p>Televisão</p></div>
                <div className='characteristic'><FontAwesomeIcon className="charIcons" icon={faPersonSwimming} size="xl" /> <p>Piscina</p></div>
            </div>
        </>
    );
};

export default Characteristic;