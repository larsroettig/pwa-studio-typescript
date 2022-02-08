import * as React from 'react';
import { GetUpSellItems_products_items_upsell_products } from "../../talons/UpSellItems/__generated__/GetUpSellItems";
import { Link } from 'react-router-dom';
// @ts-ignore we are required to create to typesafe util
import Image from '@magento/venia-ui/lib/components/Image';
// @ts-ignore we are required to create to typesafe util
import resourceUrl from "@magento/peregrine/lib/util/makeUrl";

type ItemsProps = {
    product: GetUpSellItems_products_items_upsell_products
}
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 150;

const IMAGE_WIDTHS = new Map()
    .set(640, IMAGE_WIDTH)
    .set('default', 200);

const Item = ({ product }: ItemsProps) => {
    // TODO: should fetch from backend
    const productUrlSuffix = '.html';
    const productLink = resourceUrl(`/${product.url_key}${productUrlSuffix || ''}`);
    return (
        <Link to={productLink}>
            <div>
                <Image
                    resource={product?.small_image?.url}
                    height={IMAGE_HEIGHT}
                    widths={IMAGE_WIDTHS}
                />
                <p>{product.sku}</p>

            </div>
        </Link>
    )
}

export default Item;
