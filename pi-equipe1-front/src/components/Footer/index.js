import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id="footer">
            <div id="footerII">&copy; 2022 Digital Booking</div>
            <div id="footerIII">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faInstagram} size="xl" /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faTwitter} size="xl"/></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faWhatsapp} size="xl"/></a>
            </div>
        </div>
    )
}

export default Footer;