import Search from './components/Search';
import Categories from './components/Categories';
import Recommendations from './components/Recommendations';
import './style.css';
import { useUserContext } from '../../contexts/UserContext';
import { useEffect } from 'react';

const Home = () => {
    const { setUser } = useUserContext();
    
    useEffect(() => {
        setUser(localStorage.getItem("signed"));
        return;
    }, [setUser])

    return (
        <>
            <Search />
            <Categories />
            <Recommendations />
        </>
    )
}

export default Home;