import './style.css';
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Formik, Field, Form } from 'formik';
import { useMediaQuery } from 'react-responsive';
import ptBr from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ptBr", ptBr);

const Search = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const mediaQuery = useMediaQuery({ minWidth: 600 }); 

    return (
        <div id="search">
            <div id="searchBrowserTitle">
                <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
            </div>

            <Formik initialValues={{ city: '', startDate: null, endDate: null }} >
                <Form id="formSearch">
                    <Field className="location" name="city" type="text" placeholder="Cidade" />

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
                            }}
                            locale="ptBr"
                            showPopperArrow={false}
                            formatWeekDay={nameOfDay => nameOfDay.toUpperCase().substring(0, 1)}
                        />
                    </div>

                    <button className="buttonSearch" type="submit">Buscar</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Search;