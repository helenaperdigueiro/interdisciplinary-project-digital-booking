import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Formik, Field, Form } from 'formik';
import Media from 'react-media';
import ptBr from "date-fns/locale/pt-BR"
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

registerLocale("ptBr", ptBr);

const Search = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    console.log(startDate);
    console.log(endDate);

    return (
        <div id="search">
            <div>
                {/* <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 1199px)",
                    large: "(min-width: 1200px)"
                }}> */}
                    {matches => (
                        <>
                            {matches.small && <p>I am small!</p>}
                            {matches.medium && <p>I am medium!</p>}
                            {matches.large && <p>I am large!</p>}
                        </>
                    )} */}

                    <div id="searchBrowserTitle">
                        <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
                    </div>

                    <Formik
                        initialValues={{
                            city: '', startDate: null, endDate: null,
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
                                    // monthsShown={matches.medium ? 2:1}
                                    onChange={(update) => {
                                        setDateRange(update);
                                    }}
                                    locale="ptBr"
                                />
                            </div>

                            <button className="buttonSearch" type="submit">Buscar</button>
                        </Form>
                    </Formik>
                {/* </Media> */}
            </div>
        </div>
    );
};

export default Search;