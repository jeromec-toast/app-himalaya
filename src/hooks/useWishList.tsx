import { useContext } from "react";
import WishListContext, { UseWishListContextType } from "../context/WishListContext";

const useWishList = (): UseWishListContextType => {
    return useContext(WishListContext)
}

export default useWishList