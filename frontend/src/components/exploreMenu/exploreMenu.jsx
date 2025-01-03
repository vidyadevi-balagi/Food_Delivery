import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const exploreMenu = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
          <h1>Explore our menu</h1>
          <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable  array of dishes crafted with the finest ingredients and culinary expertise.
          our mission is to satisfy your cravings and elevate your dinining experience. one delicious meal at a time.</p>
          <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='"explore-menu-list-item'>
                       <img src={item.menu_image} alt=""/>
                       <p>{item.menu_name}</p>
                     </div>
                )
            })}
          </div>
        </div>
      )
  
}

export default exploreMenu

