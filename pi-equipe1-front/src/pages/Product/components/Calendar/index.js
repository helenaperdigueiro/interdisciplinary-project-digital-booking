import './style.css';
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const mediaQuery = useMediaQuery({ minWidth: 600 });

        return (
            <div className="availableDates">
                <h2>Datas disponíveis</h2>
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
                    <div className="selection">
                        <p>Adicione as datas da sua viagem para obter preços exatos</p>
                        <button>Iniciar reserva</button>
                    </div>
                </div>
            </div>
        )
    }

export default Calendar;