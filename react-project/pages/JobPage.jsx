import { FaArrowLeft } from 'react-icons/fa6'
import { FaMapMarker } from 'react-icons/fa'
import { useLoaderData, Link, useNavigate } from 'react-router-dom'


const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate()
  const job = useLoaderData()

  const onDeleteClick = async (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?')
    if (!confirm) return

    if (deleteJob) {
      await deleteJob(jobId)
    }
    navigate('/jobs')
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center transition-colors duration-150 focus:outline-none focus:underline"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50 py-6">
        <div className="container m-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            <main className="md:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center md:text-left">
                <div className="text-gray-500 mb-2 font-medium">{job.type}</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-2 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-base text-orange-700 mr-2 flex-shrink-0" />
                  <p className="text-orange-700 font-medium">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-4">Job Description</h3>

                <p className="mb-4 text-gray-700 leading-relaxed">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p className="text-indigo-600 font-semibold">{job.salary} / Year</p>
              </div>
            </main>

            <aside className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Company Info</h3>

                <h2 className="text-2xl font-bold text-gray-700">{job.company?.name}</h2>

                <p className="my-2 text-gray-600 text-sm leading-relaxed">
                  {job.company?.description}
                </p>

                <hr className="my-4 border-gray-200" />

                <h3 className="text-lg font-semibold text-gray-800">Contact Email:</h3>

                <a
                  href={`mailto:${job.company?.contactEmail}`}
                  className="my-2 bg-indigo-100 p-2 font-bold block rounded text-indigo-900 hover:bg-indigo-200 transition-colors break-all text-sm"
                >
                  {job.company?.contactEmail || 'N/A'}
                </a>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Contact Phone:</h3>

                <a
                  href={`tel:${job.company?.contactPhone}`}
                  className="my-2 bg-indigo-100 p-2 font-bold block rounded text-indigo-900 hover:bg-indigo-200 transition-colors text-sm"
                >
                  {job.company?.contactPhone || 'N/A'}
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 block"
                >
                  Edit Job
                </Link>
                <button
                  type="button"
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150 mt-4 block cursor-pointer"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default JobPage
