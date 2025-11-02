import { ProjectCard } from "@/src/components/ProjectCard";
import { projects } from "@/data/project-detail";
import { Project } from "@/src/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-8 pb-2">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((p: Project) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
