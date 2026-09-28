import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center py-20 px-4 min-h-[60vh]">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-xl text-gray-600 mb-6">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-4 py-2 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 font-medium"
      >
        Go Back Home
      </Link>
    </section>
  )
}

export default NotFoundPage