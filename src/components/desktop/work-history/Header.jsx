import React from "react";

const Header = ({ position, company, jobType, location }) => {
  return (
    <div>
      <p className="text-neutral-200 text-sm md:text-base font-normal !leading-snug mb-2">
        Joined{" "}
        <span className="text-lg md:text-xl font-medium inline-block ml-2 !leading-snug">
          {company}
        </span>
      </p>
      <p className="mb-4">
        <span className="text-sm md:text-base font-normal text-neutral-200">As</span>
        <span className="text-xl md:text-2xl font-medium inline-block ml-2 text-coral">
          {position}
        </span>
      </p>
      {jobType && location && (
        <p className="text-coal text-sm md:text-base font-normal mb-8">
          {jobType && <span className="inline-block">{jobType}</span>}
          <span className="text-teal inline-block mx-4">◈</span>
          {location && <span className="inline-block">{location}</span>}
        </p>
      )}
    </div>
  );
};

export default Header;
