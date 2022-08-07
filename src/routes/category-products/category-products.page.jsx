import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components';
import { ProductContext } from '../../contexts/product.context';
import './category-products.styles.scss';

function CategoryProducts() {
    const {categoryName} = useParams();
    const {categoriesMap} = useContext(ProductContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
       setProducts(categoriesMap[categoryName]); 
    }, [categoryName, categoriesMap])

    return(
        <div className='category-products-container'>
            {
                products  && products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    )

}

export default CategoryProducts;