import { useEffect, useState } from "react"

export default function Converter() {

    const [euroValue, setEuroValue] = useState(0);
    const [lireValue, setLireValue] = useState(0);

    useEffect(()=> {
        // console.log("val euro cambiato")
        setLireValue(euroValue * 1936.27);
    }, [euroValue]);

  return (
    <>
        <p>io Sono il Converter</p>
        <label>EURO:</label>
        <input type="number"
            value={euroValue}
            onChange={(e)=> setEuroValue(e.target.value)} />

        <p>LIRE ITA: {lireValue}</p>
    </>
  )
}
