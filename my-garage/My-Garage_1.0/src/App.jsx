import { useContext } from 'react';
import './App.css'
import Vehicle from './components/Vehicle/Vehicle'
import ThemeContext from './context/ThemeContext';

function App({ children, vehicles }) {

const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
    <div className={isDarkMode ? 'app dark' : 'app light'}>
      {/* children è il menu */}
      {children}
      
    {vehicles !== null ? (
      vehicles.map(v => (
        <Vehicle key={v.id} vehicle={v} />
      ))
    ) : (
      <p>Loading vehicles...</p>
    )}
    </div>
    
    </>
  )
}

export default App