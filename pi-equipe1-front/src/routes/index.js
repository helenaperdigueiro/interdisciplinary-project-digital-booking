import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const RouteList = () => (
    <BrowserRouter>
    <HelmetProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
    </HelmetProvider>
    </BrowserRouter>
);

export default RouteList;