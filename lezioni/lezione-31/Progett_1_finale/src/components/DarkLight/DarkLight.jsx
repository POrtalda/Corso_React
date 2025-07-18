import { useContext } from 'react';
import './DarkLight.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function DarkLight() {

    const {isDarkMode, setIsDarkMode}= useContext(ThemeContext)
    
    return(
        <>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                passa alla modalità {isDarkMode ? "chiara" : "scura"}
            </button>
        </>
    );
}