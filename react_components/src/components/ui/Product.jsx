import React from 'react'
import logoimage from "../../assets/react.svg"
import Button from './Button'
const Product = ({color}) => {
  const product =[
    {name:'book',description:'Best selling book.', image:'./images/book.jpg', status:true},
    {name:'tractor',description:'Mahindra 1560cc.', image:'./images/tractor.jpg', status:false},
    {name:'Bat',description:'Best selling bat.', image:'./images/book.jpg', status:true}
  ]
  // const onlinestatus = product.status ? 'In Stock' : 'Out Of Stock'
  return (
    <>
    <div>
          <p><img src={logoimage} alt="" /></p>
        </div>
    <div><div className='flex'>
      {product.map((product,index) =>(
        <>
        <div key={index} className={`card ${color}`}>
       <p>{product.name} </p> <p>About={product.description} </p> 
       <p><img src={product.image} alt='logo'width={200}></img></p>
        <p>{product.status ? 'In Stock' : 'Out Of Stock'}</p>
        <Button text={`Click to buy ${product.name}`}></Button>
        
        </div>
        </>
      ))}
      </div>
    </div>
        </>
  )
}

export default Product
