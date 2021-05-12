import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {getDocsByQuery} from '../services/db'
import '../styles/product.css'


const Producto = (props) => {
    const { url } = useParams();
    console.log(url)
    const [product,setProduct] = useState ({}) 
    console.log(product)

    const { name, description, prices, photos, category, featured } = product;
    const [price,setPrice] = useState('')
    const photo = photos?.[0]  

    const getProduct = async () =>{
        const result = await getDocsByQuery ('card', 'url', url)
        const {data,success} = result;
        if(success)
          setProduct(data?.[0] || {})
          setPrice(data?.[0]?.prices?.[0]?.price )
      }

    useEffect(() => {
        getProduct()
    },[url])

    return (
        <>
        <Navbar />
        <div className="product_container" />
        <div className="product_content">
        <div className="pic">
            <img className="main_pic" src={photo} />
        </div>
        <div className="info">
            <h4 className="product_name">
                {name}
            </h4>
            <p className="product_description">
                {description}
            </p>
            <div className="product_selector">
                <p>Selecciona para cuantas personas</p>
                <div className="product_selector_btn">
                {prices?.map ((item) => {
            const persons = item.persons
            const newPrice = item.price
            return (
                <button onClick={()=> setPrice(newPrice)} className="pieces_selector">{persons}</button>
                )
            })}

            <h4>${price}</h4>
                </div>
                <button className="main_btn">Comprar</button>
            </div>
            <hr/>
            <div className="sending_info">
            <p>Información de envío</p>
            <div class="sending_msg" >
                <p>No incluye costo de envío. Hacemos envíos en zonas centricas de la CDMX. Cuautitlán, Cuautitlán Izcali, Tultitlan, Tultepec.Pregunta por otras zonas disponibles.</p>
            </div>
        </div>
        </div>
    </div>
    <div class="more_photos">
        {
            photos?.map((img)=> <img className="photo_view" src={img} />)
        }

    </div>
        <Footer />
        </>
    )
}

export default Producto