
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects = [
    {
      id: "1",
      title: "Metropolitan Office Tower",
      category: "Commercial",
      location: "Lagos, Nigeria",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      completed: true,
    },
    {
      id: "2",
      title: "Riverside Bridge Project",
      category: "Infrastructure",
      location: "Port Harcourt, Nigeria",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      completed: true,
    },
    {
      id: "3",
      title: "Healthcare Complex",
      category: "Institutional",
      location: "Accra, Ghana",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      completed: false,
    },
    {
      id: "4",
      title: "Solar Power Plant",
      category: "Energy",
      location: "Abuja, Nigeria",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      completed: true,
    },
    {
      id: "5",
      title: "Shopping Mall Development",
      category: "Commercial",
      location: "Kumasi, Ghana",
      imageUrl: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1",
      completed: false,
    },
    {
      id: "6",
      title: "Industrial Park",
      category: "Industrial",
      location: "Lagos, Nigeria",
      imageUrl: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e",
      completed: true,
    },
  ];

  const categories = ["all", ...new Set(projects.map((project) => project.category))];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-12">Our Projects</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="h-6 w-6 text-enors-orange" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No projects found in this category.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
