import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import UserProvider from '../contexts/UserContext';
import ProductContextProvider from '../contexts/ProductContext';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Booking from '../pages/Booking';
import DateReservationContext from '../contexts/DateRangeContext';

const RouteList = () => (
    <BrowserRouter>
        <HelmetProvider>
            <UserProvider>
                <ProductContextProvider>
                    <DateReservationContext>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/cadastro' element={<Register />} />
                            <Route path='/:filter/:productsBy' element={<Products />} />
                            <Route path='/produto/:productId' element={<Product />} />
                            <Route path='/produto/:productId/reserva' element={<Booking />} />
                        </Routes>
                        <Footer />
                    </DateReservationContext>
                </ProductContextProvider>
            </UserProvider>
        </HelmetProvider>
    </BrowserRouter>
);

export default RouteList;