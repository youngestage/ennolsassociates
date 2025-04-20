
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Users, History } from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<'company' | 'team' | 'history'>('company');

  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "25+ years of experience in construction and engineering management."
    },
    {
      name: "Sarah Johnson",
      position: "Head of Engineering",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Expert in structural engineering with a PhD from MIT."
    },
    {
      name: "Michael Chen",
      position: "Procurement Director",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "15+ years experience in global supply chain management."
    },
  ];

  const historyMilestones = [
    { year: 2000, title: "Company Founded", description: "Started as a small engineering consultancy." },
    { year: 2005, title: "International Expansion", description: "Opened first international office." },
    { year: 2010, title: "Major Project Milestone", description: "Completed first $100M+ project." },
    { year: 2015, title: "Innovation Award", description: "Received Industry Innovation Excellence Award." },
    { year: 2020, title: "Digital Transformation", description: "Implemented cutting-edge digital solutions." },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-12">About Enors Associates</h1>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={activeTab === 'company' ? 'default' : 'outline'}
            onClick={() => setActiveTab('company')}
            className="gap-2"
          >
            <Building className="h-4 w-4" />
            Company
          </Button>
          <Button
            variant={activeTab === 'team' ? 'default' : 'outline'}
            onClick={() => setActiveTab('team')}
            className="gap-2"
          >
            <Users className="h-4 w-4" />
            Our Team
          </Button>
          <Button
            variant={activeTab === 'history' ? 'default' : 'outline'}
            onClick={() => setActiveTab('history')}
            className="gap-2"
          >
            <History className="h-4 w-4" />
            History
          </Button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {activeTab === 'company' && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-enors-blue mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-6">
                  To be the leading provider of innovative engineering, procurement, and construction solutions in Africa and beyond.
                </p>
                <h2 className="text-2xl font-bold text-enors-blue mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  To deliver exceptional value to our clients through sustainable, cutting-edge solutions while maintaining the highest standards of quality and safety.
                </p>
                <Button asChild className="bg-enors-orange hover:bg-enors-red">
                  <Link to="/quote-request">Start Your Project</Link>
                </Button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Enors Associates Office"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center text-enors-blue">{member.name}</h3>
                  <p className="text-enors-orange text-center mb-2">{member.position}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-enors-blue/20" />
              {historyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid grid-cols-2 gap-8 mb-8 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'pr-8' : 'col-start-2 pl-8'}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-enors-orange rounded-full border-4 border-white" />
                    <h3 className="text-xl font-bold text-enors-blue">{milestone.year}</h3>
                    <h4 className="font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;
