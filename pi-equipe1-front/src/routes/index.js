import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import UserContextProvider from '../contexts/UserContext';

const RouteList = () => (
    <BrowserRouter>
    <HelmetProvider>
        <UserContextProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<Register />}/>
        </Routes>
        <Footer />
        </UserContextProvider>
    </HelmetProvider>
    </BrowserRouter>
);

export default RouteList;