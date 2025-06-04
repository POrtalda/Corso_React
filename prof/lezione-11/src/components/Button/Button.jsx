
export default function Button({onClickRemove}) {
  return (
    <>
        <button onClick={()=> onClickRemove('test')}>elimina</button>
    </>
  )
}
