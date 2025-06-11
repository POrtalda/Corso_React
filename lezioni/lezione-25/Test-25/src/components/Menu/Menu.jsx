import { NavLink, useNavigate } from 'react-router';
import './Menu.css';

export default function Menu() {
    const navigate = useNavigate();

    return (
        <>
            <ul id='menu'>
                <li>
                    <NavLink to='/'>home page</NavLink>
                </li>

                <li>
                    <NavLink to='/about'>about</NavLink>
                </li>

                <li>
                    <NavLink to='/contact'>contact</NavLink>
                </li>

                <li>
                    <NavLink to='/product'>product</NavLink>
                </li>

                <li>
                    <NavLink to='/search'>search</NavLink>
                </li>
                
            </ul>
            <button onClick={()=> navigate('/pippo')}>vai</button>
        </>
    );
}