import { useState } from "react"

export const ProductMapping = () => {
    const [dropdown, setDropDown] = useState(false)
    return (
        <>
            <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
                <h2 className="text-xl text-gray-800 font-bold">Product Mapping</h2>

                <form className="mt-8 grid sm:grid-cols-2 gap-6">
                    <div className="col-span-full">
                    <label className="text-gray-800 text-sm block mb-2">Product Listing</label>
                        <div className="relative font-[sans-serif] w-max">
                            <button onClick={()=> setDropDown(!dropdown)} type="button"
                                className="px-5 py-2.5 rounded border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                                Select product
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                        clip-rule="evenodd" data-original="#000000" />
                                </svg>
                            </button>

                            {dropdown && <ul className='absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                            </ul>}
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm block mb-2">Product Listing</label>
                        <div className="relative font-[sans-serif] w-max">
                            <button onClick={()=> setDropDown(!dropdown)} type="button"
                                className="px-5 py-2.5 rounded border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                                Select category
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                        clip-rule="evenodd" data-original="#000000" />
                                </svg>
                            </button>

                            {dropdown && <ul className='absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                            </ul>}
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm block mb-2">Sub Category</label>
                        <div className="relative font-[sans-serif] w-max">
                            <button onClick={()=> setDropDown(!dropdown)} type="button"
                                className="px-5 py-2.5 rounded border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50">
                                Select Sub Category
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                        clip-rule="evenodd" data-original="#000000" />
                                </svg>
                            </button>

                            {dropdown && <ul className='absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Dropdown option</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Cloth set</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Sales details</li>
                                <li className='py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer'>Marketing</li>
                            </ul>}
                        </div>
                    </div>
                    {/* <div className="flex items-center col-span-full">
                        <input id="checkbox1" type="checkbox"
                            className="w-4 h-4 mr-3 shrink-0" />
                        <label className="text-sm text-gray-500">I agree to the <a href="javascript:void(0);" className="underline">Terms and Conditions</a> and <a href="javascript:void(0);" className="underline">Privacy Policy</a></label>
                    </div> */}

                    <button type='button'
                        className="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                            <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                        </svg> */}
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}