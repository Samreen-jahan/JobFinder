import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
