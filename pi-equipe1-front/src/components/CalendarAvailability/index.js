import './style.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import "react-datepicker/dist/react-datepicker.css";
import { useDateRangeContext } from '../../contexts/DateRangeContext';
import { useProductContext } from '../../contexts/ProductContext';

const CalendarAvailability = () => {

    const { product } = useProductContext();

    // console.log(product.reservations[0]?.startDate);

    const [dateRange, setDateRange] = useState([null, null]);

    const [startDate, endDate] = dateRange;
    const { setDateReservation } = useDateRangeContext()
    
    const mediaQuery = useMediaQuery({ minWidth: 750 });

    // console.log(product)
    // console.log(product.reservations)
    //console.log(product.reservations[0]?.startDate)

    return (
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
                    setDateReservation(update)
                }}
                locale="ptBr"
                inline
            />
        </div>
    )
}

export default CalendarAvailability;