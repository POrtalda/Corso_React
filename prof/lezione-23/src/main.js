// document.cookie = "test=Pluto; expires=Wed, 28 Maj 2025 08:59:00 UTC";

// alert(document.cookie);

// document.cookie = "test=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// creare la coppia chiave-valore nel sessionStorage (dura solo quella sessione)
// sessionStorage.setItem('email', 'pippo@test.it');
// // legge il valore della chiave 'email' dal sessionStorage
// console.log(sessionStorage.getItem('email'));



const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const btnShow = document.querySelector('#btnShow');

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const persona = { id: 1, name: 'Michy' };

btnAdd.addEventListener('click', () => {
  // sessionStorage.setItem('prova', 'qwerty1234');
  localStorage.setItem('prova', 'qwerty1234');
  localStorage.setItem('colors', JSON.stringify(colors));
  localStorage.setItem('person', JSON.stringify(persona));
});

btnRemove.addEventListener('click', () => {
  // sessionStorage.clear('prova');
  localStorage.clear(); // ripulisce tutto il localStorage
  // localStorage.removeItem('prova'); // rimuove solo la chiave 'prova'
});

btnShow.addEventListener('click', () => {
  // alert(sessionStorage.getItem('prova'));
  // alert(localStorage.getItem('prova'));
  
  // riconverto la stringa memorizzata nello storage in oggetto js (array)
  // const colori = JSON.parse(localStorage.getItem('colors'));
  // alert(colori[2]);

  const p = JSON.parse(localStorage.getItem('person'));
  alert(p.name);
});