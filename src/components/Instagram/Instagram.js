import React, { useState, useEffect } from 'react';
import {instagramLastest} from '../../services/apiInstagram'
import './styles.css';


const instaRef = 'dmpastrygourmet';
const instaUrl = 'https://www.instagram.com/dmpastrygourmet/';

const Instagram = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    instagramLastest((err, res) => {
      if (res) setPictures(res.slice(0, 3));
    });
  }, []);


  return (
  <>
    <p className="page_titles">
       ¡Síguenos en Instagram! 
    </p>
{/*     <a href={`https://www.instagram.com/${instaUrl}`} target="blank" className="instagram_ui-title__link">
          {instaRef}
        </a> */}
      <div className="instagram_ui-container">
        <div className="lightwidget-widget">
          {
            pictures.map((item) => {
              const { caption, id, medit_type, media_url, permalink } = item;

              return (
                <a key={id} href={permalink} target="_blank" rel="noopener noreferrer">
                  <div className="instagram_box_ui">
                    <img src={media_url} alt="instagram" loading="lazy" />
                  </div>
                </a>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default Instagram;