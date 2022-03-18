import './style.css';
import ProductTitle from './components/ProductTitle';
import Location from './components/Location';
import Calendar from './components/Calendar';
import Characteristic from './components/Characteristic';
import Description from './components/Description';
import Image from './components/Image';
import Policy from './components/Policy';

const Product = () => {
    return (
        <>
            <ProductTitle />
            <Location />
            <Image />
            <Description />
            <Characteristic/>
            <Calendar />
            <Policy />
        </>
    );
};

export default Product;