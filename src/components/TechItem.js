import React from "react";

const TechItem = ({ tech, onDelete }) => {
  return (
    <li >
      {tech}
      <button type="button" onClick={onDelete}>
        Deletar
      </button>
    </li>
  );
};

export default TechItem;
