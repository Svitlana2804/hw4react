import React, { useState, useEffect } from 'react';
import './Favorite.scss'



const FavoritePage = () => {
  const [favoritems, setFavoriteItem] = useState([]);
  useEffect(() => {
    const storageFavoriteItem = JSON.parse(localStorage.getItem('favoriteData')) || [];
    setFavoriteItem(storageFavoriteItem)
  }, []);
  console.log('favorite data',favoritems)
  return (
    <>
  <h2 className=''>Сторінка з улюбленими продуктами</h2>
    <div className='favorite-page'>
      {favoritems.map((item, index) =>
        (<ul className='favorite-page_item'><li key={index}> <img src={item.imgIcon} style={{ width: '120px', height:'140px'}}/> {item.title}</li></ul>)
)}
      </div>
    </>
  )
}

export default FavoritePage

