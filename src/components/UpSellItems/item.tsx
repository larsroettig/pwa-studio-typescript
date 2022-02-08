import * as React from 'react';
import { GetUpSellItems_products_items_upsell_products } from "../../talons/UpSellItems/__generated__/GetUpSellItems";


type ItemsProps = {
    product: GetUpSellItems_products_items_upsell_products
}


const Item = ({ product }: ItemsProps) => {

    return (

            <div>

                <p>{product.sku}</p>

            </div>

    )
}

export default Item;
