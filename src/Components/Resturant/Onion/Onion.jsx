import React, { useEffect, useState } from 'react'

export default function Onion() {
    let [onionMenu , setOnionMenu] = useState([]);
    const getOnionMenu = async()=>{
        let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=onion');
        let data = await response.json();
        setOnionMenu(data.recipes);
    }
    useEffect(
        ()=>{
            getOnionMenu();
        } , [])
  return (
    <>
       <section className='py-5 bg-warning-subtle mt-5'>
        <div className="container">
              <h2 className='text-warning-emphasis text-center'>Onion</h2>
              <div className='row'>
                {
                    onionMenu.map((onion)=>{
                        return <div className='col-lg-4 p-5'>
                            <h3 className='text-center'>Onion Name :<br/> <span className='text-warning-emphasis'>{onion.title}</span></h3>
                            <img src={onion.image_url} alt='pizza name' className='w-100 img-fluid'/>
                        </div>
                    })
                }
              </div>
        </div>
       </section>
    </>
  )
}
