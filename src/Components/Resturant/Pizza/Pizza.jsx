import React, { useEffect, useState } from 'react'

export default function Pizza() {
    let [pizzaMenu , setPizzaMenu] = useState([]);
    const getPizzaMenu = async()=>{
        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data = await response.json();
        setPizzaMenu(data.recipes);
    }
    useEffect(
        ()=>{
            getPizzaMenu();
        } , [])
  return (
    <>
       <section className='py-5 bg-warning-subtle mt-3'>
        <div className="container">
              <h2 className='text-warning-emphasis text-center'>PIZZA</h2>
              <div className='row'>
                {
                    pizzaMenu.map((pizza)=>{
                        return <div className='col-lg-4 p-5'>
                            <h3 className='text-center'>Pizza Name :<br/> <span className='text-warning-emphasis'>{pizza.title}</span></h3>
                            <img src={pizza.image_url} alt='pizza name' className='w-100 img-fluid'/>
                        </div>
                    })
                }
              </div>
        </div>
       </section>
    </>
  )
}
