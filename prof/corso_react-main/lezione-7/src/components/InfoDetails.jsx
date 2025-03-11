import { useState } from "react";

export default function InfoDetails({appCount, msg}) {
    
  return (
    <>
        <div style={{backgroundColor: 'yellow', color: 'red'}}>
            <p>{appCount}</p>
            <p>{msg}</p>
        </div>
    </>
  )
}
