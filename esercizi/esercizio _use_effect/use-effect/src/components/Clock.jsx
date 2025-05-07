import { useEffect, useState } from "react"


export default function Clock() {
    const [currentDate, SetCurrentDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => { SetCurrentDate(new Date()) }, 1000)
        
        return () => clearInterval(interval)
        }, [])
    

    return (
        <>
            <h3>{currentDate.toString()}</h3>
        </>
    )
}
