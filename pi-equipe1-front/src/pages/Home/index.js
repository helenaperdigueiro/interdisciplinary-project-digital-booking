import DatePickerField from './components/Search';
import Categories from './components/Categories';
import Recommendations from './components/Recommendations';
import './style.css';

const Home = () => {
    return (
        <>
        <DatePickerField />
        <Categories />
        <Recommendations />
        </>
    )
}

export default Home;