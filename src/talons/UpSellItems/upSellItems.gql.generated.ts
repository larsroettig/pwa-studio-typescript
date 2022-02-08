import * as Types from '../../graphqlTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUpSellItemsQueryVariables = Types.Exact<{
  sku: Types.Scalars['String'];
}>;


export type GetUpSellItemsQuery = (
  { __typename?: 'Query' }
  & { products: Types.Maybe<(
    { __typename?: 'Products' }
    & { items: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'BundleProduct' }
      & Pick<Types.BundleProduct, 'id' | 'name'>
      & { upsell_products: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'BundleProduct' }
        & Pick<Types.BundleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<Types.ConfigurableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<Types.DownloadableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<Types.GroupedProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<Types.SimpleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'VirtualProduct' }
        & Pick<Types.VirtualProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      )>>> }
    ) | (
      { __typename?: 'ConfigurableProduct' }
      & Pick<Types.ConfigurableProduct, 'id' | 'name'>
      & { upsell_products: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'BundleProduct' }
        & Pick<Types.BundleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<Types.ConfigurableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<Types.DownloadableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<Types.GroupedProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<Types.SimpleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'VirtualProduct' }
        & Pick<Types.VirtualProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      )>>> }
    ) | (
      { __typename?: 'DownloadableProduct' }
      & Pick<Types.DownloadableProduct, 'id' | 'name'>
      & { upsell_products: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'BundleProduct' }
        & Pick<Types.BundleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<Types.ConfigurableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<Types.DownloadableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<Types.GroupedProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<Types.SimpleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'VirtualProduct' }
        & Pick<Types.VirtualProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      )>>> }
    ) | (
      { __typename?: 'GroupedProduct' }
      & Pick<Types.GroupedProduct, 'id' | 'name'>
      & { upsell_products: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'BundleProduct' }
        & Pick<Types.BundleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<Types.ConfigurableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<Types.DownloadableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<Types.GroupedProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<Types.SimpleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'VirtualProduct' }
        & Pick<Types.VirtualProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      )>>> }
    ) | (
      { __typename?: 'SimpleProduct' }
      & Pick<Types.SimpleProduct, 'id' | 'name'>
      & { upsell_products: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'BundleProduct' }
        & Pick<Types.BundleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<Types.ConfigurableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<Types.DownloadableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<Types.GroupedProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<Types.SimpleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'VirtualProduct' }
        & Pick<Types.VirtualProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      )>>> }
    ) | (
      { __typename?: 'VirtualProduct' }
      & Pick<Types.VirtualProduct, 'id' | 'name'>
      & { upsell_products: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'BundleProduct' }
        & Pick<Types.BundleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'ConfigurableProduct' }
        & Pick<Types.ConfigurableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'DownloadableProduct' }
        & Pick<Types.DownloadableProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'GroupedProduct' }
        & Pick<Types.GroupedProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<Types.SimpleProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      ) | (
        { __typename?: 'VirtualProduct' }
        & Pick<Types.VirtualProduct, 'id' | 'sku' | 'stock_status' | 'url_key' | 'name' | 'special_price'>
        & { short_description: Types.Maybe<(
          { __typename?: 'ComplexTextValue' }
          & Pick<Types.ComplexTextValue, 'html'>
        )>, small_image: Types.Maybe<(
          { __typename?: 'ProductImage' }
          & Pick<Types.ProductImage, 'url'>
        )>, price_range: (
          { __typename?: 'PriceRange' }
          & { minimum_price: (
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          ), maximum_price: Types.Maybe<(
            { __typename?: 'ProductPrice' }
            & { final_price: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'value' | 'currency'>
            ) }
          )> }
        ) }
      )>>> }
    )>>> }
  )> }
);


export const GetUpSellItemsDocument = gql`
    query GetUpSellItems($sku: String!) {
  products(filter: {sku: {eq: $sku}}) {
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

/**
 * __useGetUpSellItemsQuery__
 *
 * To run a query within a React component, call `useGetUpSellItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpSellItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpSellItemsQuery({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useGetUpSellItemsQuery(baseOptions: Apollo.QueryHookOptions<GetUpSellItemsQuery, GetUpSellItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpSellItemsQuery, GetUpSellItemsQueryVariables>(GetUpSellItemsDocument, options);
      }
export function useGetUpSellItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpSellItemsQuery, GetUpSellItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpSellItemsQuery, GetUpSellItemsQueryVariables>(GetUpSellItemsDocument, options);
        }
export type GetUpSellItemsQueryHookResult = ReturnType<typeof useGetUpSellItemsQuery>;
export type GetUpSellItemsLazyQueryHookResult = ReturnType<typeof useGetUpSellItemsLazyQuery>;
export type GetUpSellItemsQueryResult = Apollo.QueryResult<GetUpSellItemsQuery, GetUpSellItemsQueryVariables>;