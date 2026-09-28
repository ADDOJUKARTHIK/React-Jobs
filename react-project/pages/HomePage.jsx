import Hero from '../src/components/Hero'
import Homecards from '../src/components/Homecards'
import Joblistings from '../src/components/Joblistings'
import ViewAllJobs from '../src/components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <Joblistings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage