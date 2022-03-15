import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import UserProvider from '../contexts/UserContext';
import Product from '../pages/Product';

const RouteList = () => (
    <BrowserRouter>
        <HelmetProvider>
            <UserProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/produto' element={<Product />} />
                </Routes>
                <Footer />
            </UserProvider>
        </HelmetProvider>
    </BrowserRouter>
);

export default RouteList;