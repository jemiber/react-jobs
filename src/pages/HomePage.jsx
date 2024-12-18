import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage

/*
    <Hero />
    <HomeCards />
    <JobListing />
    <ViewAllJobs />
  All of this was in the main app component,
  now we put it in the HomePage
*/