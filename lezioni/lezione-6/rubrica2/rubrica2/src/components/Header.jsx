import './Header.css'
export default function Header({ logoPiu }) {

    return (
        <>
            <div className='logoPiu'>
                <img src={logoPiu} alt="logo" />
            </div>
        </>
    )
}