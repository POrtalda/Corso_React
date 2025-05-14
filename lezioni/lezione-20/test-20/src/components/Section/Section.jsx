import Menu from "../Menu/Menu";
import Message from "../Message/Message";


export default function Section({name}) {
  return (
    <>
    <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vitae.</p>
        <Menu name = {name}/>
    </div>
    </>
  )
}
