import React, { useState } from 'react'

export default function Ripasso() {
    const [count, setCount] = useState(0); // setCount(count + 2);
    const [title, setTitle] = useState(''); // setTitle('nuovo valore stringa');
    const [showMessage, setShowMessage] = useState(false); // setShowMessage(!showMessage);
  
    const [book, setBook] = useState({
      id: 1,
      title: 'il miglio verde',
      pages: 234
    });
    // se stiamo aggiornando la proprietà author
    // setBook({...book, author: e.target.value})
  
    function handleChange(e) {
      setBook({...book, title: e.target.value});
      setShowMessage(!showMessage);
      console.log('ok');
      setCount(100);
    }
  
    return (
      <>
        <h1>{book.title}</h1>
  
         <input type="text" value={book.title}
          onChange={(e) => setBook({...book,title: e.target.value})} /> 
  
        {/* <input type="text" value={book.title} onChange={handleChange} /> */}
  
      </>
    )
}
