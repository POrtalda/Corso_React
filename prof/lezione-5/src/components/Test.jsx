export default function Test({testo, messaggio, onClickTest}) {

//   // creazione funzione di event handle
//   function handleClick() {
//     alert('ciao ciao ' + messaggio);
//   }


  return (
    <>
        <button onClick={onClickTest}>button in Test.jsx</button>

        {/* <button onClick={handleClick}>
            {testo}
        </button> */}

        {/* <p onClick={()=> alert('click sul p')}>
            io sono un paragrafo cliccabile
        </p> */}

        {/* <div onMouseEnter={hanldeMouseEnter}></div>
        <form onSubmit={handleSubmit}>
        </form> */}
    </>
  )
}
