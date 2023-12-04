import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <h1
      className="text-4xl"
      style={{
        backgroundImage:
          "linear-gradient(90deg,rgba(0,89,78,1) 0%, rgba(2,0,36,0.9) 15%, rgba(0,89,78,1.9) 40%)",
        color: "transparent",
        backgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
    >
      {title}
    </h1>
  );
};

export default Heading;
