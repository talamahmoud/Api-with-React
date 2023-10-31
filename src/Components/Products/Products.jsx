import React,{useEffect, useState} from 'react'

export default function Products() {
    let [products,setProducts] = useState([]);

    const getProducts =async ()=>{
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        setProducts(data);
    }
    useEffect(
        ()=>{
            getProducts();
        } , [])
  return (
    <>
        <div className='container'>
        <div className='pt-5 row'>
            {
                products.map((product)=>{
                    return <div className='col-lg-4 p-5' key = {product.id}>
                        <h2>Product Name: <span className='text-danger'>{product.title}</span></h2>
                        <img src={product.image} className='w-100 img-fluid'/>
                    </div>
                })
            }
        </div>
        </div>
    </>
  )
}
