import {useContext} from 'react';
import { ProductCard } from '../../components';
import {ProductContext} from '../../contexts/product.context'
import './shop.page.styles.scss'

function ShopPage(){
    const {products} = useContext(ProductContext)

    return(
        <div className="product-listing-container">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
           
        </div>
    )
}

export default ShopPage