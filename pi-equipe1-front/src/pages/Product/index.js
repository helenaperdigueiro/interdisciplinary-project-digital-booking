import './style.css';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Calendar from './components/Calendar';

const Product = () => {
    return (
        <>
            <ProductTitle />
            <Location />
            <Calendar />
        </>
    );
};

export default Product;