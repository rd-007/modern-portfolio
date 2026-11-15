import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [

    // Languages
    { name:"HTML/CSS", category:"languages" },
    { name:"JavaScript", category:"languages" },
    { name:"TypeScript", category:"languages" },
    { name:"Java", category:"languages" },
    { name:"Python", category:"languages" },

    // Frontend
    { name:"React", category:"frontend" },
    { name:"NextJS", category:"frontend" },
    { name:"Tailwind CSS", category:"frontend" },
    { name:"Vite", category:"frontend" },

    // Backend
    { name:"Node.js", category:"backend" },
    { name:"PostgreSQL", category:"backend" },
    { name:"Spring", category:"backend" },
    { name:"FastAPI", category:"backend" },
    { name:"Redis", category:"backend" },

    // Tools
    { name:"Git/Github", category:"tools" },
    { name:"Vercel", category:"tools" },
    { name:"Render", category:"tools" },
    { name:"Postman", category:"tools" },
    { name:"AWS", category:"tools" },
    { name:"Docker", category:"tools" },
    { name:"Notion", category:"tools" },
    { name:"Figma", category:"tools" },

];

const categories = ["languages", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("languages");

    const filteredSkills = skills.filter( (skill) => skill.category === activeCategory );

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary snap-start min-h-screen">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                 {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",

                        activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/70 text-foreground hover:bg-secondary"
                      )}
                    >
                      {category}
                    </button>
                 ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <h3 className="font-semibold text-lg">
                            {skill.name}
                        </h3>
                    </div>
                   ))}
                </div>

            </div>
        </section>
    );
};