import { gql } from '@apollo/client';

export const GET_UP_SELL_ITEMS_BY_PRODUCT = gql`
    query GetUpSellItems($sku: String!) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                name
                upsell_products {
                    id
                    sku
                    stock_status
                    short_description {
                        html
                    }
                    small_image {
                                url
                            }
                    url_key
                    name
                    special_price
                    price_range {
                        minimum_price {
                            final_price {
                                value
                                currency
                            }
                        }
                        maximum_price {
                            final_price {
                                value
                                currency
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default {
    getUpSellItems: GET_UP_SELL_ITEMS_BY_PRODUCT
};
