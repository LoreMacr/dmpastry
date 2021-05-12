import React,{useEffect,useState} from 'react'
import {listCollection} from '../../services/db'

function Infographics() {

  const [infos,setInfos]= useState([]);
   const getInfos = async () =>{
    const result = await listCollection('infos')
    const {data,success} = result;
    if(success) setInfos(data)
  }

  
   useEffect(() => {
     getInfos()
   }, [])

   return (
    <>
        {
            infos.map((info, index)=>{
            console.log(info)
            return <Infographics infos={info} />
            })
        }
    </>
    )
}


export default Infographics