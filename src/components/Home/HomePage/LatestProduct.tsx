function LatestProduct() {
    return (
        <>
            <div className="mt-6 bg-gray-50 px-4 sm:px-10 py-12">
                <div className="max-w-7xl max-md:max-w-lg mx-auto">
                    <h2 className="md:text-4xl text-3xl font-bold md:text-center mb-14">Our Latest Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                        <div className="bg-white cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1"
                                    className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                                <div className="px-4 py-2.5 text-white bg-blue-600 absolute bottom-0 right-0">June 10, 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">A Guide to Igniting Your Imagination</h3>
                                <button type="button"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all">Read
                                    More</button>
                            </div>
                        </div>
                        <div className="bg-white cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2"
                                    className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                                <div className="px-4 py-2.5 text-white bg-blue-600 absolute bottom-0 right-0">April 20, 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Hacks to Supercharge Your Day</h3>
                                <button type="button"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all">Read
                                    More</button>
                            </div>
                        </div>
                        <div className="bg-white cursor-pointer rounded-md overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3"
                                    className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                                <div className="px-4 py-2.5 text-white bg-blue-600 absolute bottom-0 right-0">August 16, 2023</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">Trends and Predictions</h3>
                                <button type="button"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all">Read
                                    More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LatestProduct;