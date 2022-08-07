import {useContext} from 'react';
import {CategoryPreview}  from '../../components';
import {ProductContext} from '../../contexts/product.context';
import './category-previews-list.styles.scss'

function CategoryPreviewsList(){
    const {categoriesMap} = useContext(ProductContext)

    return(
        <div className='category-previews-list-container'>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return(
                        <CategoryPreview 
                            key={title}
                            title={title}
                            products={products}    
                        />
                    )
                })
            }
        </div>
    )
}

export default CategoryPreviewsList;