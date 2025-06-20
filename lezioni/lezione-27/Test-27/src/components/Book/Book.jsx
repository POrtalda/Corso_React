import { useEffect, useState } from 'react';
import './Book.css';

const url = 'https://portalda.github.io/fake-api-test-react/api/book.json'

export default function Book() {
    // stato che mi contiene i dati
    const [dataBook, setDataBook] = useState(null)

    // effetto collaterale per il fetch dei dati
    // eseguito solo al primo render
    useEffect(() => { getData() }, [])

    function getData() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDataBook(data);
            })
    }
    return (
        <>
            <div>
                {dataBook !== null ? (
                    <>
                        <h2>{dataBook.nome}</h2>
                        <h3>{dataBook.author.first_name}</h3>
                    </>
                ) : (
                    <h1>no data</h1>
                )}

            </div>


        </>
    );
}
