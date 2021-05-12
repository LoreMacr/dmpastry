import React from 'react';
import {useEffect,useState} from 'react'
import {listCollection} from '../services/db'

function Featured() {

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
            return (
              <div className="container_infos">
                <img src={info.pic} />
              </div>
            )
            })
        }
    </>
    )
}

    export default Featured