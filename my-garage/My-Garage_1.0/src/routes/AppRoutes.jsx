import { BrowserRouter, Route, Routes } from 'react-router';
import App from '../App';
import './AppRoutes.css'; // Stili globali tema
import Menu from '../components/Menu/Menu';
import { useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { use } from 'react';
import Details from '../components/Details/Details';

// URL dell'API JSON con i dati dei veicoli
const URL_API = 'https://portalda.github.io/fake-api-my-garage/my-garage.json';

export default function AppRoutes() {
  // Stato per la lista dei veicoli caricati dall'API
  const [vehicles, setVehicles] = useState([]);

  // Stato per il tema attuale (false = chiaro, true = scuro)
  const [isDarkMode, setIsDarkMode] = useState(null);

  // Effettua il fetch dei veicoli al primo render
  useEffect(() => {
    getVehiclesAPI();
  }, []);

  // Recupera il tema dal localStorage
  useEffect(() => {
    const lsDarkMode = JSON.parse(localStorage.getItem('vehicles-dark-mode'));

    // Se il localStorage ha un valore, lo usa, altrimenti imposta il tema chiaro
    setIsDarkMode(lsDarkMode);
  }, []);

  // Effetto per salvare il tema nel localStorage
  useEffect(() => {
    localStorage.setItem('vehicles-dark-mode',
      JSON.stringify(isDarkMode))
  }, [isDarkMode])

  /**
   * Recupera i veicoli dall'API e calcola i flag di scadenza
   * Aggiunge: expired_car_tax, expired_insurance, expired_revision
   *           expiring_car_tax, expiring_insurance, expiring_revision
   */
  function getVehiclesAPI() {
    fetch(URL_API)
      .then(response => response.json())
      .then(data => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Evita problemi di orario

        const daysBeforeExpiry = 30; // Giorni entro cui un elemento è "in scadenza"

        // Converte "gg/mm/aaaa" o simili in oggetto Date
        function parseDate(dateString) {
          if (!dateString) return null;
          const parts = dateString.split(/[\/\-.]/).map(p => p.trim());
          if (parts.length !== 3) return null;

          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10);
          const year = parseInt(parts[2], 10);

          if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return null;

          const d = new Date(year, month - 1, day);
          if (isNaN(d)) return null;
          d.setHours(0, 0, 0, 0);
          return d;
        }

        // Restituisce lo stato della scadenza di una data
        function checkStatus(dateString) {
          const expiryDate = parseDate(dateString);
          if (!expiryDate) return { expired: false, expiring: false };

          // Già scaduto
          if (expiryDate < today) {
            return { expired: true, expiring: false };
          }

          // Calcola i giorni mancanti
          const msPerDay = 1000 * 60 * 60 * 24;
          const diffDays = Math.ceil((expiryDate - today) / msPerDay);

          // Se scade entro X giorni
          if (diffDays <= daysBeforeExpiry) {
            return { expired: false, expiring: true };
          }

          // Nessun problema
          return { expired: false, expiring: false };
        }

        // Elabora ogni veicolo con i nuovi flag di stato
        const newVehicles = data.map(v => {
          const carTaxStatus = checkStatus(v.scadenza_bollo);
          const insuranceStatus = checkStatus(v.scadenza_assicurazione);
          const revisionStatus = checkStatus(v.scadenza_revisione);

          return {
            ...v,
            expired_car_tax: carTaxStatus.expired,
            expired_insurance: insuranceStatus.expired,
            expired_revision: revisionStatus.expired,
            expiring_car_tax: carTaxStatus.expiring,
            expiring_insurance: insuranceStatus.expiring,
            expiring_revision: revisionStatus.expiring
          };
        });

        setVehicles(newVehicles);
      })
      .catch(err => {
        console.error("Errore nel recupero dei dati:", err);
      });
  }

  // Effetto: aggiorna la classe del body quando cambia il tema
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    // Rende disponibile il tema a tutta l'app
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Routes>
          {/* Home - mostra tutti i veicoli */}
          <Route
            path="/"
            element={
              <App vehicles={vehicles}>
                <Menu title="My Garage" />
              </App>
            }
          />

          {/* Pagina "Scaduti" */}
          <Route
            path="expired"
            element={
              <App vehicles={vehicles.filter(v => v.
                expired_car_tax ||
                v.expired_insurance ||
                v.expired_revision
              )}>
                <Menu title="Scaduti" />
              </App>
            }
          />

          {/* Pagina "In Scadenza" */}
          <Route
            path="expiring"
            element={
              <App vehicles={vehicles.filter(v => v.
                expiring_car_tax ||
                v.expiring_insurance ||
                v.expiring_revision
              )}>
                <Menu title="In Scadenza" />
              </App>
            }
          />

          {/* dettagli veicolo */}
          <Route path='details/:id' element={
            <Details vehicles={vehicles}>
              <Menu title="Dettagli veicolo" />
            </Details>             
            
          }/>

          {/* Pagina di errore 404 */}
          <Route
            path="*"
            element={
              <App vehicles={vehicles}>
                <Menu title="Error Pagina non trovata" />
              </App>
            }
          />

        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
