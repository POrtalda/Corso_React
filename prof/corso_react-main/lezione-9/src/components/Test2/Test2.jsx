import './Test2.css';
import { IoLogoReact } from "react-icons/io5";

export default function Test2() {
  return (
    <>
        <div className='navbar'>
            <h1>Logo</h1>
            <IoLogoReact style={{fontSize: '40px'}} />
            <h1>pippo</h1>
        </div>
        <div className='main'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
        </div>
    </>
  )
}
