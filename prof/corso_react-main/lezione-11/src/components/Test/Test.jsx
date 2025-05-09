import { useState } from "react"
import Button from "../Button/Button"

export default function Test() {
    const [colors, setColors] = useState([
        { id: crypto.randomUUID(), name: 'red' },
        { id: crypto.randomUUID(), name: 'blue' },
        { id: crypto.randomUUID(), name: 'green' },
        { id: crypto.randomUUID(), name: 'yellow' },
        { id: crypto.randomUUID(), name: 'white' },
        { id: crypto.randomUUID(), name: 'black' },
    ]);

    const [selectedColorId, setSelectedColorId] = useState(null);

    return (
        <>

            {/* <h1>colori:</h1>
            {
                colors.map(c => (
                    <div key={c.id}>
                        <button onClick={() => 
                            setColors(colors.filter(color => color.id !== c.id))
                        }>elimina</button>
                        <span>
                            {c.name}
                        </span>
                    </div>
                ))
            } */}

            <h1>colori:</h1>
            {
                colors.map(c => (
                    <div key={c.id} className={selectedColorId === c.id && 'selezionato'}>
                        <Button onClickRemove={(x)=> setColors(colors.filter(color => color.id !== c.id))} />
                        <span  onClick={()=> setSelectedColorId(c.id)} >
                            {c.name}
                        </span>
                    </div>
                ))
            }



        </>
    )
}
