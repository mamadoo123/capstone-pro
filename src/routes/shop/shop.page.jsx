import { Route, Routes } from "react-router-dom"
import CategoryPreviewsList from "../category-previews-list/category-previews-list.page"
import CategoryProducts from "../category-products/category-products.page"


function ShopPage(){

    return(
        <Routes>
            <Route index element={<CategoryPreviewsList />} />
            <Route path= ":categoryName" element={<CategoryProducts />} />
        </Routes>
    )
}

export default ShopPage