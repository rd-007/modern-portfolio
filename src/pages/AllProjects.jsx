import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { projects } from "../lib/projects";

export const AllProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      <main className="pt-24 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Page Heading */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <FaArrowLeft size={18} />
              Back to Home
            </Link>
            <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              All <span className="text-primary">Projects</span>
            </h1>

            <p className="text-muted-foreground max-w-lg mx-auto">
              A collection of projects I've worked on, explored, and built
              while learning and experimenting with different technologies.
            </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                {/* Project Image */}
                {project.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : null}

                {/* Project Details */}
                <div className="p-6">
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

                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Project Links */}
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

        </div>
      </main>
    </div>
  );
};