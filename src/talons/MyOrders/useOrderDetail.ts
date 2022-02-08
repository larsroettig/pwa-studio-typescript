import {
    CustomerOrdersFragmentFragment,
    useGetCustomerOrdersQuery
} from './orderDetailPage.gql.generated';

import { useState } from "react";

export interface OrderDetailProps {
    order_number: string | null
}

export const useOrderDetail = ({ order_number }: OrderDetailProps) => {

    const [data, setData] = useState<CustomerOrdersFragmentFragment['items']>([]);

    const { loading, error } = useGetCustomerOrdersQuery(
        {
            fetchPolicy: 'no-cache',
            variables: {
                pageSize: 1,
                filter: {
                    number: {
                        match: order_number
                    }
                },
            },
            skip: !order_number,
            onCompleted: ({ customer }) => {
                if (customer?.orders?.items) {
                    setData(customer?.orders.items);
                }
            }
        });

    return { data, loading, error };
}


