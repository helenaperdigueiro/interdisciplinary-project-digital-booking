import './style.css';
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import "react-datepicker/dist/react-datepicker.css";
// import { useDateRangeContext } from '../../contexts/DateRangeContext';
import { useProductContext } from '../../../../contexts/ProductContext';
import { useDateRangeContext } from '../../../../contexts/DateRangeContext';

const CalendarAvailability2 = () => {

    const { product } = useProductContext();

    // console.log(product.reservations[0]?.startDate);

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const { setDateReservation } = useDateRangeContext()
    const mediaQuery = useMediaQuery({ minWidth: 750 });

    return (
        <div className="calendar2">
            <DatePicker
                selectsRange={true}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                startDate={startDate}
                endDate={endDate}
                monthsShown={mediaQuery ? 2 : 1}
                onChange={(update) => {
                    setDateRange(update);
                    setDateReservation(update)
                }}
                locale="ptBr"
                inline
            />
        </div>
    )
}

export default CalendarAvailability2;