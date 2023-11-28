import React, { useState, useEffect } from 'react';
import './Basket.scss'
import  { MdRemoveShoppingCart } from "react-icons/md"
import Button from '../../component/Button/Button';
import ModalDelete from '../../component/ModalDelete/ModalDelete';
import { useDispatch, useSelector } from 'react-redux';
import { selectorRemove,selectorIsModal } from '../../store/selectors'; 
import { actionRemoveProduct, actionModal } from '../../store/actions';



const BasketPage = ({ shop}) => {
  // console.log('fsdghshsAHsHjutaht',shop)
  const dispatch = useDispatch()
   dispatch(actionRemoveProduct(shop))
  const [basketItems, setBasketItems] = useState([]);
   useEffect(() => {
    const storedBasketItems = JSON.parse(localStorage.getItem('shopData')) || [];
    setBasketItems(storedBasketItems);
  }, []);
console.log('localstorage data', basketItems)
 
  const handleDeleteProduct = (index) => {
    const updateBasketItems = [...basketItems]
    updateBasketItems.splice(index, 1)
    setBasketItems(updateBasketItems);
    localStorage.setItem('shopData', JSON.stringify(updateBasketItems));
    console.log('delete')
  }
const [isSecondShow, setIsSecondShow] = useState(false)
    const closeSecondModal = () => setIsSecondShow(false);

  return (
    
    <div className="basket">
        <h2>Товари ,що були додані до корзини</h2>
        <>
      <ul className='basket__list'>
        {basketItems.map((item, index) => (
          <li key={index}>
            <img src={item.imgIcon} style={{ width:'140px', height:'130px',borderRadius:'50px'}} /> {item.title} {item.cost}{`грн`}
            <Button onClick={() =>setIsSecondShow(true)}
              style={{ border: 'none', padding: '0px', width: 'auto', height: 'auto' }}>
              <MdRemoveShoppingCart style={{ width: '35px', height: '45px'}} />
            </Button>
            {isSecondShow && < ModalDelete title={`${item.title}`}
              desc={"Обраний товар буде видалено з кошика"}
            handleClose={closeSecondModal}
              handleOk={() => handleDeleteProduct(index.artc)} />}
          </li>
        ))}
      </ul>
    
     
      </>
    </div>
  )
}

export default BasketPage