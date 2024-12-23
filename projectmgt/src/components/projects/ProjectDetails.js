import React from "react";
import { useLocation, useParams } from "react-router-dom";


const ProjectDetails = (props) => {
  const { id } = useParams();

  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - { id }</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque consectetur reiciendis, doloremque, minima modi alias non, repellendus tempore facilis error cumque amet debitis? Excepturi, eligendi! Nihil beatae voluptatibus animi accusantium.</p>
        </div>
        <div class="card-action grey lighten-4 grey-text">
          <div>Posted by Aderemi</div>
          <div>23rd December, 17:00pm</div>
        </div>
      </div>

    </div>
  )
}

export default ProjectDetails
