import { useEffect, useState } from "react"
import { OrderItem } from "./OrderItem"
import { OrderEmpty } from "./OrderEmpty";
import { useOrderQuery } from "../../hooks/useOrderQuery";

export const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const { data, isLoading } = useOrderQuery()

    useEffect(() => {
        if (!isLoading) {
            setOrders(data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    return (
        <>
            {orders && 
            <main>
                <section>
                    <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Orders</p>
                </section>

                <section>
                    {orders.length && orders.map((order, index) => (
                        <OrderItem key={index} order={order} />
                    ))}
                </section>

                <section>
                    {!orders.length && <OrderEmpty />}
                </section>

            </main>}
        </>
    )
}