import { useState } from "react";
import InfoDetails from "./InfoDetails";

export default function Card({ appCount, onAddClick }) {
    const [msg, setMsg] = useState("ciaone");
    return (
        <>
            <div>
                <h1>{appCount}</h1>
                <button onClick={() => onAddClick(appCount += 2)}>
                    contatore: {appCount} e {msg}
                </button>

                <InfoDetails appCount={appCount} msg={msg} />
            </div>
        </>
    )
}
