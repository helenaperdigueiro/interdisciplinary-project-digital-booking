import Search from './components/Search';
import Categories from './components/Categories';
import Recommendations from './components/Recommendations';

const Home = () => {
    return (
        <div id="home">
            <Search />
            <Categories />
            <Recommendations />
        </div>
    );
};

export default Home;