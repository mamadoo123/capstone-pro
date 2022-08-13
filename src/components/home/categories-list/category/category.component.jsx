import {CategoryContainer, BackgroundImage, CategoryBodyContainer} from './category.styles'

const Category = ({category: {id, title, image}}) => {
    return(
        <CategoryContainer>
            <BackgroundImage imageUrl = {image} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    )
}

export default Category