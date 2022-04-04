import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MandatoryLogin from "../pages/MandatoryLogin";
import Register from '../pages/Register';
import UserProvider from '../contexts/UserContext';
import ProductContextProvider from '../contexts/ProductContext';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Booking from '../pages/Booking';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import DateReservationContext from '../contexts/DateRangeContext';
import CheckinTimeProvider from '../contexts/CheckinTimeContext';
import UserCityProvider from '../contexts/UserCityContext';

const RouteList = () => (
    <BrowserRouter>
        <ScrollToTop />
        <HelmetProvider>
            <UserProvider>
                <ProductContextProvider>
                    <DateReservationContext>
                        <CheckinTimeProvider>
                            <UserCityProvider>
                                <Header />
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/login-obrigatorio' element={<MandatoryLogin />} />
                                    <Route path='/cadastro' element={<Register />} />
                                    <Route path='/datas/:startDate/:endDate' element={<Products />} />
                                    <Route path='/cidade/:productsBy' element={<Products />} />
                                    <Route path='/cidade/:productsBy/datas/:startDate/:endDate' element={<Products />} />
                                    <Route path='/categoria/:title' element={<Products />} />
                                    <Route path='/produto/:productId' element={<Product />} />
                                    <Route path='/produto/:productId/reserva' element={<Booking />} />
                                    <Route path='/reserva-confirmada' element={<ConfirmedBooking />} />
                                </Routes>
                                <Footer />
                            </UserCityProvider>
                        </CheckinTimeProvider>
                    </DateReservationContext>
                </ProductContextProvider>
            </UserProvider>
        </HelmetProvider>
    </BrowserRouter>
);

export default RouteList;