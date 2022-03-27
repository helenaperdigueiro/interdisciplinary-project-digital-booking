import './style.css';
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useProductContext } from '../../../../contexts/ProductContext';

const Calendar = () => {
    const { product } = useProductContext();

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const mediaQuery = useMediaQuery({ minWidth: 750 });

    return (
        <div className="availableDates">
            <h2>Datas disponíveis</h2>
            <div className="calendarSelection">
                <div className="calendar">
                <DatePicker
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
                    inline
                />
                </div>
                <div className="selection">
                    <p>Adicione as datas da sua viagem para obter preços exatos</p>
                    <Link to={`/produto/${product.idProduct}/reserva`}><button>Iniciar reserva</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Calendar;