import { Hello } from "./Card1"
import Button from "./Button"
import Product from "./Product"
const Welcome = () => {

const name=[{name: 'Ayush' ,age : 21, status: true},
  {name: 'Om' ,age : 21, status: false},
{name: 'Aman' ,age : 21, status: true}]

  return (
    <>
    <div>
      {name.map((user,index) =>(
        <div key={index} className="navbar">
       <Hello name={user.name} age={user.age} status={user.status} key={index}>
        <Button text={`Click! ${user.name}`}>
        </Button>
       </Hello>
       
       </div>
      ))}
    </div>
    <div><Product color={"bg-blue"} /></div>
    </>
  )
}
export {Welcome}