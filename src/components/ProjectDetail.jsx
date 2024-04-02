import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  // Fetch the project details using the id

  return (
    <div>
      <h1>Project Detail for Project ID: {id}</h1>
      {/* Display the project details here */}
    </div>
  );
}

export default ProjectDetail;