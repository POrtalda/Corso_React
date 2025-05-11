// Crea un componente con un bottone. 
// Quando clicchi il bottone, un messaggio compare o scompare 
// a seconda dello stato attuale.

 import React, { useState } from 'react'
 
 export default function MostraNascondi() {
  const [mostraNascondi, setMostraNascondi] = useState(false)
   return (
     <>
      <button 
      onClick={() => {setMostraNascondi(!mostraNascondi)}}>
        {mostraNascondi ? 'nascondi' : 'mostra'}
        </button>
      {mostraNascondi ? <p>ciao</p> : ''}
     </>
   )
 }
 