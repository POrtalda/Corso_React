import { useContext } from 'react';
import './Vehicle.css';
import { RiTrafficLightFill } from "react-icons/ri";
import ThemeContext from '../../context/ThemeContext';


export default function Vehicle({ vehicle }) {

    function getVehicleStatus(vehicle) {
        if (
            vehicle.expired_car_tax ||
            vehicle.expired_insurance ||
            vehicle.expired_revision
        ) {
            return 'red'
        } else if (
            vehicle.expiring_car_tax ||
            vehicle.expiring_insurance ||
            vehicle.expiring_revision
        ) {
            return 'orange'
        } else {
            return 'green'
        }
    }

    const vehicleStatus = getVehicleStatus(vehicle);

    const {isDarkMode} = useContext(ThemeContext);
    return (
        <>
            <div className={isDarkMode ? 'card-vehicle card-vehicle_dark' : 'card-vehicle card-vehicle_light'}>
                <div className='card-vehicle-info'>
                    <h2>{vehicle.brand}</h2>
                    <h3>{vehicle.model}</h3>
                </div>



                <div className='card-traffic-img-light'>
                    <img src={vehicle.img_url} alt={vehicle.model} />
                    <RiTrafficLightFill className='traffic-light-icon' color='#515050'/>
                    <span className={`dot ${vehicleStatus}`}></span>
                </div>
            </div>
        </>
    );
}