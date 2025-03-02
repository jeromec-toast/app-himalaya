export const Rating = (props: any) => {
    const { rating } = props;
    let ratingArray = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }
    return (
        <>
            {rating && ratingArray.map((value, index) => (
                value ? (
                    // <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <svg key={index} className="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                ) :
                    (
                        <svg key={index} className="w-6 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        // <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                    )
            ))}
        </>
    )
}
