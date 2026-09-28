import jobsData from '../../jobs.json'

export const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`)
    if (res.ok) {
      return await res.json()
    }
  } catch (err) {
    console.warn('API error in loader, falling back to local dataset:', err)
  }
  const localJob = jobsData?.jobs?.find((j) => String(j.id) === String(params.id))
  if (localJob) return localJob
  throw new Response('Job Not Found', { status: 404 })
}
