/* import { useState, useEffect } from "react" */
import { useParams, useLoaderData } from "react-router-dom";
im/* port Spinner from "../components/Spinner"; */

const JobPage = () => {
    const { id } = useParams()
    const job = useLoaderData()
    /* This does the same as the code below the return 
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJobs(data)
            } catch (error) {
                console.log('Error setting data', error)
            } finally {
                setLoading(false);
            }
        }
        fetchJob()
    }, []) */

  /* return loading ? <Spinner /> : (<h1>{ job.tittle }</h1>) */
    return <h1>{job.tittle}</h1>
}
const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export { JobPage as default, jobLoader };