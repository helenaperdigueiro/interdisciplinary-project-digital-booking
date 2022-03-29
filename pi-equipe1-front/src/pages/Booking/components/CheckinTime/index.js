import { render } from 'react-dom';
import './style.css';

const CheckinTime = () => {

    const hours = [];
    for(let i = 0; i <= 23; i++) {
        hours.push(i);
    }

    return(
        <div id="checkinTime">
            <h4>Seu horário de chegada</h4>
            <div id="selection">
                <h5>Seu quarto estará pronto para check-in das 10:00 às 23:00</h5>
                <p>Indique a hora prevista de sua chegada</p>
                <select name="hours" id="hours" defaultValue="selected">
                    <option value="selected" disabled>Selecione</option>
                    {hours.map(hour => {
                        return(
                            <option value={`${hour}`} key={`${hour}`} placeholder="Selecione">{hour}:00</option>
                        )
                    })}
                    
                    
                </select>
            </div>
        </div>
    )
    
}

export default CheckinTime;