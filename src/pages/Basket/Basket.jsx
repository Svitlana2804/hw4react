import React, { useState, useEffect } from 'react';
import './Basket.scss'
import  { MdRemoveShoppingCart } from "react-icons/md"
import Button from '../../component/Button/Button';
import ModalDelete from '../../component/ModalDelete/ModalDelete';
import { useDispatch, useSelector } from 'react-redux';
import { selectorShop } from '../../store/selectors'; 
import { actionRemoveProduct} from '../../store/actions';



const BasketPage = () => {
  const dispatch = useDispatch()
  const basket=useSelector(selectorShop)

   useEffect(() => {
    localStorage.setItem("shopData", JSON.stringify(basket));
   }, [basket]);
  
const deleteProduct = (indexItem) => {
    dispatch(actionRemoveProduct(indexItem))
  }
  return (
    
    <div className="basket">
        <h2>Товари ,що були додані до корзини</h2>
        <>
      <ul className='basket__list'>
        {basket.map((item, index) => (
          <li key={index}>
            <img src={item.imgIcon} style={{ width:'140px', height:'130px',borderRadius:'50px'}} /> {item.title} {item.cost}{`грн`}
            <Button onClick={() =>deleteProduct(index)}
              style={{ border: 'none', padding: '0px', width: 'auto', height: 'auto' }}>
              <MdRemoveShoppingCart style={{ width: '35px', height: '45px'}} />
            </Button>
            
          </li>
        ))}
      </ul>
    
     
      </>
    </div>
  )
}

export default BasketPage