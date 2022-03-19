import './style.css';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Image from './components/Image';
import Characteristic from './components/Characteristic';
import Calendar from './components/Calendar';

const Product = () => {
    return (
        <>
            <ProductTitle />
            <Location />
            <Image />
            <Characteristic/>
            <Calendar />

        </>
    );
};

export default Product;