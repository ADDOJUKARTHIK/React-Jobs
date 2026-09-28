import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Joblisting = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  let description = job?.description || ''
  const isLongDescription = description.length > 90
  if (!showFullDescription && isLongDescription) {
    description = description.substring(0, 90) + '...'
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 relative flex flex-col justify-between h-full transition-shadow duration-200 hover:shadow-lg">
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="text-gray-600 text-sm font-medium my-1">{job.type}</div>
          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        </div>

        <div className="mb-4 text-gray-700 text-sm leading-relaxed flex-1">
          {description}
        </div>

        {isLongDescription && (
          <button
            type="button"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="text-indigo-500 hover:text-indigo-600 text-sm font-semibold mb-4 text-left self-start focus:outline-none transition-colors duration-150"
          >
            {showFullDescription ? 'Show Less' : 'Show More'}
          </button>
        )}

        <h3 className="text-indigo-500 font-semibold mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-4"></div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-auto">
          <div className="text-orange-700 mb-3 lg:mb-0 flex items-center text-sm">
            <FaMapMarker className="inline text-base mr-1 flex-shrink-0" />
            <span>{job.location}</span>
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Joblisting