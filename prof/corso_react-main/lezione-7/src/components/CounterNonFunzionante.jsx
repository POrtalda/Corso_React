export default function CounterNonFunzionante() {
    let count = 0;

    function handleClick() {
        count += 1;
    }

    return (
    <>
    <div className="counter counter-not-work">
        <h1>{count}</h1>
        <button onClick={handleClick}>aggiungi</button>
    </div>
    </>
  )
}
