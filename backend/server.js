const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const JOB_API_URL = process.env.JOB_API_URL;



app.get("/api/jobs", async (req, res) => {
    try {
      const response = await axios.get(JOB_API_URL, {
        headers: {
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      });
  
      if (response.status !== 200) {
        return res.status(response.status).json({ error: "API Error", details: response.data });
      }
  
      res.json(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).json({ error: "Failed to fetch jobs", details: error.message });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
