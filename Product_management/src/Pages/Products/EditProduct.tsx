import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { Product } from "./interface/product";
import { Button, TextField } from "@mui/material";

function EditProduct() {
  const{id} = useParams();
  const[product, setProduct] = useState<Product>({
    id:Number(id),
    name:"",
    price:0,
    category:"",
    image:""
  });
  const fetchProduct =()=>{
    const ExistingProduct=JSON.parse(localStorage.getItem('products')||"[]");
    ExistingProduct.find((user:Product)=>{
      if(user.id==Number(id)){
        setProduct(user);
        return user;
      }
      
    })
  }



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  console.log(e);
  
  const { name , value } = e.target
  setProduct(
    {
      ...product,
      [name]: name === "price" ? Number(value) : value
    }
  )
}

const handleSubmit=(e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      const ExistingProduct:Product[] =
          JSON.parse(localStorage.getItem('products')||"[]");
      const temp = ExistingProduct.filter((user)=>{
        if(user.id!=Number(id))
        {
          return user
        }
      })
localStorage.setItem('products',JSON.stringify(
  [...temp,product]
))
setProduct({
          id:Number(id),
            name: "",
            price: 0,
            category: "",
            image: ""
        })
}




  useEffect(()=>{
fetchProduct();
return ()=>{

}
  },[id])
  return (
    <div>
      <h1> Edit product</h1>
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Product Name</label>
            <TextField
            label="Product-Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <div>
            <label htmlFor="">Product Price</label>
            <TextField
            label="Product-Price"
            name="price"
            value={product.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <div>
            <label htmlFor="">Product Category</label>
            <TextField
            label="Product-Category"
            name="category"
            value={product.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <div>
            <label htmlFor="">Product Image</label>
            <TextField
            label="Product-Image"
            name="image"
            value={product.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <Button 
          type="submit"
          variant="contained"
          fullWidth
          margin="normal" >
            Update
          </Button>

      </form>
    </div>
  )
}

export default EditProduct
