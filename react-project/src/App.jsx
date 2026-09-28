import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from '../pages/HomePage'
import JobsPage from '../pages/JobsPage'
import JobPage from '../pages/JobPage'
import { jobLoader } from './loaders/jobLoader'
import AddJobPage from '../pages/AddJobPage'
import EditJobPage from '../pages/EditJobPage'
import NotFoundPage from '../pages/NotFoundPage'


const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      })
      if (!res.ok) {
        console.warn('API error when adding job:', res.status)
      }
    } catch (err) {
      console.warn('Network error adding job:', err)
    }
  }

  // Delete Job
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) {
        console.warn('API error when deleting job:', res.status)
      }
    } catch (err) {
      console.warn('Network error deleting job:', err)
    }
  }

  // Update Job
  const updateJob = async (job) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      })
      if (!res.ok) {
        console.warn('API error when updating job:', res.status)
      }
    } catch (err) {
      console.warn('Network error updating job:', err)
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App