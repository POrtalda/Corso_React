import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

export default function OtherComponents() {
    const {darkMode , setDarkMode}= useContext(ThemeContext)
    return (
        <>
            <p style={{ color: darkMode ? 'red' : 'green' }}>ciao io sono OtherComponents.jsx</p>
            <button onClick={()=> setDarkMode(!darkMode)}>cambia tema</button>
        </>
    )
}
