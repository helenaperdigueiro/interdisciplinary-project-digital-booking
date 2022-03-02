import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Formik, Field, Form } from 'formik';
import ptBr from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

registerLocale("ptBr", ptBr);

const Search = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div id="search">
            
            <div id="searchBrowserTitle">
                <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
            </div>
            
            <Formik
                initialValues={{ city: '', startDate: {startDate}, endDate: {endDate},
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2, startDate));
                        setSubmitting(false);
                    }, 400);
                }}
            >
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
                            // monthsShown={2}n
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            locale="ptBr"
                        />
                    </div>
                    
                    <button className="buttonSearch" type="submit">Buscar</button>
                </Form>
            </Formik>

        </div>
    );
};

export default Search;