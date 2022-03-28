import './style.css';
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import "react-datepicker/dist/react-datepicker.css";

const CalendarAvailability = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const mediaQuery = useMediaQuery({ minWidth: 750 });

    return(
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
    )
}

export default CalendarAvailability;