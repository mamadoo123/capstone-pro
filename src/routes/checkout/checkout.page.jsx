import { useContext } from 'react';
import { CheckoutItem } from '../../components';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import './checkout.styles.scss';

function CheckoutPage() {
    const {currentUser} = useContext(UserContext);
    const {cartItems, cartTotal} = useContext(CartContext);


    if(!currentUser) return <div><h2>You are not login yet, Please logn first</h2></div>
    if(cartItems.length == 0) return <div><h2>Your Cart is empty, please try to add some</h2></div>

    return(
        <div className="checkout-page-container">
            <table className='checkout-table'>
                <thead>
                    <td>Product</td>
                    <td>Description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Remove</td>
                </thead>

                <tbody>
                    {cartItems.map(item => (
                        <CheckoutItem key={item.id} item={item} />
                    ))}
                </tbody>


            </table>

            <div className='total-wrapper'>
                <span>Total: ${cartTotal}</span>
            </div>
        </div>
    )
}

export default CheckoutPage;