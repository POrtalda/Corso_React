import { useState } from "react"

export default function Test() {
    const [count, setCount] = useState(0); // number
    const [visible, setVisible] = useState(true); // boolean
    const [message, setMessage] = useState(''); // string

    // const [titolo, setTitolo] = useState('');
    // const [regista, setRegista] = useState('');
    // const [anno, setAnno] = useState(0);

    const [film, setFilm] = useState({
        titolo: '',
        regista: '',
        anno: 0
    }); // { proprieta: valore, proprieta: valore }

    return (
        <>
            <button onClick={() => setVisible(!visible)}>mostra/nascondi</button>
            <br />
            {visible && (
                <button onClick={() => setCount(count + 1)}>
                    count: {count}
                </button>
            )}
            <br />
            <input type="text" value={message}
                placeholder="inserisci un messaggio"
                onChange={(e) => setMessage(e.target.value)} />

            <br />
            <hr />

            <div>
                <h2>film: </h2>
                <label>titolo:</label><br />
                <input type="text"
                    value={film.titolo}
                    onChange={(e) => setFilm({...film, titolo: e.target.value}) } /><br />
                <label>regista:</label><br />
                <input type="text"
                    value={film.regista}
                    onChange={(e) => setFilm({...film, regista: e.target.value})} /><br />
                <label>anno:</label><br />
                <input type="number"
                    value={film.anno}
                    onChange={(e)=> setFilm({...film, anno: e.target.value}) } /><br />
            </div>
        </>
    )
}

