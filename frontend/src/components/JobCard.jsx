import { Link } from "react-router-dom";
import "../styles/JobList.css"; // Make sure it's imported

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <p className="company-name">{job.company}</p>
      <p className="location">📍 {job.location}</p>
      <Link to={`/job/${job.id}`}>
        <button className="details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default JobCard;
