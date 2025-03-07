import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./JobDetails.css";

import axios from "axios";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then((res) => {
        const foundJob = res.data.find(j => j.id.toString() === id);
        setJob(foundJob);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company_name} - {job.candidate_required_location}</p>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <button
        className="apply-btn"
        onClick={() => window.open(job.url, "_blank")}
      >
        Apply Now 🚀
      </button>
    </div>
  );
};

export default JobDetail;
