import {CategoryContainer, BackgroundImage, CategoryBodyContainer} from './category.styles'
import {useNavigate} from 'react-router-dom'

const Category = ({category: {id, title, image, route}}) => {
    const navigate = useNavigate();
    return(
        <CategoryContainer onClick={() => navigate(route)}>
            <BackgroundImage imageUrl = {image} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    )
}

export default Category