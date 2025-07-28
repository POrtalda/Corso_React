import { useContext } from 'react';
import './DarkLight.css';
import { ThemeContext } from '../../context/ThemeContext';
import { MdLightbulbOutline, MdOutlineDarkMode } from "react-icons/md";

export default function DarkLight() {

    const {isDarkMode, setIsDarkMode}= useContext(ThemeContext)
    
    return(
        <>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? (
                    <MdLightbulbOutline style={{fontSize: "40px"}} />
                ) : (
                    <MdOutlineDarkMode style={{fontSize: "40px"}}/>
                )}
            </button>
        </>
    );
}