import './cart-dropdown-item.styles.scss';

function CartDropdownItem({item: {name, quantity, price, imageUrl}}) {
    return(
        <div className="cart-dropdown-item-container">
            <img src={imageUrl} alt={`${name}`} />

            <div className="item-details">
                <span className="name">{name}</span>
                <span className='price'>{quantity + ' x ' + price}</span>
            </div>
        </div>
    )
}

export default CartDropdownItem;