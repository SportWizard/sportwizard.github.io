export default function Projects() {
  const projects = {
    "Neuro Elysium": "neuro-elysium",
  };

  type ProjectName = keyof typeof projects;

  return (
    <>
      {(Object.keys(projects) as ProjectName[]).map((project, idx) => {
        return (
          <a href={`/projects/${projects[project]}`} key={idx}>
            <div className="bg-black rounded-lg m-6 p-6 shadow-xl/30 text-center inline-block w-[calc((100%-9rem)/3)] hover:bg-cyan-600">
              {project}
            </div>
          </a >
        );
      })}
    </>
  );
}