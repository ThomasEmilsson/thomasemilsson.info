import React from "react";

const Experience = (experience) => {
  const { name, date, role, description, location } = experience.experience;
  return <div>{name}</div>;
};

export default Experience;
