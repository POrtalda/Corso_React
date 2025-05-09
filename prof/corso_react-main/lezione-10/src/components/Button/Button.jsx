import './Button.css';

export default function Button({ isModifyMode, onClickButton }) {
  return (
    <>
      <div className='btn-container'>
        <button onClick={onClickButton}>
          {isModifyMode ? "salva" : "modifica"}
        </button>
      </div>
    </>
  )
}
