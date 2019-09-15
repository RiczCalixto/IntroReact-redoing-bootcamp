import React from "react";

const TechItem = ({ tech, handleDelete }) => {
  return (
    <li >
      {tech}
      <button type="button" onClick={() => handleDelete(tech)}>
        Deletar
      </button>
    </li>
  );
};

export default TechItem;
