import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate = useNavigate()

    const GoProductList = () => {
        navigate(`/products`, {
        })
    }

    return (
        <div className="min-h-[200px]">
            <div className="grid md:grid-cols-2 justify-center items-center gap-10">
                <div className="max-md:order-1">
                    <p className="mt-4 mb-2 font-semibold text-blue-600"><span className="rotate-90 inline-block mr-2">|</span> ALL IN
                        ONE
                        MEETING SCHEDULER</p>
                    <h1 className="md:text-5xl text-4xl font-bold mb-4 md:!leading-[55px]">Schedule meetings effortlessly</h1>
                    <p className="mt-4 text-base leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered
                        promptly to your doorstep. Elevate your dining experience today. Delve into the details and let us enhance
                        every aspect of your dining adventure.</p>
                    <div className="mt-10 flex px-1 py-1.5 overflow-hidden">
                        <button onClick={GoProductList} type='button' className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5">More Product</button>
                    </div>
                </div>

                <div className="max-md:mt-12 h-full">
                    <img src="https://readymadeui.com/team-image.webp" alt="banner img" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}


export default Banner;;