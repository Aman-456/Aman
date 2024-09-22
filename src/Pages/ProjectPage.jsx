import React from "react";
import Projects from "../components/Projects";
import SearchBar from "../components/SearchBar";
function ProjectPage() {
  const [project, setproject] = React.useState(null);
  return (
    <div className="m7">
      <SearchBar setproject={setproject} />
      <Projects list={100} project={project} query={true} />
    </div>
  );
}

export default ProjectPage;
