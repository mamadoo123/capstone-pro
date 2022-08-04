import SHOP_DATA from '../../data/shop-data.json'


function ShopPage(){
    return(
        <div>
            {
                SHOP_DATA.map(({id, name}) => (
                    <div key={id}>
                        <h1>{name}</h1>
                    </div>
                ))
            }
           
        </div>
    )
}

export default ShopPage