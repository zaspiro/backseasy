
import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";

export default function Home() {
  const allProjects = getProjectMetadata();

  // Filtrar projetos brancos e pretos
  const butterflyProjects = allProjects.filter((project) => {
    return project.type === "butterfly"; 
  });
  const blackProjects = allProjects.filter((project) => {
    return project.type === "black";
  });

  const squareProjects = allProjects.filter((project) => {
    return project.type === "square";
  });

  const skyProjects = allProjects.filter((project) => {
    return project.type === "sky";
  });

  const whiteProjects = allProjects.filter((project) => {
    return project.type === "white";
  });

  // Mapear os projetos em pré-visualizações
  const butterflyProjectPreviews = butterflyProjects.map((project) => (
    <ProjectPreview category={"butterfly"} key={project.slug} {...project} />
  ));

  const blackProjectPreviews = blackProjects.map((project) => (
    <ProjectPreview category={"black"} key={project.slug} {...project} />
  ));

  const squareProjectPreviews = squareProjects.map((project) => (
    <ProjectPreview category={"square"} key={project.slug} {...project} />
  ));

  const skyProjectPreviews = skyProjects.map((project) => (
    <ProjectPreview category={"sky"} key={project.slug} {...project} />
  ));

  const whiteProjectPreviews = whiteProjects.map((project) => (
    <ProjectPreview category={"white"} key={project.slug} {...project} />
  ));

  return (
    <>
    <div className="border border-stroke-1 rounded-out max-w-[1800px] w-full p-12 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
      <h1>Animated backgrounds, coming soon....</h1> 
    </div>
     
    <div className="border border-stroke-1 rounded-out max-w-[1800px] w-full p-64 gap-32 flex flex-col max-[580px]:p-32 max-[580px]:gap-24" id="projects">
        <h2 className="text-3 font-medium">Backgrounds concepts</h2>
          <h2>Black</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {blackProjectPreviews}
          </div>

          <h2>Square </h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {squareProjectPreviews}
          </div>

          <h2>Sky </h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {skyProjectPreviews}
          </div>

          <h2>Butterfly </h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {butterflyProjectPreviews}
          </div>

          <h2>White</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-32 w-full h-fit max-[980px]:grid-cols-1">
            {whiteProjectPreviews}
          </div>
      </div>

    </>
  );
}

