import { FaGithub } from "react-icons/fa";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { projects } from "../lib/projects";

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
  <section id="projects" className="py-24 px-4 relative snap-start min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {project.image ? (
                <div className="h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : null}

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-center gap-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} demo`}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <FaArrowUpRightFromSquare size={20} />
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/projects"
            className="cosmic-button inline-flex items-center gap-2"
          >
            View All Projects
            <FaArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};