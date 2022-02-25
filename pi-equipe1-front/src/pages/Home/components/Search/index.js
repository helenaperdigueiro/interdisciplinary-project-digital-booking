import './style.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Formik, Field, Form } from 'formik';
import ptBr from "date-fns/locale/pt-BR"


registerLocale("ptBr", ptBr);

const Search = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div>
            <div id="searchBrowserTitle">
                <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
            </div>

            <div id="searchBrowser">
                <Formik
                    initialValues={{
                        city: '',
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>                        
                        <Field name="city" type="text" placeholder="Cidade" />

                        <DatePicker wrapperClassName="date-picker"
                            placeholderText="Check in - Check out"
                            selectsRange={true}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            monthsShown={2}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            locale="ptBr"
                            isClearable={true}
                            customInput=""
                        />

                        <button id="buttonSearch" type="submit">Buscar</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Search;