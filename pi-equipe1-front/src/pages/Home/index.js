import Search from './components/Search';
import Categories from './components/Categories';
import Recommendations from './components/Recommendations';
import './style.css';

const Home = () => {
    // const { setUser } = useUserContext();
    
    // useEffect(() => {
    //     setUser(localStorage.getItem("signed"));
    //     return;
    // }, [setUser])

    return (
        <>
            <Search />
            <Categories />
            <Recommendations />
        </>
    )
}

export default Home;