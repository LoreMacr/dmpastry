import React from 'react'
import {listCollection} from '../services/db'
import {useEffect,useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/common/Card'

function Productos() {

const [card,setCard]= useState([]);
  const [photos,setPhotos]= useState([]);
   const getCard = async () =>{
     const result = await listCollection('card')
     const {data,success} = result;
     if(success)
       setCard(data)
   }
   const getPhotos = async () =>{
    const result = await listCollection('photos')
    console.log('resolve',result)
    const {data,success} = result;
    if(success)
      setPhotos(data)
  }

  
   useEffect(() => {
     getCard()
     getPhotos()
   }, [])

    return (
        <>
        <Navbar />
        <div className="content_products">
        <p className='page_titles'>Todos los productos</p>
        <div className="all_products_cards">
            {
                card.map((item, index)=>{
                console.log(item)
                return <Card card={item} />
                })
            }
        </div>
    </div>
        <Footer />
        </>
    )
}

export default Productos