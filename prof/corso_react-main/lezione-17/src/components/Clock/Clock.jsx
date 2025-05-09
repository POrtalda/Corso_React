import { useEffect, useState } from "react"

export default function Clock() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            // console.log("sono passati 5 secondi");
            setCurrentDate(new Date());
        }, 5000);

        return () => {
            clearInterval(interval);
        }

    }, []);

    return(
        <>
            <p>io sono il componente Clock</p>
            <h3>{currentDate.toString()}</h3>
        </>
    )
}