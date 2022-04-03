import './style.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useMediaQuery } from 'react-responsive';
import "react-datepicker/dist/react-datepicker.css";
import { useDateRangeContext } from '../../contexts/DateRangeContext';
import { useProductContext } from '../../contexts/ProductContext';

const CalendarAvailability = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const { setDateReservation } = useDateRangeContext()

    const { product } = useProductContext();

    const mediaQuery = useMediaQuery({ minWidth: 750 });

    function reserveDate(product) {

        let reservationsDate = [];

        for (let i = 0; i < product.reservations.length; i++) {
            
            let entryDate = new Date(product.reservations[i].startDate)
            let exitDate = new Date(product.reservations[i].endDate)
            
            let dates = [
                {
                    start: entryDate.setDate(entryDate.getDate()),
                    end: exitDate.setDate(exitDate.getDate()+1),
                }
            ]
            reservationsDate.push(dates);

        }
        return reservationsDate
    }

    let productReservations = (reserveDate(product)).flat()

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
                excludeDateIntervals={productReservations}
            />
        </div>
    )
}

export default CalendarAvailability;