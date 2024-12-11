import React from 'react'

import '../styles/HeaderCard.css';
import notification from '../assets/notification';
import info from '../assets/info';
function HeaderCard() {
  return (
    <div className='card-container'>
        
       <img src={notification.notificationpng} alt='Notification' style={{marginLeft:'1070px'}}/>
       
       <img src={info.infopng} alt='info'  style={{marginLeft:'14px'}} />
     
   
         
    </div>
  )
}

export default HeaderCard;