import './checkout-item.styles.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context'

function CheckoutItem({item}){  
    const {name, imageUrl, price, quantity} = item;
    const {addItemToCart, removeItemFromCart, decreaseItemQuantityByOne} = useContext(CartContext);

    return(
        <tr>
            <td><img src={imageUrl} alt={`${name}`} /></td>

            <td>{name}</td>
            
            <td className='action'> 
                <div className='arrow' onClick={() => {decreaseItemQuantityByOne(item)}}> 
                    &#10094;
                </div> 
                
                <span className="value"> {quantity} </span>
                
                <div className='arrow' onClick={() => {addItemToCart(item)}}> 
                    &#10095; 
                </div> 
            </td>
            
            <td> $ {price}</td>
            
            <td className='action'>
                <span onClick={() => {removeItemFromCart(item)}}> 
                    &#10005; 
                </span>
            </td>
        </tr>
    );
}

export default CheckoutItem;