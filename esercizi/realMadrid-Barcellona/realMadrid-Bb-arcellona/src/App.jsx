import './App.css'
import Command  from './components/Command'
import Match  from './components/Match'
import AppInferiore  from './components/AppInferiore'
import Command_Default  from './components/Command_Default'
import Teams_Match  from './components/Teams_Match'
import Menu  from './components/Menu'
import InfoPartite  from './components/InfoPartite'

export default function App() {
  
  const teams = [
    {
      id: 1,
      nameTeam: 'Barcellona',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/FC_Barcelona_%28crest%29.svg',
      points: 54,
      won: 17,
      draw: 3,
      lose: 5
    },
    {
      id: 2,
      nameTeam: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      points: 52,
      won: 16,
      draw: 4,
      lose: 5
    },
    {
      id: 3,
      nameTeam: 'Atlético Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg',
      points: 50,
      won: 15,
      draw: 5,
      lose: 5
    },
    {
      id: 4,
      nameTeam: 'Real Sociedad',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg',
      points: 48,
      won: 14,
      draw: 6,
      lose: 5
    },
    {
      id: 5,
      nameTeam: 'Villarreal',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg',
      points: 45,
      won: 13,
      draw: 6,
      lose: 6
    },
    {
      id: 6,
      nameTeam: 'Real Betis',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/46/Real_Betis_logo.svg',
      points: 42,
      won: 12,
      draw: 6,
      lose: 7
    },
    {
      id: 7,
      nameTeam: 'Athletic Bilbao',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg',
      points: 40,
      won: 11,
      draw: 7,
      lose: 7
    },
    {
      id: 8,
      nameTeam: 'Valencia',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valencia_CF.svg',
      points: 38,
      won: 11,
      draw: 5,
      lose: 9
    },
    {
      id: 9,
      nameTeam: 'Sevilla',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg',
      points: 36,
      won: 10,
      draw: 6,
      lose: 9
    },
    {
      id: 10,
      nameTeam: 'Celta Vigo',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg',
      points: 34,
      won: 9,
      draw: 7,
      lose: 9
    },
    {
      id: 11,
      nameTeam: 'Espanyol',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/RCD_Espanyol_logo.svg',
      points: 32,
      won: 9,
      draw: 5,
      lose: 11
    },
    {
      id: 12,
      nameTeam: 'Osasuna',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/CA_Osasuna_logo.svg',
      points: 30,
      won: 8,
      draw: 6,
      lose: 11
    },
    {
      id: 13,
      nameTeam: 'Mallorca',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/90/RCD_Mallorca_logo.svg',
      points: 28,
      won: 7,
      draw: 7,
      lose: 11
    },
    {
      id: 14,
      nameTeam: 'Alavés',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alaves_logo.svg',
      points: 26,
      won: 7,
      draw: 5,
      lose: 13
    },
    {
      id: 15,
      nameTeam: 'Granada',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/86/Granada_CF_logo.svg',
      points: 24,
      won: 6,
      draw: 6,
      lose: 13
    },
    {
      id: 16,
      nameTeam: 'Getafe',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Getafe_CF.svg',
      points: 22,
      won: 5,
      draw: 7,
      lose: 13
    },
    {
      id: 17,
      nameTeam: 'Cádiz',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Cádiz_CF_logo.svg',
      points: 20,
      won: 5,
      draw: 5,
      lose: 15
    },
    {
      id: 18,
      nameTeam: 'Elche',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/70/Elche_CF_logo.svg',
      points: 18,
      won: 4,
      draw: 6,
      lose: 15
    },
    {
      id: 19,
      nameTeam: 'Levante',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/11/Levante_UD_logo.svg',
      points: 16,
      won: 4,
      draw: 4,
      lose: 17
    },
    {
      id: 20,
      nameTeam: 'Valladolid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Real_Valladolid_Logo.svg',
      points: 15,
      won: 4,
      draw: 3,
      lose: 18
    }
  ];
  return (
    <> 
      <Command />

      <Match>
        <Teams_Match/>
      </Match>

      <AppInferiore>
        <Menu/>
        <InfoPartite/>
      </AppInferiore>

      <Command_Default/>
    </>
  )
}


