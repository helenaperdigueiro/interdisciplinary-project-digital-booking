import './style.css';
import ProductTitle from './components/ProductTitle';
import Characteristic from './components/Characteristic';
import Calendar from './components/Calendar';

const Product = () => {
    return (
        <>
            <ProductTitle />
            <Characteristic />
            <Calendar />
        </>
    );
};

export default Product;