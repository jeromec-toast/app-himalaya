import { Link } from 'react-router-dom'

type PropsType = {
  flag: boolean
}

export const CardEmpty = ({ flag }: PropsType) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 rounded">
      <div className="my-5">
        <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
        {flag && <><p>Hey, it feels so light!</p><p>There is nothing in your cart. Let's add some items.</p></>}
        {!flag && <><p>There is nothing in your wishlist!</p></>}
      </div>
      <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
