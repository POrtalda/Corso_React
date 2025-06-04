import { useEffect } from "react";

export default function Test() {

    useEffect(() => {
        console.log('Componente Test montato');
    }, []);

    return(
        <>
            <p>io sono il componente Test</p>
        </>
    );
}