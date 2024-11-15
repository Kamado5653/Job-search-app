import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const SingleListing = ({
  JobType,
  JobTitle,
  JobDes: desc,
  JobSalary,
  JobLoc,
  Jobid,
}) => {
  const [fulldes, setfulldes] = useState(false);

  const handleOnClick = () => {
    setfulldes((p) => !p);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{JobType}</div>
            <h3 className="text-xl font-bold line-clamp-1">{JobTitle}</h3>
          </div>

          <div className={"mb-5" + (!fulldes && " line-clamp-3")}>{desc}</div>
          <button className="text-indigo-500 mb-2" onClick={handleOnClick}>
            {fulldes ? "Read Less" : "Read More"}
          </button>
          <h3 className="text-indigo-500 mb-2">{JobSalary}/ Year</h3>
          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline text-lg mb-1 mr-1"></FaMapMarker>
              {JobLoc}
            </div>
            <a
              href={`/job/${Jobid}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleListing;
