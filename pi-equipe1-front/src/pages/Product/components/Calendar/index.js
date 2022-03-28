import './style.css';
import CalendarAvailability from '../../../../components/CalendarAvailability';

const Calendar = () => {

    return (
        <div className="availableDates">
            <h2>Datas disponíveis</h2>
            <div className="calendarSelection">
                <CalendarAvailability />
                <div className="selection">
                    <p>Adicione as datas da sua viagem para obter preços exatos</p>
                    <button>Iniciar reserva</button>
                </div>
            </div>
        </div>
    )
}

export default Calendar;