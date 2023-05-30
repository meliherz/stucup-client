import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className={`section-title`}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;

SectionTitle.defaultProps = {
  title: "Section Title"
};