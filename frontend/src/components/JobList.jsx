import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import "../styles/SearchBar.css"
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    job.candidate_required_location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div  className="job-page"> 
       <div  className="header" >
       <div className="website-name">JobFinder</div>
       <div  className="search-container">
      <input type="text" placeholder="Search job..."   className="search-input" onChange={(e) => setSearch(e.target.value)} />
      <select  className="filter-dropdown" onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="USA">USA</option>
      </select>
      </div>
      </div>
      <div  className="job-grid">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      </div>
      
    
    </div>
   
  );
};

export default JobList;
