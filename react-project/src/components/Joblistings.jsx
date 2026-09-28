import { useState, useEffect } from 'react'
import Joblisting from './Joblisting'
import Spinner from './spinner'
import jobsData from '../../jobs.json'

const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiUrl)
        if (!res.ok) {
          throw new Error(`Server returned ${res.status}`)
        }
        const data = await res.json()
        setJobs(Array.isArray(data) ? data : [])
      } catch (error) {
        console.warn('API unavailable, falling back to local dataset:', error)
        // Fallback to local jobs.json data so app works even if json-server is not running
        const localJobs = jobsData?.jobs || []
        setJobs(isHome ? localJobs.slice(0, 3) : localJobs)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [isHome])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : jobs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto p-6">
            <p className="text-gray-600 text-lg font-medium">No jobs available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Joblisting key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Joblistings