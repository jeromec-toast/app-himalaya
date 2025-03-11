import { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { DrillDown } from "./LayoutCommon/DrillDown";
import { Logo } from "./LayoutCommon/Logo";
import { useAppMenuQuery } from "../../../hooks/useAppConfigQuery";
import { LeftLayout } from "./LeftLayout";
import { useFilterContext } from "../../../context/FilterContext";

function Header() {
    const navigate = useNavigate()
    // Layout hambugen icon handle
    // const toggleOpen: HTMLElement | null = document.getElementById('toggleOpen');
    // const toggleClose: HTMLElement | null = document.getElementById('toggleClose');

    function handleClick(): void {
        const collapseMenu: HTMLElement = document.getElementById('collapseMenu')!;
        if (collapseMenu?.style.display === 'block') {
            collapseMenu.style.display = 'none';
        } else {
            collapseMenu.style.display = 'block';
        }
    }

    // toggleOpen?.addEventListener('click', handleClick);
    // toggleClose?.addEventListener('click', handleClick);

    const [showSearch, setSerach] = useState(false)

    const showSearchComponent = () => {
        setSerach(!showSearch)
    }

    const handleCategoryClick = (categoryId: string) => {
      navigate(`/products`, {});
      dispatch({ type: "CATEGORY", payload: { category: 0 } });
      dispatch({ type: "CATEGORY", payload: { category: categoryId } });
    };
    
    const { state, dispatch } = useFilterContext();
    const { data, isLoading } = useAppMenuQuery()
    let pageContent: ReactElement | ReactElement[] = <p></p>
    
    if (!isLoading && data) {
        pageContent = data.map(({ menuId, menuName, subMenu, category, clickable, path }: any, index: number) => {
            return (
                <li key={menuId} className='max-lg:border-b max-lg:py-3 px-3'>
                    {!subMenu ? (
                        index === 1 ? (
                            <span 
                                onClick={() => dispatch({ type: "CLEAR_FILTER", payload: { category: 0 } })} 
                                className="block font-semibold transition-all cursor-pointer"
                            >
                                <Link to="/products" className="hover:text-blue-600">
                                    {menuName}
                                </Link>
                            </span>
                        ) : (
                            <Link 
                                to={path} 
                                className={`hover:text-blue-600 ${index === 0 ? 'text-blue-600' : ''} block font-semibold transition-all`}
                            >
                                {menuName}
                            </Link>
                        )
                    ) : (
                        !clickable && (
                            <div className='group relative'>
                                <span className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>
                                    {menuName} <DrillDown />
                                </span>
                                <ul className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                    {category?.map(({ categoryId, category }: any) => (
                                        <li key={categoryId} className='border-b py-2'>
                                            <span 
                                                onClick={() => handleCategoryClick(categoryId)}
                                                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block cursor-pointer'
                                            >
                                                {category}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </li>
            );
        });
    }

    return (
        <>
            <header
                className='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sticky top-0 py-2 px-4 sm:px-10 bg-white z-50 min-h-[70px]'>
                <div className='flex flex-wrap items-center gap-4'>
                    <Link to="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </Link>

                    <div id="collapseMenu"
                        className='max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                        <button id="toggleClose" onClick={handleClick} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>

                        <ul
                            className='lg:ml-12 lg:flex gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <Logo />
                            {pageContent}
                        </ul>
                    </div>

                    <div className='flex ml-auto'>
                        <div className="px-3 py-5">
                            <svg onClick={() => showSearchComponent()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
                                className="cursor-pointer fill-[#333] hover:fill-[#007bff]">
                                <path
                                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
                        </div>
                        <LeftLayout />
                        <button id="toggleOpen" onClick={handleClick} className='lg:hidden ml-7'>
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {showSearch &&
                    <div
                        className="bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex px-6 rounded-full h-10 lg:w-2/4 mt-3 mx-auto max-lg:mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                            className="fill-gray-600 mr-3 rotate-90">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                        <input onChange={(e) => dispatch({ type: "SEARCH", payload: { productSearch: e.target.value } })} type='email' placeholder='Search product here...'
                            className="w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]" />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                            className="cursor-pointer fill-gray-600">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg> */}
                    </div>
                }
            </header>
        </>
    );
}

export default Header;
