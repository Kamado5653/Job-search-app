import React, { useEffect, useState } from "react";
import SingleListing from "./SingleListing";
import useApi from "./useApi";

async function getJobs() {
  const resp = await fetch("http://localhost:7000/jobs");
  if (resp.status != 200) {
    throw Error(str(resp.status) + " | " + resp.statusText);
  }
  return resp.json();
}

const JobListings = ({ isHome }) => {
  const {
    data: jobs,
    loading,
    error,
  } = useApi(getJobs, {
    onError: (err) => {
      console.trace(err);
    },
  });

  const JobListings = jobs ? (isHome ? jobs.slice(0, 3) : jobs) : [];
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "All Jobs"}
          </h2>
          {!loading && !error && Array.isArray(jobs) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JobListings.map((job) => (
                <SingleListing
                  key={job.id}
                  JobType={job["type"]}
                  JobTitle={job["title"]}
                  JobDes={job["description"]}
                  JobSalary={job["salary"]}
                  JobLoc={job["location"]}
                  Jobid={job.id}
                ></SingleListing>
              ))}
            </div>
          )}
          {loading && (
            <div className="grid place-items-center">
              <h2 className="text-2xl mx-auto">Loading Jobs...</h2>
            </div>
          )}
          {error && (
            <div className="grid place-items-center">
              <h2 className="text-2xl mx-auto">{error.message}</h2>
            </div>
          )}
          <div></div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
