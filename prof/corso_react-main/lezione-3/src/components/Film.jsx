import './Film.css';

export default function Film({ titolo, regista, isDisponibile, isScontato }) {

    return (
        <>
            {/* 
            provare a valorizzare className aprendo una
            finestra su js e usando il ternary operator
            valorizzare una stringa (classe css) o 
            un'altra
        */}
            {/* <p className={isDisponibile ? 'testi-verdi' : 'testi-rossi'}>titolo: {titolo}</p> */}
            <p className={!isDisponibile && 'testi-rossi'}>titolo: {titolo}</p>

            <p>regista: {regista}</p>
            {/* <h2>
                {isDisponibile ? '✅' : '❌'}
            </h2> */}

            {/* <h2>
                {isDisponibile && '✅'}
            </h2> */}

            
            {/* {isDisponibile && <p>ciao</p>} */}
            


            {/* {isDisponibile ? (
                <p>si! film disponibile! ✅</p>
            ) : (
                <div style={{backgroundColor: 'red'}}>
                    <p><b>NOO! film esaurito! ❌</b></p>
                </div>
            )} */}

            {!isDisponibile && (
                <div style={{ backgroundColor: 'red' }}>
                    <p><b>NOO! film esaurito! ❌</b></p>
                </div>
            )}

            {/* classe condizionale */}
            {/* <p className={isScontato && 'sconto'}>Prezzo: 10</p> */}
            
            {/* stile condizionale */}
            {/* <p style={{backgroundColor: isScontato ? 'yellow' : 'green'}}> */}
            <p style={{backgroundColor: isScontato && 'yellow', color: 'blue'}}>
                Prezzo: 10
                </p>



        </>
    );
}