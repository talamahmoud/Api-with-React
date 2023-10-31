import React, { useEffect, useState } from 'react'

export default function Salad() {
    let [saladMenu , setSaladMenu] = useState([]);
    const getSaladMenu = async()=>{
        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
        let data = await response.json();
        setSaladMenu(data.recipes);
    }
    useEffect(
        ()=>{
            getSaladMenu();
        } , [])
  return (
    <>
       <section className='py-5 bg-warning-subtle mt-5'>
        <div className="container">
              <h2 className='text-warning-emphasis text-center'>SALAD</h2>
              <div className='row'>
                {
                    saladMenu.map((salad)=>{
                        return <div className='col-lg-4 p-5'>
                            <h3 className='text-center'>Salad Name :<br/> <span className='text-warning-emphasis'>{salad.title}</span></h3>
                            <img src={salad.image_url} alt='pizza name' className='w-100 img-fluid'/>
                        </div>
                    })
                }
              </div>
        </div>
       </section>
    </>
  )
}
