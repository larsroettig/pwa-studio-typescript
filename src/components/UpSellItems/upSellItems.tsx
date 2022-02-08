import * as React from 'react';
import Shimmer from '@magento/venia-ui/lib/components/Shimmer/shimmer';

import classes from './upSellItems.module.css';
import { useUpSellItems } from '../../talons/UpSellItems/useUpSellItems';
import Item from "./item";


interface UpSellItemsProps {
    product: { sku: string };
}

const UpSellItems = ({ product }: UpSellItemsProps): JSX.Element => {
    const { sku } = product;
    const { loading, upSellItems } = useUpSellItems({ sku });

    if (loading) {
        return (
            <div className={classes.root}>
                <Shimmer type="rectangle"/>
            </div>
        );
    }

    if (upSellItems.length === 0) {
        return (
            <div className={classes.root}>
                <h1>No Items found</h1>
            </div>
        )
    }

    return (
        <div className={classes.root}>

            {upSellItems.map(item => <Item product={item}/>)}
        </div>
    );
};

export default UpSellItems;
