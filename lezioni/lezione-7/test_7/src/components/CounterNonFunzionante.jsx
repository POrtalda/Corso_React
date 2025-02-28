

export default function CounterNonFunzionante() {
  let count = 0;

  function handleClick(){
    count += 1;
  }
    return (
    <>
    <div className="counter counter-not-work">
    <h1>Non Funziona</h1>
    <h2>{count}</h2>
    <button onClick={handleClick}>aggiungi</button>
    </div>
    </>
  )
}


