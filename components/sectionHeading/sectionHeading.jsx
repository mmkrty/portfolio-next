import React from "react";

function SectionHeading(props) {
  return (
    <h2 className="text-3xl font-semibold mb-8 underline decoration-solid decoration-primary_yellow decoration-8 underline-offset-8">
      {props.title}
    </h2>
  );
}

export default SectionHeading;
