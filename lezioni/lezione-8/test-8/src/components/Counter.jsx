

export default function Counter({onAddButton, count}) {
  return (
    <>
      <button onClick={onAddButton}>count: {count}</button>
    </>
  )
}

