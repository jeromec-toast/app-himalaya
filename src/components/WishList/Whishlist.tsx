import { memo } from "react"
import { WishListMaster, WishListReducerAction, WishListReducerActionType } from "../../context/WishListContext"
import useWishList from "../../hooks/useWishList"
import { CardEmpty } from "../Cart/CardEmpty"
import { WishListItem } from "./WishListItem"

type PropsType = {
    item: WishListMaster,
    dispatchWishList: React.Dispatch<WishListReducerAction>,
    WISH_LIST_REDUCER_ACTIONS: WishListReducerActionType,
}

export const Whishlist = () => {

    const { dispatch, REDUCER_ACTIONS, wish } = useWishList()

    const pagecontent = wish.length ?
        <>
            <div className="font-sans bg-white max-w-6xl mx-auto p-4">
                <div className="lg:col-span-2 bg-white divide-y">
                    <div className="flex gap-2 border-b pb-4 pt-4">
                        <h2 className="text-base font-bold text-black flex-1">Description</h2>
                        <h3 className="text-base font-bold text-black">Price</h3>
                    </div>
                    {wish.map((item) => (
                        <WishListItem
                            key={item.productId}
                            item={item}
                            dispatchWishList={dispatch}
                            WISH_LIST_REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    ))}
                </div>
            </div>
        </> : <CardEmpty flag={false} />

    const content = (
        <>
            {pagecontent}
        </>
    )

    return content
}


function areItemsEqual({ item: prevItem }: PropsType, { item: nextItem }: PropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof WishListMaster] === nextItem[key as keyof WishListMaster]
    })
}

const MemoizedWishList = memo<typeof WishListItem>(WishListItem, areItemsEqual)

export default MemoizedWishList