import {listCollection} from '../services/db'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import Card from '../components/common/Card'
import Instagram from '../components/Instagram/Instagram'
import "../pages/HomePage.css"
import Header from '../Header'

function HomePage() {
  
  const [card,setCard]= useState([]);
  const [photos,setPhotos]= useState([]);
  const getCard = async () =>{
    const result = await listCollection('card')
    const {data,success} = result;
    if(success) setCard(data)
  }
  const getPhotos = async () =>{
    const result = await listCollection('photos')
    console.log('resolve',result)
    const {data,success} = result;
    if(success) setPhotos(data)
  }
  
  const [infos,setInfos]= useState([]);
  console.log(infos)
  const getInfos = async () =>{
   const result = await listCollection('infos')
   const {data,success} = result;
   if(success) {
    const photo = data?.[0]?.pic
    setInfos(photo)
   } 
 }
  
  useEffect(() => {
    getCard()
    getPhotos()
    getInfos()
  }, [])
  
  return (
    <div>
        <Header/>
        <div className="hero" >
            <div className="slider_title h2">
                <h2>Un dulce<br/>antojo</h2>
        </div>   
        </div>
        <p className='page_titles'>Favoritos</p>
        <div className="content_fav">
            {
            card.map((item, index)=>{
                console.log(item)
                return <Card card={item} />
            })
            }
        </div>
        <Link className='see_all' to="/productos">Ver todos los pasteles<img className='icon_arrow' src="/img/right.svg"/></Link> 
        <p className='page_titles'>Love</p>
        <div className="container_featured">
            <img alt="infos" src={infos}/>
        </div>
        <Link to={`/Featured`}>
        <button className="secondary_btn">Ver más</button>
        </Link>
        <Instagram/>
        <Footer/>
    </div>
    )
  };
  
  export default HomePage