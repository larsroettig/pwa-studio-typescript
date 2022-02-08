import * as React from "react";
import { useOrderDetail } from "../../talons/MyOrders/useOrderDetail";

const MyOrderPage = () => {

    const { data } = useOrderDetail({ order_number: '122' });
    return <React.Fragment>
        {data.map(order => {
            return (<div key={order.id}>
                <div>{order.id}</div>
            </div>)
        })}
    </React.Fragment>

}

export default MyOrderPage;
