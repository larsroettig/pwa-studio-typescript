// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import * as React from 'react'
import { render } from '@testing-library/react'

import Item from '../item'
import { GetUpSellItems_products_items_upsell_products } from "../../../talons/UpSellItems/__generated__/GetUpSellItems";
import { CurrencyEnum, ProductStockStatus } from "../../../../__generated__/globalTypes";

test('render without any error', () => {
    const product : GetUpSellItems_products_items_upsell_products  = {
        __typename: "VirtualProduct",
        id: 12,
        sku: "2223",
        stock_status: ProductStockStatus.IN_STOCK,
        short_description: null,
        url_key: '/test-1234',
        name: "Test Product",
        special_price: null,
        small_image: null,
        price_range: {
            __typename: "PriceRange",
            minimum_price: {
                __typename: "ProductPrice",
                final_price: {
                    __typename: "Money",
                    value: 12,
                    currency: CurrencyEnum.AED
                }
            },
            maximum_price: {
                __typename: "ProductPrice",
                final_price: {
                    __typename: "Money",
                    value: 122,
                    currency: CurrencyEnum.AED
                }
            }
        }
    };

    render(<Item product={product} />)

});
