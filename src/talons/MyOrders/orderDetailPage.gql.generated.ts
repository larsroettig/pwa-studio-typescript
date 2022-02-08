import * as Types from '../../graphqlTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CustomerOrdersFragmentFragment = (
  { __typename?: 'CustomerOrders' }
  & { items: Array<(
    { __typename?: 'CustomerOrder' }
    & Pick<Types.CustomerOrder, 'id' | 'number' | 'order_date' | 'shipping_method' | 'status'>
    & { billing_address: Types.Maybe<(
      { __typename?: 'OrderAddress' }
      & Pick<Types.OrderAddress, 'city' | 'country_code' | 'firstname' | 'lastname' | 'postcode' | 'region' | 'street' | 'telephone'>
    )>, invoices: Array<(
      { __typename?: 'Invoice' }
      & Pick<Types.Invoice, 'id'>
    )>, items: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'BundleOrderItem' }
      & Pick<Types.BundleOrderItem, 'id' | 'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'>
      & { product_sale_price: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), selected_options: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'OrderItemOption' }
        & Pick<Types.OrderItemOption, 'label' | 'value'>
      )>>> }
    ) | (
      { __typename?: 'DownloadableOrderItem' }
      & Pick<Types.DownloadableOrderItem, 'id' | 'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'>
      & { product_sale_price: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), selected_options: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'OrderItemOption' }
        & Pick<Types.OrderItemOption, 'label' | 'value'>
      )>>> }
    ) | (
      { __typename?: 'OrderItem' }
      & Pick<Types.OrderItem, 'id' | 'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'>
      & { product_sale_price: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), selected_options: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'OrderItemOption' }
        & Pick<Types.OrderItemOption, 'label' | 'value'>
      )>>> }
    )>>>, payment_methods: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'OrderPaymentMethod' }
      & Pick<Types.OrderPaymentMethod, 'name' | 'type'>
      & { additional_data: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'KeyValue' }
        & Pick<Types.KeyValue, 'name' | 'value'>
      )>>> }
    )>>>, shipments: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'OrderShipment' }
      & Pick<Types.OrderShipment, 'id'>
      & { tracking: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'ShipmentTracking' }
        & Pick<Types.ShipmentTracking, 'number'>
      )>>> }
    )>>>, shipping_address: Types.Maybe<(
      { __typename?: 'OrderAddress' }
      & Pick<Types.OrderAddress, 'city' | 'country_code' | 'firstname' | 'lastname' | 'postcode' | 'region' | 'street' | 'telephone'>
    )>, total: Types.Maybe<(
      { __typename?: 'OrderTotal' }
      & { discounts: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Discount' }
        & { amount: (
          { __typename?: 'Money' }
          & Pick<Types.Money, 'currency' | 'value'>
        ) }
      )>>>, grand_total: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), subtotal: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), total_shipping: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), total_tax: (
        { __typename?: 'Money' }
        & Pick<Types.Money, 'currency' | 'value'>
      ), taxes: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'TaxItem' }
        & Pick<Types.TaxItem, 'rate'>
      )>>> }
    )> }
  )> }
);

export type GetCustomerOrdersQueryVariables = Types.Exact<{
  filter: Types.InputMaybe<Types.CustomerOrdersFilterInput>;
  pageSize: Types.Scalars['Int'];
}>;


export type GetCustomerOrdersQuery = (
  { __typename?: 'Query' }
  & { customer: Types.Maybe<(
    { __typename?: 'Customer' }
    & Pick<Types.Customer, 'id'>
    & { orders: Types.Maybe<(
      { __typename?: 'CustomerOrders' }
      & { items: Array<(
        { __typename?: 'CustomerOrder' }
        & Pick<Types.CustomerOrder, 'id' | 'number' | 'order_date' | 'shipping_method' | 'status'>
        & { billing_address: Types.Maybe<(
          { __typename?: 'OrderAddress' }
          & Pick<Types.OrderAddress, 'city' | 'country_code' | 'firstname' | 'lastname' | 'postcode' | 'region' | 'street' | 'telephone'>
        )>, invoices: Array<(
          { __typename?: 'Invoice' }
          & Pick<Types.Invoice, 'id'>
        )>, items: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'BundleOrderItem' }
          & Pick<Types.BundleOrderItem, 'id' | 'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'>
          & { product_sale_price: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), selected_options: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'OrderItemOption' }
            & Pick<Types.OrderItemOption, 'label' | 'value'>
          )>>> }
        ) | (
          { __typename?: 'DownloadableOrderItem' }
          & Pick<Types.DownloadableOrderItem, 'id' | 'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'>
          & { product_sale_price: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), selected_options: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'OrderItemOption' }
            & Pick<Types.OrderItemOption, 'label' | 'value'>
          )>>> }
        ) | (
          { __typename?: 'OrderItem' }
          & Pick<Types.OrderItem, 'id' | 'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'>
          & { product_sale_price: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), selected_options: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'OrderItemOption' }
            & Pick<Types.OrderItemOption, 'label' | 'value'>
          )>>> }
        )>>>, payment_methods: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'OrderPaymentMethod' }
          & Pick<Types.OrderPaymentMethod, 'name' | 'type'>
          & { additional_data: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'KeyValue' }
            & Pick<Types.KeyValue, 'name' | 'value'>
          )>>> }
        )>>>, shipments: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'OrderShipment' }
          & Pick<Types.OrderShipment, 'id'>
          & { tracking: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'ShipmentTracking' }
            & Pick<Types.ShipmentTracking, 'number'>
          )>>> }
        )>>>, shipping_address: Types.Maybe<(
          { __typename?: 'OrderAddress' }
          & Pick<Types.OrderAddress, 'city' | 'country_code' | 'firstname' | 'lastname' | 'postcode' | 'region' | 'street' | 'telephone'>
        )>, total: Types.Maybe<(
          { __typename?: 'OrderTotal' }
          & { discounts: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'Discount' }
            & { amount: (
              { __typename?: 'Money' }
              & Pick<Types.Money, 'currency' | 'value'>
            ) }
          )>>>, grand_total: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), subtotal: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), total_shipping: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), total_tax: (
            { __typename?: 'Money' }
            & Pick<Types.Money, 'currency' | 'value'>
          ), taxes: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'TaxItem' }
            & Pick<Types.TaxItem, 'rate'>
          )>>> }
        )> }
      )> }
    )> }
  )> }
);

export const CustomerOrdersFragmentFragmentDoc = gql`
    fragment CustomerOrdersFragment on CustomerOrders {
  items {
    billing_address {
      city
      country_code
      firstname
      lastname
      postcode
      region
      street
      telephone
    }
    id
    invoices {
      id
    }
    items {
      id
      product_name
      product_sale_price {
        currency
        value
      }
      product_sku
      product_url_key
      selected_options {
        label
        value
      }
      quantity_ordered
    }
    number
    order_date
    payment_methods {
      name
      type
      additional_data {
        name
        value
      }
    }
    shipments {
      id
      tracking {
        number
      }
    }
    shipping_address {
      city
      country_code
      firstname
      lastname
      postcode
      region
      street
      telephone
    }
    shipping_method
    status
    total {
      discounts {
        amount {
          currency
          value
        }
      }
      grand_total {
        currency
        value
      }
      subtotal {
        currency
        value
      }
      total_shipping {
        currency
        value
      }
      total_tax {
        currency
        value
      }
      taxes {
        rate
      }
    }
  }
}
    `;
export const GetCustomerOrdersDocument = gql`
    query GetCustomerOrders($filter: CustomerOrdersFilterInput, $pageSize: Int!) {
  customer {
    id
    orders(filter: $filter, pageSize: $pageSize) {
      ...CustomerOrdersFragment
    }
  }
}
    ${CustomerOrdersFragmentFragmentDoc}`;

/**
 * __useGetCustomerOrdersQuery__
 *
 * To run a query within a React component, call `useGetCustomerOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerOrdersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetCustomerOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerOrdersQuery, GetCustomerOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerOrdersQuery, GetCustomerOrdersQueryVariables>(GetCustomerOrdersDocument, options);
      }
export function useGetCustomerOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerOrdersQuery, GetCustomerOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerOrdersQuery, GetCustomerOrdersQueryVariables>(GetCustomerOrdersDocument, options);
        }
export type GetCustomerOrdersQueryHookResult = ReturnType<typeof useGetCustomerOrdersQuery>;
export type GetCustomerOrdersLazyQueryHookResult = ReturnType<typeof useGetCustomerOrdersLazyQuery>;
export type GetCustomerOrdersQueryResult = Apollo.QueryResult<GetCustomerOrdersQuery, GetCustomerOrdersQueryVariables>;