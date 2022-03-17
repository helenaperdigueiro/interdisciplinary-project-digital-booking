import './style.css';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Calendar from './components/Calendar';
import Characteristic from './components/Characteristic';

const Product = () => {
    return (
        <>
            <ProductTitle />
            <Location />
            <Calendar />
            <Characteristic/>
        </>
    );
};

export default Product;