import './style.css';
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Formik, Form } from 'formik';
import { useMediaQuery } from 'react-responsive';
import ptBr from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
import AutoComplete from './Autocomplete/index';
import { Link } from 'react-router-dom';
import { useDateRangeContext } from '../../../../contexts/DateRangeContext';
registerLocale("ptBr", ptBr);

const Search = () => {
    const {setDateReservation} = useDateRangeContext();
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const mediaQuery = useMediaQuery({ minWidth: 600 });
    
    const [selectedCity, setSelectedCity] = useState("");
    const isValid = selectedCity && startDate && endDate;

    return (
        <div id="search">
            <div id="searchBrowserTitle">
                <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
            </div>

            <Formik initialValues={{ city: '', startDate: null, endDate: null }} >
                <Form className="formSearch">
                    {/* <Field className="location" name="city" type="text" placeholder="Cidade" /> */}
                    <div className="location"><AutoComplete onChange={(value) => { setSelectedCity(value.name) }}/></div>
                    <div className="date">
                        <DatePicker
                            placeholderText="Check in - Check out"
                            selectsRange={true}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            monthsShown={mediaQuery ? 2 : 1}
                            onChange={(update) => {
                                setDateRange(update);
                                setDateReservation(update);
                            }}
                            locale="ptBr"
                            showPopperArrow={false}
                            formatWeekDay={nameOfDay => nameOfDay.toUpperCase().substring(0, 1)}
                        />
                    </div>

                    <Link to={`/cidade/${selectedCity}`}><button className="buttonSearch" type="submit" disabled={!isValid}>Buscar</button></Link>
                </Form>
            </Formik>
        </div>
    );
};

export default Search;