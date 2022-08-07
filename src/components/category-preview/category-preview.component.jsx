import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

function CategoryPreview({title, products}){
    const navigate=useNavigate();
    return(
        <div className="category-preview-container">
            <h2>
                <span
                    onClick={() => navigate(`/${ROUTES.SHOP}/${title}`)} 
                    className='title'
                >
                    {title}
                </span>
            </h2>
            <div className="preview">
                {
                    products.filter((p, idx) => idx < 4 ).map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;