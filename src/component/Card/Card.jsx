import CardFlower from "./CardFlower"
import PropTypes from 'prop-types'
import './Card.scss'
import { useSelector } from "react-redux"
//  
function Card({ date, handleShop, handleFavorite }) {
    const favorite = useSelector((state) => {
    return state.favorites
})
  const cardItem = date.map((item, index) => (<CardFlower cardflower={item} key={index} handleShop={handleShop} handleFavorite={handleFavorite} isFavorite={favorite.find((card) => {
     return item.artc === card.artc 
   })} />))
    return (  
        <div className="flower-card">
            {cardItem}  
        </div>
    )
}
Card.propTypes = {
    date: PropTypes.array,
    handleShop: PropTypes.func,
    handleFavorite:PropTypes.func,
}
export default Card