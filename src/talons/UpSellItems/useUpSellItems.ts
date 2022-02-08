import { useEffect, useState } from 'react';
import { DocumentNode, useLazyQuery } from '@apollo/client';
import DEFAULT_OPERATIONS from './upSellItems.gql';
import {
    GetUpSellItems,
    GetUpSellItems_products_items_upsell_products,
    GetUpSellItemsVariables
} from './__generated__/GetUpSellItems';

export interface UseUpSellItemsParams {
    sku?: string;
    operations?: { getUpSellItems: DocumentNode };
}

export const useUpSellItems = ({ sku, operations }: UseUpSellItemsParams) => {

    const [upSellItems, setUpSellItems] = useState<GetUpSellItems_products_items_upsell_products[]>([]);
    const [fetchItemsData, { data, loading }] = useLazyQuery<GetUpSellItems, GetUpSellItemsVariables>(
        operations?.getUpSellItems ?? DEFAULT_OPERATIONS.getUpSellItems,
        {
            fetchPolicy: 'no-cache',
            variables: sku ? { sku } : undefined
        }
    );

    useEffect(() => {
        fetchItemsData();
    }, [fetchItemsData, sku]);


    useEffect(() => {
        const tmpUpsellItems: GetUpSellItems_products_items_upsell_products[] = [];


        if (data) {
            console.log('useUpSellItems',{ data });
            data?.products?.items?.map(item => {
                    item?.upsell_products?.map(upSellItem => {
                        if (upSellItem !== null) {
                            tmpUpsellItems.push(upSellItem)
                        }
                    })
                }
            )

            setUpSellItems(tmpUpsellItems);
        }

    }, [data])



    console.log('useUpSellItems',{   upSellItems });
    return {
        loading,
        upSellItems
    };
};
